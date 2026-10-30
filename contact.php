<?php
// Contact form endpoint. Receives JSON from js/contact-form.js and forwards it by email.
// Spam protection without external services: honeypot field, minimum fill time, per-IP rate limit.

declare(strict_types=1);

const RECIPIENT = 'mail@michaelflohrschuetz.com';
// Sender must be an address on this domain, otherwise the hosting mail server rejects it.
const SENDER = 'mail@michaelflohrschuetz.com';
const MIN_FILL_SECONDS = 3;
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW = 3600;
const MAX_MESSAGE_LENGTH = 2000;

header('Content-Type: application/json; charset=utf-8');
header('X-Content-Type-Options: nosniff');

function respond(int $status, string $message): void
{
  http_response_code($status);
  echo json_encode(['ok' => $status === 200, 'message' => $message]);
  exit;
}

// Bots are told the message was sent so they do not retry with different payloads.
function respondSilently(): void
{
  respond(200, 'sent');
}

function rateLimited(): bool
{
  $ip = $_SERVER['REMOTE_ADDR'] ?? 'unknown';
  $file = sys_get_temp_dir() . '/contact-form-' . hash('sha256', $ip) . '.json';
  $now = time();
  $hits = [];
  if (is_file($file)) {
    $hits = json_decode((string) file_get_contents($file), true) ?: [];
    $hits = array_values(array_filter($hits, fn($t) => $t > $now - RATE_LIMIT_WINDOW));
  }
  if (count($hits) >= RATE_LIMIT_MAX) {
    return true;
  }
  $hits[] = $now;
  file_put_contents($file, json_encode($hits), LOCK_EX);
  return false;
}

// Prevent header injection through user-controlled values.
function singleLine(string $value): string
{
  return trim(str_replace(["\r", "\n", "\0"], ' ', $value));
}

if (($_SERVER['REQUEST_METHOD'] ?? '') !== 'POST') {
  respond(405, 'Method not allowed');
}

$data = json_decode((string) file_get_contents('php://input'), true);
if (!is_array($data)) {
  respond(400, 'Invalid request');
}

// Honeypot: real users never see this field, so anything in it comes from a bot.
if (!empty($data['website'])) {
  respondSilently();
}

$startedAt = (int) ($data['startedAt'] ?? 0);
if ($startedAt <= 0 || (time() - intdiv($startedAt, 1000)) < MIN_FILL_SECONDS) {
  respondSilently();
}

$name = singleLine((string) ($data['name'] ?? ''));
$email = singleLine((string) ($data['email'] ?? ''));
$message = trim((string) ($data['message'] ?? ''));

if (mb_strlen($name) < 2 || mb_strlen($name) > 100) {
  respond(422, 'Please enter your name.');
}
if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
  respond(422, 'Please enter a valid email address.');
}
if (mb_strlen($message) < 8 || mb_strlen($message) > MAX_MESSAGE_LENGTH) {
  respond(422, 'Message must be between 8 and ' . MAX_MESSAGE_LENGTH . ' characters.');
}

if (rateLimited()) {
  respond(429, 'Too many messages. Please try again later.');
}

$subject = '=?UTF-8?B?' . base64_encode("Website contact from {$name}") . '?=';
$body = "Name: {$name}\nEmail: {$email}\nIP: " . ($_SERVER['REMOTE_ADDR'] ?? '') . "\n\n{$message}\n";
$headers = [
  'From: ' . SENDER,
  'Reply-To: ' . $email,
  'MIME-Version: 1.0',
  'Content-Type: text/plain; charset=UTF-8',
  'Content-Transfer-Encoding: 8bit',
];

if (!mail(RECIPIENT, $subject, $body, implode("\r\n", $headers))) {
  respond(500, 'Sending failed. Please contact me via email instead.');
}

respond(200, 'sent');
