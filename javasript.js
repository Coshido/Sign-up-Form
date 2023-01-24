let password = document.querySelector("#password");
let confirmPassword = document.querySelector("#confirm");
let form = document.querySelector("#form");
let submitButton = document.querySelector("#submit-button");

let email = document.querySelector("#email");
email.addEventListener("input", () => {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an email address!");
  } else {
    email.setCustomValidity("");
  }
});

let phone = document.querySelector("#phone");
let phoneRegex = /^[0-9]*$/;
phone.addEventListener("input", () => {
  const isValid = phone.value.length === 0 || phoneRegex.test(phone.value);
  if (isValid) {
    phone.setCustomValidity("");
  } else {
    phone.setCustomValidity("I am expecting a phone number!");
  }
});

password.addEventListener("input", () => {
  if (password.value.length < 8) {
    password.setCustomValidity("Password must be 8 characters or longer!");
  } else {
    password.setCustomValidity("");
  }
});

submitButton.addEventListener("click", validatePassword);

function validatePassword() {
  console.log("validating");
  if (password.value != confirmPassword.value) {
    console.log("condition true");
    confirmPassword.setCustomValidity("Passwords don't match");
    confirmPassword.reportValidity();
    console.log("nah boy");
  } else {
    confirmPassword.setCustomValidity("");
  }
}
