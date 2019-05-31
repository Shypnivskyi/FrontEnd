/*1. Напишите функцию создания генератора sequence(start, step). 
Она при вызове возвращает другую функцию-генератор,
которая при каждом вызове дает число на 1 больше, и так до бесконечности.
Начальное число, с которого начинать отсчет, и шаг,
задается при создании генератора. Шаг можно не указывать, 
тогда он будет равен одному. 
Начальное значение по умолчанию равно 0.
Генераторов можно создать сколько угодно.*/

 function sequence ( start = 0, step = 1) {
    start -= step;
    return function(){
     return start += step;
     }
    }
var generator = sequence(10, 3);
var generator2 = sequence(7, 1);

console.log(generator()); // 10
console.log(generator()); // 13
console.log(generator()); // 16

console.log(generator2()); // 7
console.log(generator2()); // 8

/*2. Также, нужна функция take(gen, x) 
которая вызвает функцию gen
 заданное число (x) раз и
  возвращает массив с результатами вызовов.*/
function take(gen, x) {
    var array = [];
    for (i=0; i < x; i++) {
    array[i] = gen();
    }
    return array;
}
var gen = sequence(0, 2);
console.log(take(gen, 5)); // [0, 2, 4, 6, 8 ]



