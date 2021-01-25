/*Задача на повторение массивов. Дан массив строк (например ["str", "str1", "str2", "str", "str2", "str", "str3", "str1", "str4", "str4"]).
	  Ваша задача написать функцию countRepeats которая будет выводить информацию о том какой элемент в данном массиве сколько раз повторяется.
      Функция должна возвращать объект.*/
      
let  result =  ["str", "str1", "str2", "str", "str2", "str", "str3", "str1", "str4", "str4"].reduce(function(countRepeats, elem) {
    countRepeats[elem] = (countRepeats[elem] || 0) + 1;
    return countRepeats;
}, {});

console.log(result);

/*result.sort(function (a,b) {
    return a-b;
})*/

