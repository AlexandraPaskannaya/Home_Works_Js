  
/*Отсортировать массив arr2 по убыванию. Посчитать сумму его эелементов. 
(Попробуйте использовать метод reduce в статье про методы есть его описание).*/

var arr2 = [4, 1, 10, 25, 67, 87, 56, 2, 5, 19, 2, 91, 4];
arr2.sort((a,b) => b-a);
console.log(arr2);
let result = arr2.reduce ((sum, current) => sum + current, 0);
alert(result);