/*
 * При рекурсии функция обращается сама к себе по имени/
 * - было: const f = x => x <= 1 ? 1 : x * f(x - 1);
 * - стало:          x => x <= 1 ? 1 : x * f(x - 1)
 * Как такая функция может вызвать сама себя, если у неё нет имени?
 * 
 * Как написать рекурсивно стрелочную функцию в ES6
 * >> https://fooobar.com/questions/239253/how-do-i-write-an-arrow-function-in-es6-recursively
 * 
 * [JS] В задаче рассматривается: стрелочные функции, рекурсия, каррирование, замыкания
 * [FP] А так же: функциональное программирование, лямбда-исчисление, U/Y-комбинаторы (комбинаторная логика)
 */

//                  Нужно вызвать:   x => x <= 1 ? 1 : x * f   (x - 1)
console.log('7! =', (y => y(y))(f => x => x <= 1 ? 1 : x * f(f)(x - 1))(7));

//             x => x <= 1 ? 1 : x * f   (x - 1)
const f = f => x => x <= 1 ? 1 : x * f(f)(x - 1);

const U = g => g(g); // U-комбинатор
const Y = U(f);      // Y-комбинатор

// or: const Y = f(f);
// or: const Y = (f => x => x <= 1 ? 1 : x * f(f)(x - 1))(f => x => x <= 1 ? 1 : x * f(f)(x - 1));

console.log('5! =', Y(5));
console.log('3! =', Y(3));
