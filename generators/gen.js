const cc = (x = 0) => () => ++x;

let gen_cc = cc();
console.log(gen_cc());
console.log(gen_cc());
console.log(gen_cc());

// TODO: Проделать то же самое на других языках (PHP, Python, ...)
// см. https://kodaktor.ru/generators_1