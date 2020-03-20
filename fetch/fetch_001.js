/*
 * Напишите код функции task(x) (аннотированной словом async),
 * который обращается к адресу https://kodaktor.ru/api/m/x с помощью метода fetch
 * и передаёт заголовок "Content-Type: application/json".
 * 
 * Ваш код получит JSON-объект со свойством result. Если x – число, то и result будет числом.
 */

// Функция task
async function task(x) {
    let responce = await fetch(`https://kodaktor.ru/api/m/${x}`, {
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(x => x.json());

    return responce.result;
}

// ручное тестирование =(
await task(150);