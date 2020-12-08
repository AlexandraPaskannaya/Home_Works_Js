/*Создайте функцию, которая позовляет вывести полную информацию о каждом из двух пользователей созданных в предыдущем задании.
Функция должна выполнять вывод информации и не принимать аргументов. По сути нужно в одну функцию привязать два объекта. */
let user1 = {
    first_Name: "Вася",
    second_Name: "Ivanov",
    age: 20,
    city: "Minsk",
  };
  let user2 = {
      first_Name: "Mary",
      second_Name: "Brown",
      age: 22, 
      city: "London",
  };
  
function func() {
    console.log(this.first_Name, this.second_Name, this.age, this.city);
}
  
let funcUser1 = func.bind(user1);
let funcUser2 = func.bind(user2);

funcUser1();
funcUser2();