// [!] В консоли можем использовать await без оборачивания в async
const src = await fetch('https://kodaktor.ru/j/script_keys').then(x => x.text());

eval(src);

const obj = task();

