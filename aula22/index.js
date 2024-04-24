/**
 * Operadores Lógicos
 * && -> AND -> E
 * || -> OR -> OU
 * ! -> NOT -> NÃO (Negação)
 */

// Expressão && (AND)
const fazSol = true;  // Sim 🌞
let estaChovendo = false;  // Nao  ⛅

let irParaPraia = fazSol && !estaChovendo;  // Faz sol e nao esta chovendo -> true  🌞⛅

console.log(irParaPraia);

estaChovendo = true;  // Agora está chovendo  💧
irParaPraia = fazSol && !estaChovendo;  // 🌞💧 (Faz sol e Chove)

console.log(irParaPraia);  // Dá para ir para a praia? -> false

console.log();

// Expressão || (OR)
let temMaca = true;  // Sim 🍎
let temPera = false;  // Não ❌
let possoComer = temMaca || temPera;  // Tem maça OU tem pera  🍎 (Tem maça)

console.log(possoComer);  // Retorna true, pois tem uma das frutas

temMaca = false;  // Agora não tem nem maça, nem pera, ou seja, nada pra comer.  ❌
possoComer = temMaca || temPera;  // Tem maça OU tem pera  ❌ (Não há maça, nem pera)

console.log(possoComer);  // false
console.log();

// Expessão ! (NOT)
let joaoEHomem = true;  // true  🤵  (Sim, João é homem)
let inverterResultado = !joaoEHomem;  // false  ❌🤵 (João NÃO é homem)

console.log(joaoEHomem);
console.log(inverterResultado);

// Vem da base de dados
let usuario = "David";
const senha = "123456";

let logadoComSucesso = usuario === 'David' && senha === '123456';
console.log(logadoComSucesso);  // true

usuario = 'Matheus';  // Usuário mudou
logadoComSucesso = usuario === 'David' && senha === '123456';
console.log(logadoComSucesso);  //false

