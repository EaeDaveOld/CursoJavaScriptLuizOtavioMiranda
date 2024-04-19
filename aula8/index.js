/*
*"<nome> <sobrenome> tem <idade> anos, pesa <peso> kg
*tem <altura> de altura e seu IMC é de <imc>
* <nome> <sobrenome> nasceu em <anoNascimento>."
 */
const nome = "David";
const sobrenome = "Rodrigues";
const idade = 23;
const peso = 65;
const alturaEmM = 1.70;
let anoAtual = 2024;
let indiceMassaCorporal;  // peso / (altura * altura)
let anoNascimento;

indiceMassaCorporal = peso / (alturaEmM * alturaEmM);
anoNascimento = anoAtual - idade;

console.log(nome, sobrenome, "tem", idade, "anos, pesa", peso, "kg")
console.log("tem", alturaEmM, "de altura e seu IMC é de", indiceMassaCorporal)
console.log(nome, sobrenome, "nasceu em", anoNascimento + ".")
console.log()

// tempalte strings
console.log(`${nome} ${sobrenome} tem ${idade} anos, pesa ${peso} kg`)
console.log(`tem ${alturaEmM} de altura e seu IMC é de ${indiceMassaCorporal}`)
console.log(`${nome} ${sobrenome} nasceu em ${anoNascimento}.`)
