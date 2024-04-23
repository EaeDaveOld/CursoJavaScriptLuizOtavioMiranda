function saudacao(pessoa) {  // Foi declarada uma função
    return `Bom dia, ${pessoa}!`;  // Com esse retorno
}

function soma(x = 0, y = 0) {
    const resultado = x + y;  // Essa variável está protegida pelo escopo da função (Não pode ser chamada diretamente fora da mesma)
    return resultado;
}

const raizQ = function (n) {  // Função anônima
    return n ** 0.5;
};

const aoQuadrado = n => n ** 2;  // Arrow function

// console.log(resultado);  // ReferenceError: resultado is not defined

saudacao("David");
saudacao("Lucas");
saudacao("Camila");

const variavel = saudacao("Kakaroto");
console.log(variavel);

console.log(soma());
console.log(soma(2, 2));



console.log(raizQ(9));
console.log(aoQuadrado(5));