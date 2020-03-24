/*
 * Задание на владение this-параметризацией function-функции
 * Дано: функция mixin
 * Выполнить: вызвать функцию так, чтобы при вызове от значения 5 выдавался квадрат числа 5, равный 25
 */

const mixin = function(){ 
    return this * this; 
};

Number.prototype.qv = mixin;

console.log((5).qv());