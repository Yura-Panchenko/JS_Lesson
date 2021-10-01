// let loginAdmin = 'admin';
// let adminPassword = 'admin';
// let loginUser = 'user';
// let userPassword = '1234';
// let login;
// let password;

// login = prompt('Enter your login:');

// if (login == loginAdmin || login == loginUser) {
//     let password = prompt('Enter your password:');

//     if (adminPassword == password) {
//         alert('Привет ADMIN !');
//     } else if (userPassword == password) {
//         alert('Поздравляю Вы в системе !');
//     } else {
//         alert('Пароль не верен');
//     }
// } else {
//     alert('Такого пользователя не существует');
// }

//HW 1
//1
// for (let i = 1; i < 11; i++) {
//     if (!(i % 3)) {
//         console.log('FizBuz');
//     } else if (!(i % 2)) {
//         console.log('Fiz');
//     } else {
//         console.log('Buz');
//     }
// }
//2
// let result = 1;
// for (let f = 10; f > 0; f--) {
//     result *= f;
// }
// console.log(result);
//3
const sheetsInReamPaper = 500;
const consumptionPerWeek = 1200;
const weeksAmount = 8;
let result = '';
let balance = '';
let res = '';
let resultIndex = '';
result = (weeksAmount * consumptionPerWeek) / sheetsInReamPaper
result = result.toString();

result = result.replace('.', ',')
resultIndex = result.search(',');
if (resultIndex == -1) {
    res = result;
} else {
    balance = result.substr(resultIndex + 1);
    balance = '0.' + balance;
    result = result.replace(',', '.')
    res = (+result - +balance) + 1;
}
console.log(res);


// let d = '';
// let f = '';
// let n = '';

// result = result.replace('.', ',');
// resultIndex = result.search(',');
// balance = result.substr(resultIndex + 1);
// balance = '0.' + balance;
// balance = +balance;
// result = result.replace(',', '.');
// result = +result;

// if (!(Number.isInteger(result))) {
//     for (n = 2; n < Infinity; n++) {
//         d = result * n;

//         if (Number.isInteger(d)) {
//             break;
//         }
//     }
//     f = ((d - balance * n) / n) + 1;
// } else {
//     f = result;
// }
// console.log(f);