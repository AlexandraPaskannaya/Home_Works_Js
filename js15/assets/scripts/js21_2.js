/*Задача на повторение массивов. Дан массив строк (например ["str", "str1", "str2", "str", "str2", "str", "str3", "str1", "str4", "str4"]).
	  Ваша задача написать функцию countRepeats которая будет выводить информацию о том какой элемент в данном массиве сколько раз повторяется.
      Функция должна возвращать объект.*/
      
let result = ["str", "str1", "str2", "str", "str2", "str", "str3", "str1", "str4", "str4"];

function countRepeats(arr) {

let objResult = {};
    arr.forEach(function(i){
        if (objResult[i] != undefined)
         ++objResult[i];
        else
         objResult[i] = 1;
    });
let arrSorted = Object.entries(objResult).sort((a, b) => b[1] - a[1]);
      
return Object.fromEntries(arrSorted);
}
console.log(countRepeats(result))

