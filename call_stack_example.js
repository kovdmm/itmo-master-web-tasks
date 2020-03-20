const fs = require('fs');

setImmediate(() => console.log(1));

fs.open(__filename, 'r', () => console.log(2));

new Promise(resolve => resolve(3))
	.then(console.log);

process.nextTick(() => console.log(4));

console.log(5);

setTimeout(() => console.log(6));

// Результат:
// 543621 [or 543612]*
// * зависит от того, насколько долго открывается файл (fs.open)
