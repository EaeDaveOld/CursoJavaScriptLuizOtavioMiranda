/**
 * && -> false && trye -> false "o valor mesmo"
 * ||
 */

/**
 * Valores FALSY
 * 0
 * '' "" ``
 * null / undefined
 * NaN
 */

console.log('David Rodrigues' && 0 && 'Maria');  // Retorna o valor último valor checado
// Como o 0 é falsy, o circuito foi fechado ali mesmo, por isso retornou o mesmo.

console.log('David' && 'Rodrigues');  // Ambos os valores são true, então retorna o último checado = 'Rodrigues'

function falaOi() {
    return 'Oi';
}

let vaiExecutar = false;  // A condição é falsa

console.log(vaiExecutar && falaOi());  // Ocorreu um curto-circuito

vaiExecutar = true;  // A condição passou a ser verdadeira

console.log(vaiExecutar && falaOi());  // Não ocorre o curto-circuito, e executa a função

const a = 0;
const b = null;
const c = 'false';  // String não vazia -> true
const d = false;
const e = NaN;

console.log(a || b || c || d || e);  // Está exibindo a variável c 'false', pois é uma string não vazia, então é true