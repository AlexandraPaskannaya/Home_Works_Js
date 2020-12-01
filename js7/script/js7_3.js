/*На основании массива usersAfterYear, полученного на основании предыдущего задания создать новый массив usersAfterYearUniqueAge, 
      в котором нет пользователей с одинаковым возрастом. 
      Если у вас есть два пользователя ({id: 2, name: "Петя", age: 19} и {id: 4, name: "Света", age: 19}, то вы должны оставить
       только Петю или Свету одного, а не их двоих). (Это задание похоже на первое задания про массив arr и arrUnique)*/

var usersAfterYear = [
      {id: 1, name: "Вася", age: 20},
      {id: 2, name: "Петя", age: 19},
      {id: 3, name: "Маша", age: 18},
      {id: 4, name: "Света", age: 19},
      {id: 5, name: "Наташа", age: 18},
      {id: 7, name: "Коля", age: 31},
      {id: 9, name: "Антон", age: 20},
      {id: 10, name: "Иван", age: 21},
      {id: 12, name: "Денис", age: 21},
];
var arrUnique = usersAfterYear.sort(function(a,b){
      return a.age < b.age ? -1 : 1;}).reduce(function(usersAfterYear, arr){ 
            if(!usersAfterYear.length || usersAfterYear[usersAfterYear.length - 1].age != arr.age) 
            {usersAfterYear.push(arr)}
      return usersAfterYear;
      }, []);
console.log (arrUnique);
      
