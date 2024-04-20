continuarPrograma = true;
while (continuarPrograma) {
    alert('Soma de dois números - Pressione [OK]');

    let primeiroNumero = parseInt(prompt("Digite o primeiro número que será somado: "));

    let segundoNumero = parseInt(prompt("Digite o segundo número que será somado: "));
    alert(`A soma de ${primeiroNumero} + ${segundoNumero} = ${primeiroNumero + segundoNumero}`);
    let continuarPrograma = confirm("Deseja calcular novamente?");

    if (continuarPrograma == false) {
        break
    }
}
