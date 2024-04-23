const pessoa1 = {  // Declarando um objeto literal
    nome: "David",
    sobrenome: "Rodrigues",
    idade: 22,

    fala() {  // Isso é um método do objeto pessoa1
        console.log(`A minha idade atual é ${this.idade}`);
    },

    incrementaIdade() {  // Este é outro método do objeto pessoa1, e o "this" referencia o próprio objeto.
        ++this.idade;
    },
};

function pessoa() {
    this.nome;
    this.sobrenome;
    this.idade;
}

const obj1 = new pessoa();
obj1.nome = "David";
obj1.sobrenome = "Rodrigues";
obj1.idade = 22;

console.log(`Meu nome é ${obj1.nome} ${obj1.sobrenome} e tenho ${obj1.idade} anos de idade.`);
console.log(obj1);
console.log(typeof obj1);

pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();
pessoa1.fala();
pessoa1.incrementaIdade();

console.log(pessoa1.nome);
console.log(pessoa1.sobrenome);
console.log(pessoa1.idade);

function criaPessoa(nome, sobrenome, idade) {  // Função Factory (Cria objetos)
    return {
        nome: nome,
        sobrenome: sobrenome,
        idade: idade,
    };
}

const pessoa2 = criaPessoa("Camila", "Santos", 23);
const pessoa3 = criaPessoa("Maria", "Oliveira", 40);
const pessoa4 = criaPessoa("Luiz", "Viana", 30);
const pessoa5 = criaPessoa("Goku", "Kakaroto", 28);
console.log(pessoa2.nome);
console.log(pessoa2.sobrenome);
console.log(pessoa2.idade);