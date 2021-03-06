var submitBtn = document.getElementById("submitContact");
var firstNameError = document.getElementById("firstNameError");
var lastNameError = document.getElementById("lastNameError");
var emailError = document.getElementById("emailError");
var messageError = document.getElementById("message");

firstNameError.style.display = "none";
lastNameError.style.display = "none";
emailError.style.display = "none";
messageError.style.display = "none";

// submit button valdiation starts
submitBtn.addEventListener("click", function(e) {
  e.preventDefault();
  var inputName = document.getElementById("firstName").value;
  var inputLast = document.getElementById("lastName").value;
  var inputEmail = document.getElementById("email").value;
  var inputMessage = document.getElementById("message").value;
  // submit button valdiation ends

  // checking all three options
  function checkFirstName(firstName) {
    var firstNameRequired = /[a-zA-Z.-]/g;
    if (firstName.match(firstNameRequired)) {
      firstNameError.style.display = "none";
    } else {
      firstNameError.style.display = "block";
    }
  }

  function checkLastName(lastName) {
    var lastNameRequired = /[a-zA-Z.-]/g;
    if (lastName.match(lastNameRequired)) {
      lastNameError.style.display = "none";
    } else {
      lastNameError.style.display = "block";
    }
  }

  function checkEmail(emailAdr) {
    var emailRequired = /^[a-zA-Z0-9.-_]+@[a-zA-Z0-9.-_]+\.[a-zA-Z]{2,4}$/;
    if (emailAdr.match(emailRequired)) {
      emailError.style.display = "none";
    } else {
      emailError.style.display = "block";
    }
  }

  function checkMessage(message) {
    var messageRequired = /^[a-zA-Z0-9.-_]/{25}/;
    if(message.length >= '25') {
        messageError.style.display = "none";
    } else {
      messageError.style.display = "block";
    }
  }
  // end of checking

  checkFirstName(inputName);
  checkLastName(inputLast);
  checkEmail(inputEmail);
});
