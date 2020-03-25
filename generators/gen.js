/* 
 * Task: https://kodaktor.ru/func_009
 *
 * Дана функция cc.
 * Нужно вызвать эту функцию и с помощью ещё трёх вызовов получить подряд идущие значения привязки x: 1, 2, 3
 *
 * Info: https://kodaktor.ru/generators_1
 */

const cc = (x = 0) => () => ++x;

let gen_cc = cc();

console.log(gen_cc());
console.log(gen_cc());
console.log(gen_cc());
