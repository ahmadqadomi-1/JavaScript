function validateInputCustom(inputId, regex, errorMessage) {
    const input = document.getElementById(inputId);
    const errorSpan = document.getElementById(inputId + 's');
    if (!regex.test(input.value)) {
        errorSpan.style.visibility = 'visible';
    } else {
        errorSpan.style.visibility = 'hidden';
    }
}

function validateEmailMatchCustom() {
    const email1 = document.getElementById('email').value;
    const email2 = document.getElementById('emaill').value;
    const errorSpan = document.getElementById('emaills');
    if (email1 !== email2) {
        errorSpan.style.visibility = 'visible';
    } else {
        errorSpan.style.visibility = 'hidden';
    }
}

function validatePassMatchCustom() {
    const pass1 = document.getElementById('Password').value;
    const pass2 = document.getElementById('ConfirmP').value;
    const errorSpan = document.getElementById('ConfirmPa');
    if (pass1 !== pass2) {
        errorSpan.style.visibility = 'visible';
    } else {
        errorSpan.style.visibility = 'hidden';
    }
}
function validatePass() {
    const pass1 = document.getElementById('Password').value;
    const pass2 = document.getElementById('ConfirmP').value;
    const errorSpan = document.getElementById('pass');
    const errorSpan2 = document.getElementById('ConfirmPa2');
    if (pass1.length <8 && pass2.length <8) {
        errorSpan.style.visibility = 'visible';
        errorSpan2.style.visibility = 'visible';
    } else {
        errorSpan.style.visibility = 'hidden';
        errorSpan2.style.visibility = 'hidden';
    }
    
}

function validateBirthDate() {
    const birthDate = document.getElementById('bDate').value;
    const errorSpan = document.getElementById('bdates');
    const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
    if (!regex.test(birthDate)) {
        errorSpan.style.visibility = 'visible';
    } else {
        errorSpan.style.visibility = 'hidden';
    }
}
document.querySelectorAll(".error").forEach(error => error.style.visibility= "hidden");  //get all errors then hided all

document.addEventListener("DOMContentLoaded", function() {

    
    const inputs = document.querySelectorAll('input[type="text"], input[type="password"]');
    inputs.forEach(input => {
        input.addEventListener('change', function() {
            switch (this.id) {
                case 'fNAme':
                case 'lName':
                    validateInputCustom(this.id, /^[^\d]+$/, 'Numbers are not allowed');
                    break;
                case 'bDate':
                    validateBirthDate();
                    break;
                case 'email':
                    validateInputCustom(this.id, /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'The e-mail is not valid');
                    break;
                case 'emaill':
                    validateEmailMatchCustom();
                    break;
                case 'Password':
                    validatePass();
                    break;
                    
                case 'ConfirmP':
                    validatePassMatchCustom();
                    validatePass();
                    break;
                

            }
        });
    });
});

