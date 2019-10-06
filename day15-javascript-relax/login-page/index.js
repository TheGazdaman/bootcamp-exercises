

const userNames = ['Michal', 'Paul', 'Martin', 'Petr', 'Vojta',];
/* const passWords = ['Gazdik', 'Coltofeanu', 'Hanzlik', 'Bisof', 'Vanek',];
 */
const login = document.querySelector('#login');

const pass = document.querySelector('#password');
const pass2 = document.querySelector('#password2');

const access = document.querySelector('#access');


const insertPass = () => {
  if (pass.value.length >= 8 && pass2.value.length >= 8 && pass.value === pass2.value) {
    access.innerHTML += "It's a match!"
  } 
  if (pass.value.length < 8 && pass2.value.length < 8 && pass.value === pass2.value) {
    access.innerHTML += "Your password is not secure enough"
} else {
    access.innerHTML += "No match!"
}
}

// tohle ověření je pro již uložená hesla v array const passWords
/* const overeni = () => {
if (userNames.indexOf(login.value)> -1 && passWords.indexOf(pass.value) === userNames.indexOf(login.value)) {
  access.innerHTML += ' Granted';
} else {
  access.innerHTML += ' Denied';
}
} */

const btn = document.querySelector('#btn-login');
btn.addEventListener('click', insertPass);