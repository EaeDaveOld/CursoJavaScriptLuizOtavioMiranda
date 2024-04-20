// Strings são iteráveis e possuem índices
//                 012 345678 9
let umaString = "Um \"texto\"";  // A barra invertida singifica um escape

console.log(umaString);  // Exibindo a string

console.log('A palavra "texto" começa no índice = ', umaString.indexOf("t"));  // Mostrando o índice de "t"

console.log('A palavra "texto" termina no índice = ', umaString.lastIndexOf("o"));  // Mostrando o índice de "o"

console.log(umaString[4], umaString[5], umaString[6], umaString[7], umaString[8]);  // Exibindo a palavra "t e x t o"

console.log(umaString.slice(4, 9))  // Exibindo a palavra "texto" através do fatiamento de strings

console.log(umaString.length);  // Exibindo a quantidade de caracteres que há na string

let outraString = "O rato roeu a roupa do rei de roma.";
console.log(outraString.split(" ", 2));  // Separando a string entre " " espaços vazios, apenas 2 resultados

console.log(outraString.toUpperCase());  // Transformando em maiúsculo

console.log(outraString.toLowerCase());  // Transformando em minúsculo
