/*Создайте функцию-конструктор houseBuilder, которая позволяет создавать объект дачного дома с параметрами ширины длины и количества этажей.
	  Создайте два объекта firstHouse и secondHouse на основании этой функции конструктора. (Длина, ширина, количество этажей - числовой тип данных, 
      значения придумайте сами). */
function HouseBuilder (lenght, width, floor) {
    this.length = lenght,
    this.width = width,
    this.floor = floor
}

const firstHouse = new HouseBuilder (10, 15, 2);
const secondHouse = new HouseBuilder (30, 10, 3);

console.log(firstHouse);
console.log(secondHouse);


