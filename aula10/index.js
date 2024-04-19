// Tipos primitivos em JavaScript
// string, number, undefined, null, boolean, symbol
const nome = "David";  // string
const nome2 = 'David';  // string
const nome3 = `David`;  // string
const numero = 10;  // number
const numeroFlutuante = 10.52;  // number
let nomeAluno;  // undefined -> não aponta para local nenhum na memória
const sobrenomeAluno = null;  // Nulo -> não aponta para local nenhum na memória
const aprovado = true;  // true ou falso -> veradeiro ou falso (lógico)

console.log(typeof nome, nome);
console.log(typeof numero, numero);
console.log(typeof numeroFlutuante);
console.log(typeof nomeAluno, nomeAluno);
console.log(typeof sobrenomeAluno, sobrenomeAluno);
console.log(typeof aprovado, aprovado);

// Comportamento de um tipo não primitivo, array nesse caso
const a = [1, 2];
const b = a;  // Nesse momento, o valor de "b" foi referenciado ao valor de "a" na memória
console.log(a, b);  // [1, 2] [1, 2]

b.push(3);  // Acrescentando o valor 3 no final do array b, vai adicionar o valor também na variável a, já que a mesma está referenciada por b.
console.log(a, b);  // [1, 2, 3] [1, 2 ,3]

// Isso não acontece com tipos primitivos.
const c = 2;
let d = c;
console.log(c, d);  // [2, 2]

d = 4;
console.log(c, d);  // [2, 4]