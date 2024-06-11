// function validateInputCustom(inputId, regex, errorMessage) {
//     const input = document.getElementById(inputId);
//     const errorSpan = document.getElementById(inputId + 's');
//     if (!regex.test(input.value)) {
//         errorSpan.style.visibility = 'visible';
//     } else {
//         errorSpan.style.visibility = 'hidden';
//     }
// }

// function validateEmailMatchCustom() {
//     const email1 = document.getElementById('email').value;
//     const email2 = document.getElementById('emaill').value;
//     const errorSpan = document.getElementById('emaills');
//     if (email1 !== email2) {
//         errorSpan.style.visibility = 'visible';
//     } else {
//         errorSpan.style.visibility = 'hidden';
//     }
// }

// function validatePassMatchCustom() {
//     const pass1 = document.getElementById('Password').value;
//     const pass2 = document.getElementById('ConfirmP').value;
//     const errorSpan = document.getElementById('ConfirmPa');
//     if (pass1 !== pass2) {
//         errorSpan.style.visibility = 'visible';
//     } else {
//         errorSpan.style.visibility = 'hidden';
//     }
// }

// function validateBirthDate() {
//     const birthDate = document.getElementById('bDate').value;
//     const errorSpan = document.getElementById('bdates');
//     const regex = /^(\d{2})\/(\d{2})\/(\d{4})$/;
//     if (!regex.test(birthDate)) {
//         errorSpan.style.visibility = 'visible';
//     } else {
//         errorSpan.style.visibility = 'hidden';
//     }
// }

// document.addEventListener("DOMContentLoaded", function() {
//     const inputs = document.querySelectorAll('input[type="text"], input[type="password"]');
//     inputs.forEach(input => {
//         input.addEventListener('change', function() {
//             switch (this.id) {
//                 case 'fNAme':
//                 case 'lName':
//                     validateInputCustom(this.id, /^[^\d]+$/, 'Numbers are not allowed');
//                     break;
//                 case 'bDate':
//                     validateBirthDate();
//                     break;
//                 case 'email':
//                     validateInputCustom(this.id, /^[^\s@]+@[^\s@]+\.[^\s@]+$/, 'The e-mail is not valid');
//                     break;
//                 case 'emaill':
//                     validateEmailMatchCustom();
//                     break;
//                 case 'Password':
//                     validateInputCustom(this.id, /^(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/, 'Password must be at least 8 characters long and include at least one special character');
//                     break;
//                 case 'ConfirmP':
//                     validatePassMatchCustom();
//                     break;
//             }
//         });
//     });
// });
