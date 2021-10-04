// let loginAdmin = 'admin';
// let adminPassword = 'admin';
// let loginUser = 'user';
// let userPassword = '1234';
// let login;
// let password;

// login = prompt('Enter your login:');

// if (login == loginAdmin || login == loginUser) {
//     if (login == loginAdmin) {
//         let password = prompt('Enter your password:');
//         if (adminPassword == password) {
//             alert('Привет ADMIN !');
//         } else {
//             alert('Пароль не верен');
//         }
//     } else if (login == loginUser) {
//         let password = prompt('Enter your password:');
//         if (userPassword == password) {
//             alert('Поздравляю Вы в системе !');
//         } else {
//             alert('Пароль не верен');
//         }
//     }
// } else if (login == null) {
//     alert('Вы передумали?');
// } else {
//     alert('Такого пользователя не существует');
// }

//HW 1
//1
for (let i = 1; i < 11; i++) {
    if (!(i % 3)) {
        console.log('FizBuz');
    } else if (!(i % 2)) {
        console.log('Fiz');
    } else {
        console.log('Buz');
    }
}

//2
let factorial = 1;
for (let f = 10; f > 0; f--) {
    factorial *= f;
}
console.log(factorial);

//3
// -A
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

// - B
const sheetsInReamPaperB = 500;
const consumptionPerWeekB = 1200;
const weeksAmountB = 8;
let resultB = '';
let balanceB = '';
let resB = '';
let resultIndexB = '';
let d = '';
let f = '';
let n = '';

resultB = resultB.replace('.', ',');
resultIndexB = resultB.search(',');
balanceB = resultB.substr(resultIndexB + 1);
balanceB = '0.' + balanceB;
balanceB = +balanceB;
resultB = resultB.replace(',', '.');
resultB = +resultB;

if (!(Number.isInteger(resultB))) {
    for (n = 2; n < Infinity; n++) {
        d = resultB * n;

        if (Number.isInteger(d)) {
            break;
        }
    }
    f = ((d - balanceB * n) / n) + 1;
} else {
    f = resultB;
}
console.log(f);

//4
function house() {
    const roomsOnFloor = 3;
    const floors = 4;
    const roomNumber = 16;
    let porch = '';
    let floor = '';
    let porchNumber = roomNumber / (floors * roomsOnFloor);
    porchNumber = porchNumber.toString();
    let index = porchNumber.indexOf('.')
    porch = porchNumber.slice(0, index);
    // debugger
    if (+porch <= porchNumber) {
        console.log("Ваш подъезд №" + (+porch + 1));
    }

    let num = roomNumber / roomsOnFloor;
    let numStr = num.toString();
    let numIndex = numStr.indexOf('.');
    let numfloor = '';
    let numCel = numStr.substring(0, numIndex);
    if (numIndex == -1) {
        numfloor = num;
        if (numfloor > floors) {
            numfloor = numfloor / floors;
            console.log('dddddd');
            console.log(numfloor);
        }
        console.log("Ваш этаж №" + numfloor);
    }
    else if (numCel < num) {
        if (numfloor > floors) {
            numfloor = numfloor / floors;
            console.log('aaaaaa');
            console.log(numfloor);
        }
        console.log("Ваш этаж №" + (+numCel + 1));
    }
};

house();

//5
const medianNumber = 8;
for (let i = 1; i <= medianNumber; i++) {
    let line = '';
    for (let j = 1; j <= (medianNumber * 2 - 1); j++) {
        if (j == (medianNumber)) {
            line += '#';
            continue;
        } else if (j > (medianNumber - i) && j < (medianNumber + i)) {
            line += '#';
            continue;
        }
        line += '-';
    }
    console.log(line);
}