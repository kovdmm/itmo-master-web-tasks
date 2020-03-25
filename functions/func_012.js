/*
 * В последнем-нижнем поле напишите код функции task(x), возвращающей 
 * результат работы функции, переданной ей в качестве аргумента x
 * и строку 'no', если типом x не является функция. 
 */

function task(x) {
	if (x instanceof Function) return x();
	return 'no';
}

// or

const task = x => x instanceof Function ? x() : 'no';
