(function() {
    let form = document.querySelector('#contact-form');
    let emailInput = document.querySelector('#contact-email');
    
    function validateEmail() {
      let value = emailInput.value;
      if (!value) {
        showErrorMessage(emailInput, 'Email is a required field.');
        return false;
      }
  
      if (value.indexOf('@') === -1 || value.indexOf('.') === -1) {
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
  
  })();