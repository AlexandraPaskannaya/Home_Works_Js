/*- Посчитать первые 8 чисел Фибоначчи использую рекурсию. Например: fibonachi(n); (При вызове функции положите n = 8); */
function fibonachi(n){
     return (n <= 1) ? n : fib(n-1) + fib(n-2)
};
alert (fibonachi(8))

/* Второй способ:

function fib(n) {
  let a = 1;
  let b = 1;
  for (let i = 3; i <= n; i++) {
    let c = a + b;
    a = b;
    b = c;
  }
  return b;
}
alert (fib(8)) */