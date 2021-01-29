/*Задача на повторение массивов. Дан массив строк (например ["str", "str1", "str2", "str", "str2", "str", "str3", "str1", "str4", "str4"]).
	  Ваша задача написать функцию countRepeats которая будет выводить информацию о том какой элемент в данном массиве сколько раз повторяется.
      Функция должна возвращать объект.*/

let result = ["str", "str1", "str2", "str", "str2", "str", "str3", "str1", "str4", "str4"];

function countRepeats() {

let array = {};
    result.forEach(function(i){
        if (array[i] != undefined)
         ++array[i];
        else
         array[i] = 1;
    });
let obdj = Object.entries(array).map(([ key, val ]) => ({key, val})).sort((a, b) => b.val - a.val);
      
let newObdj = Object.assign({}, obdj);

console.log(newObdj)
}
countRepeats()