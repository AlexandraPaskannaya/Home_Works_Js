/*Создайте метод calcArea который будет возвращать суммарную площадь всех этажей дома. Данный метод занести в прототип конструктора. 
Вызвать данный метод на каждом созданном объекте и результат записать в поле totalArea каждого объекта.*/
function HouseBuilder (lenght, width, floor) {
    this.length = lenght,
    this.width = width,
    this.floor = floor
}

HouseBuilder.prototype.calcArea = function () {
    this.totalArea = this.length * this.width * this.floor
    return this.totalArea
}
const firstHouse = new HouseBuilder(40, 20, 2);
const secondHouse = new HouseBuilder (30, 10, 3);

firstHouse.totalArea = firstHouse.calcArea();
secondHouse.totalArea = secondHouse.calcArea();

console.log(firstHouse)
console.log(secondHouse)

