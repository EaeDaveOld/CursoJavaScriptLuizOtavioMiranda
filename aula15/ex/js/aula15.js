const numero = Number(prompt("Digite um número: "));

document.body.innerHTML = `<h1><strong> Seu número é ${numero}</strong></h1></br>`;
5
document.body.innerHTML += `Raíz quadrada: ${numero ** 0.5} </br>`;

document.body.innerHTML += `${numero} é inteiro: ${Number.isInteger(numero)}</br>`;

document.body.innerHTML += `É NaN: ${Number.isNaN(numero)}</br>`;

document.body.innerHTML += `Arredondando para baixo: ${Math.floor(numero)}</br>`

document.body.innerHTML += `Arredondando para cima: ${Math.ceil(numero)}</br>`;

document.body.innerHTML += `Com duas casas decimais: ${numero.toFixed(2)}`;