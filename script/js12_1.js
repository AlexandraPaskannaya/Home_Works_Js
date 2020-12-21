/*Создайте класс House, который позволяет создавать объект здания с параметрами длины(length), ширины(width) и количество этажей(floors)
Добавьте ему статический метод sortBuyFloors который можно будет использовать для сортировки зданий по возрастанию их высоты. */
      
class House {
    constructor(length, width, floors) {
      this.length = length;
      this.width = width;
      this.floors = floors;
    }
    static sortBuyFloors(HouseA, HouseB) {
      return HouseA.floors - HouseB.floors;
    }
}
  let houses = [
    new House (50, 10, 12),
    new House (120, 90, 15),
    new House (40, 15, 5)
];
houses.sort(House.sortBuyFloors);

console.log(houses)