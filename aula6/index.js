let nome = "João";  // String
// var nome = "João";  Também é possível declarar a variável dessa forma.
console.log(nome, "nasceu em 1984.");
console.log("Em 2000", nome, "conheceu Maria.");
console.log(nome, "casou-se com Maria em 2012.");
console.log("Maria teve 1 filho com", nome, "em 2015.");
console.log("O filho de", nome, "se chama Eduardo.");

let indefinido;  // Aqui a variável foi declarada sem um valor atribuído.
console.log(indefinido);  // Porém o motor do JavaScript atribui um valor "undefined" para a mesma e inicializa.

// Não podemos criar variáveis com plavaras reservadas
// Variáveis precisam ter nomes significativos
// Não pode começar o nome de uma variável com um número
// Não podem conter espaços ou traços
// Utilizamos camelCase
// Case-sensitive
// Não podemos redeclarar variáveis com let
// NÃO UTILIZE VAR, UTILIZE LET.

let nomeCompleto = "David Rodrigues";
console.log(nomeCompleto);

let nomeCliente = "Luiz";
nomeCliente = "Otávio";
console.log(nomeCliente);


