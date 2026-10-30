(function () {
  const form = document.querySelector("#contact-form");
  const emailInput = document.querySelector("#contact-form__email");
  const nameInput = document.querySelector("#contact-form__name");
  const msgInput = document.querySelector("#contact-form__msg");
  const honeypot = document.querySelector("#contact-form__website");
  const submit = document.querySelector("#contact-form__submit");

  const successInfo = document.querySelector("#contact-form__success");
  const sendingInfo = document.querySelector("#contact-form__sending");
  const sendingError = document.querySelector("#contact-form__error");

  // Sent along so the server can reject submissions that were filled in faster than a human could.
  const startedAt = Date.now();

  function validateEmail() {
    const value = emailInput.value.trim();
    if (!value) {
      showErrorMessage(emailInput, '"Email" is a required field.');
      return false;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/.test(value)) {
      showErrorMessage(emailInput, "Please enter a valid email address.");
      return false;
    }
    showErrorMessage(emailInput, null);
    return true;
  }

  function validateName() {
    const value = nameInput.value.trim();
    if (!value) {
      showErrorMessage(nameInput, '"Name" is a required field.');
      return false;
    }
    if (value.length < 2) {
      showErrorMessage(nameInput, '"Name" must be at least 2 letters.');
      return false;
    }
    showErrorMessage(nameInput, null);
    return true;
  }

  function validateMsg() {
    if (msgInput.value.trim().length < 8) {
      showErrorMessage(msgInput, "Message must be at least 8 letters.");
      return false;
    }
    showErrorMessage(msgInput, null);
    return true;
  }

  function showErrorMessage(input, message) {
    const container = input.parentElement; // The .input-wrapper
    const existing = container.querySelector(".error-message");
    if (existing) {
      container.removeChild(existing);
    }
    if (message) {
      const error = document.createElement("div");
      error.classList.add("error-message");
      error.innerText = message;
      container.appendChild(error);
    }
  }

  function showStatus(element) {
    [successInfo, sendingInfo, sendingError].forEach((el) => {
      el.style.display = el === element ? "block" : "none";
    });
  }

  async function send() {
    showStatus(sendingInfo);
    submit.disabled = true;
    try {
      const response = await fetch("contact.php", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: nameInput.value.trim(),
          email: emailInput.value.trim(),
          message: msgInput.value.trim(),
          website: honeypot.value,
          startedAt,
        }),
      });
      const result = await response.json().catch(() => ({}));
      if (!response.ok) {
        throw new Error(result.message || "Sending failed.");
      }
      showStatus(successInfo);
      form.reset();
    } catch (err) {
      sendingError.textContent =
        (err.message || "Sending failed.") +
        " You can also reach me via the email link below.";
      showStatus(sendingError);
    } finally {
      submit.disabled = false;
    }
  }

  emailInput.addEventListener("input", validateEmail);
  nameInput.addEventListener("input", validateName);
  msgInput.addEventListener("input", validateMsg);

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const valid = [validateName(), validateEmail(), validateMsg()].every(Boolean);
    if (valid) {
      void send();
    }
  });
})();
