document.getElementById("login-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get login form values
    var loginEmail = document.getElementById("login-email").value;
    var loginPassword = document.getElementById("login-password").value;
  
    // Perform login validation or further processing
    // ...
  
    // Redirect to another page
    window.location.href = "welcome.html";
  });
  
  document.getElementById("signup-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    // Get signup form values
    var username = document.getElementById("username").value;
    var email = document.getElementById("email").value;
    var password = document.getElementById("password").value;
  
    // Perform signup validation or further processing
    // ...
  
    // Redirect to another page
    window.location.href = "welcome.html";
  });
  