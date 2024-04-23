/**
 * Primitivos (imutáveis) - string, number, boolean, undefined, null, (bigint, symbol)
 * São valores copiados (únicos na memória)
 */

//          01234
let nome = "David";  // string é um tipo imutável
nome = "Camila";  // Aqui só está mudando o valor da variável, e não o tipo
console.log(nome);  // Camila
nome[0] = "D"  // Aqui se esperaria trocar o índice 0 ("C") por "D", porém não acontece, pois é imutável
console.log(nome);  // Continua sendo Camila

let a = 'A';
let b = a;  // Cópia
console.log(a, b);  // A A

a = 'Qualquer coisa';
console.log(b);  // Continua sendo 'A'

/**
 * Referência (mutáveis) - array, object, function
 * São valores por referência (São referenciados na memória)
 */

let array = [1, 2, 3];
let lista = array;  // Isso é uma referência, não uma cópia, aponta para o mesmo local na memória de "array"
console.log(array, lista);

array.push(4);  // Foi acrescentado o número 4 no array
console.log(array, lista);  // Logo, como lista é uma referência de array, o valor da mesma foi alterado junto

const pessoa = {  // Object
    nome: 'David',
    sobrenome: 'Rodrigues',
};

const pessoaNova = pessoa;  // Object pessoaNova é referencia de pessoa
pessoa.nome = "Amaro";  // pessoa.nome passou a ser 'Amaro"
console.log(pessoaNova);  // { nome: 'Amaro', sobrenome: 'Rodrigues' }

const pessoaIndependente = {...pessoa};  // spread, foi forçado uma cópia, e não referência.
pessoa.nome = 'Alex';  // Agora esse valor não vai afetar a pessoaIndependente
console.log(pessoaIndependente);  // { nome: 'Amaro', sobrenome: 'Rodrigues' }
