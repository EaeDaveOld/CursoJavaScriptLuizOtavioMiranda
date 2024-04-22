let num1 = 9.54578;
let num2 = Math.floor(num1);  // Arredonda para baixo
let num3 = Math.ceil(num1);  // Arredonda para cima
let num4 = Math.round(num1);  // Arredonda automaticamente para o mais próximo

console.log(num1);  // 9.54578
console.log(num2);  // 9
console.log(num3);  // 10
console.log(num4);  // 10

console.log(Math.max(1, 2, 3, 4, 5, -10, -50, 1500, 8, 6, 5));  // Retorna o maior número de uma sequência de números
console.log(Math.min(1, 2, 3, 4, 5, -10, -50, 1500, 8, 6, 5));  // Retorna o menor número de uma sequência de números

const aleatorio = Math.random()  // Retorna um número aleatório entre 0 e 1 (Muitas casas decimais)
console.log(aleatorio);
const aleatorioEntreArredondado = Math.round(Math.random() * (10 - 5) + 5)  // Retorna um número aleatório entre 10 e 5 e arredonda
console.log(aleatorioEntreArredondado);

console.log(Math.PI);  // Retorna o valor de PI

console.log(Math.pow(5, 2));  // Potenciação, retorna o valor de x elevado a y
console.log(5 ** 2);  // Mesma coisa que o método Math.pow()

let raizQ = 9;
console.log(raizQ ** (0.5));  // Encontrando a raíz quadrada de um número

console.log(100 / 0);  // Não lança erro, retorna um tipo de dado "Infinity"