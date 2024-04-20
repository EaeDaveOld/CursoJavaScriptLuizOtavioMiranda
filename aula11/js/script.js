continuarPrograma = true;
while (continuarPrograma) {
    alert('Soma de dois números - Pressione [OK]');

    let primeiroNumero = prompt("Digite o primeiro número que será somado: ");
    primeiroNumero = Number(primeiroNumero);  // Convertendo de string para number

    let segundoNumero = prompt("Digite o segundo número que será somado: ");
    segundoNumero = Number(segundoNumero);  // Convertendo de string para number

    let resultadoSoma = primeiroNumero + segundoNumero;

    alert(`A soma de ${primeiroNumero} + ${segundoNumero} = ${resultadoSoma}`);
    let continuarPrograma = confirm("Deseja calcular novamente?");

    if (continuarPrograma == false) {
        break
    }
}
