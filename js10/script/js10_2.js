/*Создайте функцию-конструктор, которая позволяет создавать объект пользователя с полями first_name, second_name, age, city.
С помощью данной функции создайте два объекта пользователей (два пользователя), имя, фамилию, возраст, город проживания задайте сами.*/

function UserInfo (first_name, second_name, age, city) {
    this.name = first_name,
    this.surname = second_name,
    this.age = age,
    this.city = city 
};
const user1 = new UserInfo ("Ivan", "Ivanov", 20, "Minsk");
const user2 = new UserInfo ("Mary", "Brown", 25, "London");

console.log (user1);
console.log (user2);