(function () {
  let form = document.querySelector('#contact-form');
  let emailInput = document.querySelector('#contact-email');
  let nameInput = document.querySelector('#contact-name');
  let telInput = document.querySelector('#contact-tel');
  let msgInput = document.querySelector('#contact-msg');

  function validateEmail() {
    let value = emailInput.value;
    if (!value) {
      showErrorMessage(emailInput, '"Email" is a required field.');
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

  function validateName() {
    let value = nameInput.value;
    if (!value) {
      showErrorMessage(nameInput, '"Name" is a required field.');
      return false;
    }

    // min 3 chars
    if (value.length < 3) {
      showErrorMessage(nameInput, 'Name must be at least 3 letters.');
      return false;
    }
    // name can not contain numbers
    if (/\d/.test(value)) {
      showErrorMessage('"Name" can not contain numbers.');
      return false;
    }

    showErrorMessage(nameInput, null);
    return true;
  }

  function validateTel() {
    let value = telInput.value;

    // phone can not contain letters ---- NOT CORRECT REGEX YET 
    if (/[a-zA-Z]/.test(value)) {
      showErrorMessage(telInput, '"Phone" can not contain letters.');
      return false;
    }
    // min 8 chars
    if (value.length < 8) {
      showErrorMessage(telInput, 'Phone must be at least 8 digits.');
      return false;
    }

    showErrorMessage(telInput, null);
    return true;
  }

  function validateMsg() {
    let value = msgInput.value;

    // min 8 chars
    if (value.length < 8) {
      showErrorMessage(msgInput, 'Message must be at least 8 letters.');
      return false;
    }

    showErrorMessage(msgInput, null);
    return true;
  }

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
  nameInput.addEventListener('input', validateName);
  telInput.addEventListener('input', validateTel);
  msgInput.addEventListener('input', validateMsg);

  form.addEventListener('submit', (e) => {
    e.preventDefault(); // Do not submit to the server
    if (validateEmail() && validateName() && validateMsg()) {
      alert('Success!'); // More functionality will have to be added here
    }
    else {
      alert('Please make sure all fields are correct and valid!')
    }
  })

  // reCaptcha callback
  // needs to make http POST request (with secret key) from the backend with the token
  // readm more here: https://developers.google.com/recaptcha/docs/verify
  // then also the "score" value from the JSON response must be set to a threshold between 0 and 1, below it the recaptcha is not "solved"
  /* function onSubmit(token) {
    form.submit();
    alert('Captcha correct!'); // More functionality will have to be added here
  } */

})();