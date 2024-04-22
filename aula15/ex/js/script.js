const numero = Number(prompt("Digite um número: "));

const numeroTitulo = document.getElementById("numero-titulo");
const raizQ = document.getElementById("raiz-quadrada");
const numeroIndicado = document.getElementById("numero");
const eInteiro = document.getElementById("e-inteiro");
const eNaN = document.getElementById("e-nan");
const arredondandoBaixo = document.getElementById("arredonda-baixo");
const arredondandoCima = document.getElementById("arredonda-cima");
const duasCasasDecimais = document.getElementById("duas-casas-decimais");

numeroTitulo.innerHTML = numero;

raizQ.innerHTML = numero ** 0.5;

numeroIndicado.innerHTML = numero;

eInteiro.innerHTML = Number.isInteger(numero);

eNaN.innerHTML = `É NaN: ${Number.isNaN(numero)}`;

arredondandoBaixo.innerHTML = `Arredondando para baixo: ${Math.floor(numero)}`;

arredondandoCima.innerHTML = `Arredondando para cima: ${Math.ceil(numero)}`;

duasCasasDecimais.innerHTML = `Com duas casas decimais: ${numero.toFixed(2)}`;
