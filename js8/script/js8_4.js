/*- Дан объект let user = {name: "Ivan",age: 19}; 
Создайте копию объекта использую сериализацию и десериализацию (JSON.stringify(), JSON.parse());*/

let user = {
name: "Ivan",
    age: 19
};
let user_json = JSON.parse(JSON.stringify(user));
console.log(user_json);