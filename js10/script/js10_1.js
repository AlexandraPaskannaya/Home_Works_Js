/*Используйте метод reduce в комбинации с concat для свёртки массива массивов в один массив, у которого 
  есть все элементы входных массивов.
  Например:
 var arrays = [[1, 2, 3], [4, 5], [6]];
 // Ваш код тут
   // → [1, 2, 3, 4, 5, 6] */
   
let arrays = [[1, 2, 3], [4, 5], [6]];

let array = arrays.reduce((array, elements) => array.concat(elements));
console.log(array)

// Второй метод

let array = arrays.reduce(function (acc, el, i) {
    acc = acc.concat(arrays[i]);
return acc;
});
console.log(array)

// Третий метод

array = arrays.reduce ((acc, el) => [...acc, ...el]);
console.log(array)