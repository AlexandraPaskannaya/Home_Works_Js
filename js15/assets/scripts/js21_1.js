/*Напишите функцию уборки комнаты cleanRoom(dirtyLevel) { ... }, которая принимает на вход числовой показатель загрязнения комнаты (от 0 до 10).
 	  В зависимости от этого числа опеределяется сколько времени надо потратить на уборку, это время равно значению 
	  dirtyLevel * 1000 в мс. Данная функция возвращает успешно выполненный промис спустя указанное время dirtyLevel * 1000.
	  Для обработки успешной уборки в then используйте console.log(`Уборка проведена успешно за ${result} секунд`); где result это аргумент
      resolve.*/
function cleanRoom(dirtyLevel){
   
    return new Promise ((resolve, reject) => {
        setTimeout(()=> {
            resolve(dirtyLevel);
        },  dirtyLevel * 1000);
    });
}
cleanRoom(3)
.then(result => console.log(`Уборка проведена успешно за ${result} секунд`))

/*Расширьте предыдущее задание так, чтобы при передаче в dirtyLevel > 10 вы спустя dirtyLevel * 1000 мс возвращали выполненный
	  с ошибкой промис. Для обработки неуспешной уборки в then используйте console.log(err). Где err это аргумент reject. 
      Текст ошибки придумайте сами.*/
function cleanRoom(dirtyLevel){
    return new Promise((resolve, reject) => {

        setTimeout(() => {
            if(dirtyLevel<=10) {
                resolve(dirtyLevel)
            } else {
                reject('Ошибка! Комната слишком грязная')
            }
        }, dirtyLevel * 1000)
    });
}
cleanRoom(3)
    .then(result => console.log(`Уборка проведена успешно за ${result} секунд`))
    .catch(err => console.log(err));

/*Задание со звездочкой. Расширьте предыдущее задание так, чтобы можно было осуществить последовательную уборку трех комнат. 
	  Для этого создайте цепочку промисов. Только после того как уборка комнаты завершена, пользователь может начать убирать новую. 
	  Если одна из комнат оказалась слишком грязной, то пекращаем уборку полностью. Для этого функция 
 	  cleanRoom(dirtyLevel_1, dirtyLevel_2, dirtyLevel_3) { ... } должна принимать три аргемента, каждый из кторых описывает 
	  уровень загрязнения каждой комнаты.
*/

function cleanRooms(dirtyLevel_1, dirtyLevel_2, dirtyLevel_3){
    return cleanRoom(dirtyLevel_1)
    .then(result=> {
        console.log(`Уборка проведена успешно за ${result} секунд`)
        return cleanRoom(dirtyLevel_2)
    })
    .then(result=> {
        console.log(`Уборка проведена успешно за ${result} секунд`)
        return cleanRoom(dirtyLevel_3)
    })
    .then(result=> {
        console.log(`Уборка проведена успешно за ${result} секунд`)
    })
    .catch(err => console.log(err))
}
cleanRooms(5,2,11)