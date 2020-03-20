/*
 * В последнем-нижнем поле напишите код функции task от одного аргумента x,
 * которая возвращает созданный с помощью метода createElement новый DOM-элемент типа span,
 * у которого значением атрибута id является x.
 */

function task(x) {
    let spanElem = document.createElement('span');
    spanElem.id = x;
    return spanElem;
}