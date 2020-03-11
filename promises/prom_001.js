/*
 * Результатом функции task(x), должен быть Promise,
 * который резолвит значение x из аргмуента функции task
 */

function task(x) {
    return new Promise((resolve) => {
        resolve(x);
    });
}

console.log(task(1)); // Promise {<resolved>: 1}