/*- Дан объект let user = { name: "Ivan", years: 19, car: "Subaru", telePhone: "iPhone", city: "Minsk" }.
   Запишите поле name в переменную userName, поле year в переменную userYear, поле car в переменную userCar, остальные поля
     записать в объект userOtherInfo;*/
    
let user = { name: "Ivan", 
     year: 19, 
     car: "Subaru", 
     telePhone: "iPhone", 
     city: "Minsk"
};

let {name: userName, year: UserYaers, car: userCar, ...userOtherInfo} = user;
console.log(userName, UserYaers, userCar, userOtherInfo);


