/*Дан объект var users = {
					first_name: "pavel",
					second_name: "ivanov",
					father_name: "ivanovich",
					city: "minsk",
					car: "subaru",
					telephone: "samsung" 
				}
	  Необходимо сделать так чтобы все значения полей объекта users начинались с заглавной буквы (например не "pavel" a "Pavel"). 
      Для решения этой задачи рекомендую использовать методы Object.keys или Object.values и методы строк как UpperCase. */

	  users = {
		first_name: "pavel",
		second_name: "ivanov",
		father_name: "ivanovich",
		city: "minsk",
		car: "subaru",
		telephone: "samsung" 
	}
	var usersUp = Object.keys(users);
	console.log(usersUp)
usersUp.forEach(key => {
        users[key] = users[key][0].toUpperCase() + users[key].slice(1);
});
console.log(users);