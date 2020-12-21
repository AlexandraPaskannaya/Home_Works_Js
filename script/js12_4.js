/*Оберните firstSkyscraper, secondSkyscraper и thirdSkyscraper в массив skyscrapers и отсортируйте его по возрастанию высоты небоскребов, 
используя статический метод класса-родителя sortBuyFloors.*/

class Skyscraper {
    constructor(length, width, floors) {
      this.length = length;
      this.width = width;
      this.floors = floors;
    }

  //Добавляем свойство fullArea через get/set
   get fullArea () {
    return (this.length * this.width) }

    set fullArea (newfloors) {
    this.floors = newfloors
}
static sortBuyFloors(a, b) {
    return a.floors - b.floors;
  }
}

let skyscrapers = [
    new Skyscraper (50, 30, 5),
    new Skyscraper (30, 25, 4),
    new Skyscraper (400, 100, 8)];
    
skyscrapers.sort(Skyscraper.sortBuyFloors);

console.log(skyscrapers)
