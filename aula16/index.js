
//                0        1       2         3
const alunos = ["David", "Luiz", "João", "Maria"];  // Foi definido um array com 4 índices
console.log(alunos);  // Aqui é exibido a lista completa - ["David", "Luiz", "João", "Maria"]
const alunoDavid = alunos[0];  // Aqui foi armazenado na variável, o valor do primeiro índice do array
console.log(alunoDavid);  // "David"

alunos[0] = "Kakaroto";  // O índice 0 passou a ter o valor "Kakaroto"
console.log(alunos[0]);  //"Kakaroto"
console.log(alunos);  // ["Kakaroto", "Luiz", "João", "Maria"]

alunos[4] = "David";  // Foi adicionado um valor para um novo índice
console.log(alunos);  // ["Kakaroto", "Luiz", "João", "Maria", "David"]

console.log(alunos.length);  // 5

alunos[alunos.length] = "Index 4";  // Aqui foi acrescentado no último índice disponível, o valor "Index 4"
console.log(alunos);

alunos.push("Bruno");  // Esse método faz a mesma coisa do que a solução acima
console.log(alunos);
alunoRemovido = alunos.pop();  // Remove o último elemento do Array

console.log('O aluno removido foi:', alunoRemovido);

alunos.unshift("Fui colocado aqui depois");  // Esse método coloca um novo elemento no começo do array, e retorna o novo tamanho do array
console.log(alunos);

delete alunos[1];  // Foi deletado o valor do índice 1 "Kakaroto"
console.log(alunos);

// const alunos = "David Luiz Maria João";
// const listaAlunos = alunos.split(" ");
// console.log(listaAlunos);
// console.log(typeof listaAlunos);