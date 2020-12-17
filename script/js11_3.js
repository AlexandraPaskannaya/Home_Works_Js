/*Данна функция function askArea(result, resolve, reject) {
    let area = result();
    if area >= "120") resolve();
    else reject();
}

Добавьте в прототип конструктора houseBuilder метод для проверки того что выполнен план по площади checkAreaSuccessfully, которая
выполняет alert("План по стройке выполнен"). Добавьте также метод для проверки того что не выполнен план по площади checkAreaFail,
которая выполняет alert("План по стройке не выполнен выполнен"). Попробуйте вызвать:

askArea(firstHouse.calcArea, firstHouse.checkAreaSuccessfully, firstHouse.checkAreaFail)
askArea(secondHouse.calcArea, secondHouse.checkAreaSuccessfully, secondHouse.checkAreaFail)

Будет ли такой код работать корректно? Если нет то используйте известные вам механизмы привязки чтобы решить эту задачу. */

function HouseBuilder (lenght, width, floor) {
    this.length = lenght,
    this.width = width,
    this.floor = floor
}

HouseBuilder.prototype.calcArea = function () {
    this.totalArea = this.length * this.width * this.floor
    return this.totalArea
}
const firstHouse = new HouseBuilder(5, 8, 2);
const secondHouse = new HouseBuilder (30, 10, 4);

firstHouse.totalArea = firstHouse.calcArea();
secondHouse.totalArea = secondHouse.calcArea();

function askArea(result, resolve, reject) {
    let area = result();
    if (area >= "120") resolve();
    else reject();
}

HouseBuilder.prototype.checkAreaSuccessfully = function () {
    alert("План по стройке выполнен");
}

HouseBuilder.prototype.checkAreaFail = function () {
    alert("План по стройке не выполнен");
}

askArea(firstHouse.calcArea.bind(firstHouse), firstHouse.checkAreaSuccessfully.bind(firstHouse), firstHouse.checkAreaFail.bind(firstHouse));
askArea(secondHouse.calcArea.bind(secondHouse), secondHouse.checkAreaSuccessfully.bind(secondHouse), secondHouse.checkAreaFail.bind(secondHouse));

