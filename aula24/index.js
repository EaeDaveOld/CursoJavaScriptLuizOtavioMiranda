/**
 * Entre 0 - 11 - Bom dia
 * Entre 12 - 17 - Boa tarde
 * Entre 18 e 23 - Boa noite
 */

const hora = 5

if (hora >= 0 && hora < 12) {
    console.log('Bom dia!');
} else if (hora >= 12 && hora < 18) {
    console.log('Boa tarde!');
} else if (hora >= 18 && hora < 24) {
    console.log('Boa noite!');
} else {
    console.log('A hora informada é inválida:', hora);
}

const tenhoGrana = true;

if (tenhoGrana) {
    console.log('Vou sair de casa');
} else {
    console.log('Não tenho grana pra sair de casa');
}