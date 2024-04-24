/**
 * Operadores de comparação
 * > maior que
 * >= maior que ou igual a
 * < menor que
 * <= menor que ou igual a
 * == igual a (valor) **************
 * === igual a estrito (valor e tipo)
 * != diferente de ***************
 * !== diferente de estrito
 */

console.log(10 > 5);  // true
console.log(10 >= 10);  // true
console.log(10 < 5);  // false
console.log(10 <= 5);  // false

const valor1 = 10;  // number
const valor2 = '10';  // string

console.log(valor1 == valor2);  // Aqui vai retornar true, porque ele não compara o tipo
console.log(valor1 === valor2);  // Aqui vai retornar false, porque os tipos não são iguais

console.log(valor1 != valor2);  // Aqui vai retornar false, porque ele considera iguais, mesmo tendo tipos diferentes
console.log(valor1 !== valor2);  // Aqui vai retornar true, porque ele não considera iguais, pois são de tipos diferentes