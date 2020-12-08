/* - Напишите функцию func() которая при каждом своем вызове будет возвращать
 количество своих вызовов (сколько раз ее вызызвали до этого плюс этот вызов);*/

 function func() {
  var count = 0;     
  return function()           
      {count++; return count;};     
  }
  var counter = func();
  counter();
  counter();
  console.log( counter() );