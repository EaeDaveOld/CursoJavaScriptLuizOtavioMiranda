/**
 * Aritméticos
 * + Adição | Concatenação
 * - Subtração
 * / Divisão
 * * Multiplicação
 * **  Exponenciação | Potenciação
 * % Módulo | Resto da divisão
 */

/**
 * Ordem de precedência
 * 1° | ()
 * 2° | **
 * 3° | * ou / ou %
 * 4° | + ou -
 */

// Soma
const num1 = 5;
const num2 = 2;
console.log(`Soma | ${num1} + ${num2} = ${num1 + num2}`);  // Foi feito a soma entre "num1" e "num2"

// Concatenação
const num3 = "3";
const num4 = 22;
console.log(`Concatenação | num3 + num4 = ${num3 + num4}`);  // Foi feito a concatenação entre "num3" e "num4"

// Subtração
console.log(`Subtração | ${num1} - ${num2} = ${num1 - num2}`);

// Multiplição
console.log(`Multiplicação | ${num1} * ${num2} = ${num1 * num2}`);

// Potenciação / Exponenciação
console.log(`Potenciação | ${num1} ** ${num2} = ${num1 ** num2}`);

// Divisão
console.log(`Divisão | ${num1} / ${num2} = ${num1 / num2}`);

// Resto da divisão
console.log(`Resto da divisão | ${num1} % ${num2} = ${num1 % num2}`);

// Operador de incremento
let contador = 1;
contador++;  // 2
contador++;  // 3
console.log(`Incremento ${contador}`);

// Operador de decremento
contador--;  // 2
console.log(`Decremento ${contador}`);


let novoContador = 0;
novoContador += 2;
console.log(novoContador);
novoContador += 2;
console.log(novoContador);
novoContador += 2;
console.log(novoContador);

// const passo = 2;
// novoContador = novoContador + passo;
// console.log(novoContador);
// novoContador = novoContador + passo;
// console.log(novoContador);
// novoContador = novoContador + passo;
// console.log(novoContador);


// NaN - Not a Number
const numero1 = 10;
const numero2 = parseInt("5");  // O tipo string "5" está sendo convertido para o tipo number 5
const multiplicacao = numero1 * numero2;
console.log(multiplicacao);
console.log(typeof numero2);
console.log(typeof multiplicacao);

// Convertendo tipos
const valorInicial = "5.2";
console.log(valorInicial);

const valorConvertidoInteiro = parseInt(valorInicial);
console.log(valorConvertidoInteiro);

const valorConvertidoFlutuante = parseFloat(valorInicial);
console.log(valorConvertidoFlutuante);

const valorConvertidoAutomatico = Number(valorInicial);
console.log(valorConvertidoAutomatico);