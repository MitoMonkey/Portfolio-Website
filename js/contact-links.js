// Email address and phone number are assembled at runtime so they never appear
// as plain text in the HTML source, where harvesting bots pick them up.
const EMAIL_PARTS = ["mail", "michaelflohrschuetz", "com"];
const PHONE_PARTS = ["49", "163", "163", "1858"];
const EMAIL_SUBJECT = "WebDev contact";

export function email() {
  return `${EMAIL_PARTS[0]}@${EMAIL_PARTS[1]}.${EMAIL_PARTS[2]}`;
}

export function phone() {
  return `+${PHONE_PARTS.join("")}`;
}

// Fills every element carrying data-contact="email|phone|whatsapp" inside root.
// Elements with data-contact-text additionally get the readable value as text content.
export function fillContactLinks(root = document) {
  const fill = (kind, href, text) => {
    root.querySelectorAll(`[data-contact="${kind}"]`).forEach((el) => {
      el.setAttribute("href", href);
      if (el.hasAttribute("data-contact-text")) {
        el.textContent = text;
      }
    });
  };
  fill("email", `mailto:${email()}?subject=${encodeURIComponent(EMAIL_SUBJECT)}`, email());
  fill("phone", `tel:${phone()}`, phone());
  fill("whatsapp", `https://wa.me/${PHONE_PARTS.join("")}`, phone());
}

// Fill links on the page itself; the footer fills its own after it is attached.
fillContactLinks();
