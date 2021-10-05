'use strict';

// Task 1

// Boolean(Number(’10’)) + 1;  Результат = 2       /Number/
//  `sub ` + Number(false);    Результат = sub 0  /string/ 
//  16 * `      91    `;       Результат = 1456   /Number/
//  true - 70;                 Результат = -69    /Number/
// Number(1 + String(1)) + 1;  Результат = 12     /Number/

// Task 2

const hour = prompt('Введите количество часов');

const seconds = (+hour * 3600) / 1;

alert(`В ${hour} ч будет ${seconds} секунд`);

// Task 3

let num = 1;

num += 12;
num -= 14;
num *= 5;
num /= 7;
num++;
num--;

alert(num);

