/*
 * Дано: функция, экспортированная по адресу https://kodaktor.ru/j/func_003_export
 * Выполнить: 
 * импортировать её
 * с помощью метода bind привязать к её аргументу зн
 */

// import { default as qv } from 'https://kodaktor.ru/j/func_003_export';
const qv = x => x * x;

const qv5 = qv.bind(this, 5);

console.log(qv5());
