// let nome = 'Luiz'  // Essa variável, está no escopo global do script, e pode ser acessada por todos.

// function meuEscopo() {
//     let nome = 'David';  // Essa variável está no escopo da função, então está protegida.
// }

function meuEscopo() {
    const form = document.querySelector('.form');

    // form.onsubmit = function (evento) {
    //     evento.preventDefault();  // Faz com que não recarregue a página ao enviar o formulário
    //     alert(1);
    //     console.log('Foi enviado!');
    // };

    const pessoas = []

    function recebeEventoForm(evento) {
        evento.preventDefault()
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');
        const resultado = document.querySelector('.resultado');

        pessoas.push({
            nome: nome.value,
            sobrenome: sobrenome.value,
            peso: peso.value,
            altura: altura.value,
        });

        console.log(pessoas);

        resultado.innerHTML += `<p>${nome.value} ${sobrenome.value} ${peso.value} ${altura.value}</p>`
    }

    form.addEventListener('submit', recebeEventoForm);
}

meuEscopo();