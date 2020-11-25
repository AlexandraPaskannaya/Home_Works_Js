//В массиве users посчитайте общий суммарный возраст всех пользователей.

var users = [
    {id: 1, name: "Вася", age: 20},
     {id: 2, name: "Петя", age: 19},
     {id: 3, name: "Маша", age: 18},
     {id: 4, name: "Дима", age: 17}
 ];
 let avrgAge = users.reduce ((sum, old) => sum + old.age, 0);
alert (avrgAge);