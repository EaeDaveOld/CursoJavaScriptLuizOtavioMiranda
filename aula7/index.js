// Não podemos criar constantes com plavaras reservadas
// Constantes precisam ter nomes significativos
// Não pode começar o nome de uma constante com um número
// Não podem conter espaços ou traços
// Utilizamos camelCase
// Case-sensitive
// Não podemos modificar o valor de uma constante
// NÃO UTILIZE VAR, UTILIZE CONST.

const nome = "David";  // É obrigatório inicializar constantes logo após declarar
// nome = "Lucca";  // Constantes são imutáveis
console.log(typeof (nome));

const primeiroNumero = 5;  // Number
console.log(typeof(primeiroNumero));

const segundoNumero = 10.5;
console.log(typeof(segundoNumero));

const resultado = primeiroNumero * segundoNumero;
const resultadoDuplicado = resultado * 2;
console.log(resultado);
console.log(resultadoDuplicado);