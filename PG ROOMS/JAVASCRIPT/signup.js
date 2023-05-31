document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get form values
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    // Perform validation or further processing
    // ...
  
    // Redirect to another page
    window.location.href = "welcome.html";
  });
  
  window.addEventListener('DOMContentLoaded', function() {
    var firstNameInput = document.getElementById('fname');
    var lastNameInput = document.getElementById('lname');
    var phoneNumberInput = document.getElementById('phnumber');
    var emailInput = document.getElementById('email');
    var userNameInput = document.getElementById('username');
    var submitButton = document.getElementById('submit');
    
    // Add event listener for form submission
    submitButton.addEventListener('click', function(event) {
      event.preventDefault(); // Prevent form submission
      
      // Check if required fields are empty
      if (firstNameInput.value === '') {
        alert('Please enter your first name');
        return;
      }
      
      if (lastNameInput.value === '') {
        alert('Please enter your last name');
        return;
      }
      
      if (phoneNumberInput.value === '') {
        alert('Please enter your phone number');
        return;
      }

      if (emailInput.value === '') {
        alert('Please enter your email');
        return;
      }

      if (userNameInput.value === '') {
        alert('Please enter username');
        return;
      }
      
      // Validate phone number
      var phoneNumber = phoneNumberInput.value;
      if (!/^\d{10}$/.test(phoneNumber)) {
        alert('Please enter a valid 10-digit phone number');
        return;
      }
      
      // Submit the form if all conditions are met
      alert('Form submitted successfully');
      document.getElementById('form').submit();
    });
  });