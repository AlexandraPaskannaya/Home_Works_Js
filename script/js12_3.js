/*Создайте три небоскреба firstSkyscraper, secondSkyscraper и thirdSkyscraper. Выведите площадь каждого из них используя get fullArea. 
Попробуйте задать кому-нибудь из них большую площаь чем первоначальная. Выведите теперь новое количество этажей изменненного внебоскреба. 
Убедитесь что количество этажей поменялось а длина и ширина - нет. Если это так - то логика внутри set fullArea реализована правильно. */

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
    }
let firstSkyscraper = new Skyscraper (20, 10, 2);
let secondSkyscraper = new Skyscraper (15, 18, 3);
let thirdSkyscraper = new Skyscraper (40, 30, 4);

firstSkyscraper.fullArea

