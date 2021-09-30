let loginAdmin = 'admin';
let adminPassword = 'admin';
let loginUser = 'user';
let userPassword = '1234';
let login;
let password

login = prompt('Enter your login:');

if (login == loginAdmin || login == loginUser) {
    let password = prompt('Enter your password:');

    if (adminPassword == password) {
        alert('Привет ADMIN !');
    } else if (userPassword == password) {
        alert('Поздравляю Вы в системе !');
    } else {
        alert('Пароль не верен');
    }
} else {
    alert('Такого пользователя не существует');
}