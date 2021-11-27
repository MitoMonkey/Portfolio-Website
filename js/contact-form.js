(function () {
  let form = document.querySelector('#contact-form');
  let emailInput = document.querySelector('#contact-email');

  function validateEmail() {
    let value = emailInput.value;
    if (!value) {
      showErrorMessage(emailInput, 'Email is a required field.');
      return false;
    }

    // there must be at least 1 char before the @ , at least 1 char after the @ and at least 2 chars after the .
    if (value.indexOf('@') < 1 || value.indexOf('.') < value.indexOf('@') + 2 || value.indexOf('.') + 2 >= value.length) {
      showErrorMessage(emailInput, 'Please enter a valid email address.');
      return false;
    }

    showErrorMessage(emailInput, null);
    return true;
  }

  /* not needed because only email address is validated
  function validateForm() {
    let isValidEmail = validateEmail();
    let isValidPassword = validatePassword();
    return isValidEmail && isValidPassword;
  }
  */

  function showErrorMessage(input, message) {
    let container = input.parentElement; // The .input-wrapper

    // Remove an existing error
    let error = container.querySelector('.error-message');
    if (error) {
      container.removeChild(error);
    }

    // Now add the error if the message isn’t empty
    if (message) {
      let error = document.createElement('div');
      error.classList.add('error-message');
      error.innerText = message;
      container.appendChild(error);
    }
  }

  emailInput.addEventListener('input', validateEmail);

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Do not submit to the server
    if (validateEmail()) {
      alert('Success!'); // More functionality will have to be added here
    }
  })

  // reCaptcha callback
  // needs to make http POST request (with secret key) from the backend with the token
  // readm more here: https://developers.google.com/recaptcha/docs/verify
  // then also the "score" value from the JSON response must be set to a threshold between 0 and 1, below it the recaptcha is not "solved"
  function onSubmit(token) {
    form.submit();
    alert('Captcha correct!'); // More functionality will have to be added here
  }

})();