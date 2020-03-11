/*
 * Импортируйте (с помощью директивы require или import) объект o3 под именем obj
 * из модуля, код которого находится по адресу https://kodaktor.ru/j/protochain
 * или https://kodaktor.ru/j/protochain2 определите цепочку прототипов этого объекта
 * и экспортируйте результат в качестве массива имён этих прототипа.
 * 
 * В случае если это задание из теста, вопрос: сколько ненулевых прототипов в цепочке?
 * 
 * Результат: https://kodaktor.ru/proto_738bd
 */

// import { default as obj } from '/j/protochain2';
var _0xddfa=["\x75\x73\x65\x20\x73\x74\x72\x69\x63\x74","\x5F\x5F\x65\x73\x4D\x6F\x64\x75\x6C\x65","\x64\x65\x66\x69\x6E\x65\x50\x72\x6F\x70\x65\x72\x74\x79","\x4D\x6F\x63\x68\x61","\x63\x72\x65\x61\x74\x65","\x4C\x69\x76\x65\x53\x63\x72\x69\x70\x74","\x4A\x61\x76\x61\x53\x63\x72\x69\x70\x74","\x45\x43\x4D\x41\x53\x63\x72\x69\x70\x74","\x6F\x33"];_0xddfa[0];Object[_0xddfa[2]](exports,_0xddfa[1],{value:!0});var base=Object[_0xddfa[4]](null,{name:{enumerable:!1,writable:!1,configurable:!0,value:_0xddfa[3]},prototype:{value:null}}),o1=Object[_0xddfa[4]](base,{name:{enumerable:!1,writable:!0,configurable:!1,value:_0xddfa[5]},prototype:{value:base}}),o2=Object[_0xddfa[4]](o1,{name:{enumerable:!1,writable:!0,configurable:!1,value:_0xddfa[6]},prototype:{value:o1}}),o3=Object[_0xddfa[4]](o2,{name:{enumerable:!1,writable:!1,configurable:!1,value:_0xddfa[7]},year:{enumerable:!0,writable:!1,configurable:!1,value:2015},prototype:{value:o2}});exports[_0xddfa[8]]= o3;
var obj = o3;

// Вариант с рекурсией
function getProtoNameOrCount(obj, count = 0) {
	if (obj.prototype) {
		console.log("obj.prototype.name: ", obj.prototype.name);
        getProtoNameOrCount(obj.prototype, ++count);
    } else {
		console.log('Ненулевых прототипов: ', count);
	}
}

getProtoNameOrCount(obj);

/*
// Вариант с циклом
let count = 0;
while (obj.prototype) {
	console.log("obj.prototype.name: ", obj.prototype.name);
	obj = obj.prototype;
    count++;
}
console.log('Ненулевых прототипов: ', count);
*/