let password = document.querySelector('#password');
let confirmPassword = document.querySelector('#confirm')
let form = document.querySelector('#form');

function validatePassword(){
    console.log("validating");
    if(password.value != confirmPassword.value){
        console.log("condition true");
        confirmPassword.setCustomValidity("Passwords don't match");
        confirmPassword.reportValidity();
        console.log('nah boy')
    } else {
        confirmPassword.setCustomValidity("");
    }
}


