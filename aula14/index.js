// IEEE 754-2008

let num1 = 0.7;  // Number
let num2 = 0.1;  // Number

num1 = ((num1 * 100) + (num2 * 100)) / 100;  // 0.8
num1 = ((num1 * 100) + (num2 * 100)) / 100;  // 0.9
num1 = ((num1 * 100) + (num2 * 100)) / 100;  // 1.0
console.log(num1);
console.log(Number.isInteger(num1));

// num1 += num2;  // 0.8
// num1 += num2;  // 0.9
// num1 += num2;  // 1.0

// num1 = parseInt(num1.toFixed(2));

// console.log(num1);
// console.log(Number.isInteger(num1));

// // console.log(num1.toString(2) + num2);
// console.log(typeof num1);
// console.log(num1.toString(2));  // Representação em binário

// console.log(num1.toFixed(2));  // Fixando casas decimais
// console.log(Number.isInteger(num1));  // Validando se um número é inteiro
// let temp = num1 * "Olá";  // Retorna NaN
// console.log(temp);
// console.log(Number.isNaN(temp));  // Validando se é do tipo NaN