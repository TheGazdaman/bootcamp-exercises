

const userNames = ['Michal', 'Paul', 'Martin', 'Petr', 'Vojta',];
const passWords = ['Gazdik', 'Coltofeanu', 'Hanzlik', 'Bisof', 'Vanek',];

const login = document.querySelector('#login');

const pass = document.querySelector('#password');

const access = document.querySelector('#access');


const overeni = () => {
if (userNames.indexOf(login.value)> -1 && passWords.indexOf(pass.value) === userNames.indexOf(login.value)) {
  access.innerHTML += ' Granted';
} else {
  access.innerHTML += ' Denied';
}
}


const btn = document.querySelector('#btn-login');
btn.addEventListener('click', overeni);