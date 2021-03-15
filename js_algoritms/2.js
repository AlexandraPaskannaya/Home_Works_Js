//Напишите функцию, реализующую свой собственный алгоритм поиска и возвращения индекса минимального и максимального элемента массива

let arr = [1, 2, 4, 10, 5, 19, 4, -14, 2, 11];
let min_index = minElement(arr);
let max_index = maxElement(arr);

//находим индекс -14
function minElement(arr) {

  let min_index = arr[0];
  for(let i = 0; i < arr.length; i++) {

    if(min_index > arr[i])
        min_index = arr[i]
    }
    return arr.indexOf(min_index);
  }
   
//находим индекс 19
function maxElement(arr) {

  let max_index = arr[0];
  for(let i = 0; i < arr.length; i++) {

    if(max_index < arr[i]) 
        max_index = arr[i]
    }
    return arr.indexOf(max_index);
  }
 
console.log('min_index', min_index); //7
console.log('max_index', max_index); //5

//В исходном массиве максимальный и минимальный элементы местами.
function getNewArray(arr){
  let min_index = 0;
  let max_index = 0;

  let minEl = arr[0];
  let maxEl = arr[0];

    for(let i = 1; i < arr.length; i++) {
        if(arr[i] < minEl) {
          min_index = i;
          minEl = arr[i]
        }
        if(arr[i] > maxEl) {
          max_index = i;
          maxEl = arr[i]
        }
    }

  arr[min_index] = maxEl;
  arr[max_index] = minEl;

  return arr;
   
}
let newArray = getNewArray(arr);
console.log('newArray', newArray);


