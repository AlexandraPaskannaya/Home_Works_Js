/*Напишите функцию которая будет увеличивать переменную let i = 0, от 0 до 20, при чем переменная будет увеличивать свое значение
на еденицу каждые 2 секунды. Когда переменная станет равной 20 прекратить увеличение. 
Попробуйте реализовать через setInterval и через рекурснивный setTimeout.*/

//Первый способ через setInterval
function run() {
  let i = 0 
let timerId = setInterval(() => {
    alert(i);
   if(i>=20) {
     clearInterval(timerId);
    }
  i++;
  }, 2000);
}
run();

//Второй способ через рекурснивный setTimeout

function run() {
  let  i = 0;
  setTimeout(function go() {
    alert(i);
    if (i <= 20) {
      setTimeout(go, 2000);
    }
      i++;
    }, 2000);
  }
run();