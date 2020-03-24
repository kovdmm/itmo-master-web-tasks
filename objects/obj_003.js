/*
Функция task() должна возвращать объект с 4-мя свойствами
  key1 – несобственное неперечислимое
  key2 – несобственное перечислимое
  key3 – собственное неперечислимое
  key4 – собственное перечислимое

Их значениями должны быть числа от 1 до 4 соответственно.
*/

const proto = Object.create(null);
const obj = Object.create(proto);

Object.defineProperty(proto, "Key1", {
    "enumerable": false,
    "value": 1
});
Object.defineProperty(proto, "Key2", {
    "enumerable": true,
    "value": 2
});
Object.defineProperty(obj, "Key3", {
    "enumerable": false,
    "value": 3
});
Object.defineProperty(obj, "Key4", {
    "enumerable": true,
    "value": 4
});

console.log(obj);