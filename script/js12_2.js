/*На основании класса House создайте класс Skyscraper (небоскреб, по сути реализуйте через наследование). Данный класс кроме свойств 
length, width и floors должен предоставлять дополнительное свойство offices
(количество выделенных в офисе задний, можете задать их любым на ваше усмотрение);
Добавьте свойство fullArea который будет соответствовать суммарной площади всех этажей вашего небоскреба. Данное свойство создать через get/set. 
При этом если площадь небоскреба увеличиась - то это значит что сверху построили еще этажи а длина и ширина не поменялись, площадь может быть только 
увеличена.
Опишите в get как будет осуществляться подсчет площади и вывод этой площадь, а в set определите как будет определяться новое количесвто этажей. */

class House {
    constructor(length, width, floors) {
      this.length = length;
      this.width = width;
      this.floors = floors;
    }
}
class Skyscraper extends House {
   constructor(length, width, floors, offices) {
    super (length, width, floors)
      this.offices = offices;
   }
   //Добавляем свойство fullArea через get/set
   get fullArea () {
    return (this.length * this.width) * this.floors
}
    set fullArea (value) {
    this.floors = Math.round(value / (this.length * this.width) );
}
    }
let house = new House (20, 10, 2)

let skyscraper = new Skyscraper (30, 12, 3, 5)

skyscraper.fullArea;