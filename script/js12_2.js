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
   constructor(value) {
    super ()
      this.ofices = value.ofices;
      this.length = value.length;
      this.width = value.width;
      this.floors = value.floors;
   }
   //Добавляем свойство fullArea через get/set
   get fullArea () {
    return (20 * 10) * this.floors
}
    set fullArea (newfloors) {
    this.floors = newfloors
}
    }
let house = new House (20, 10, 2)

let skyscraper = new Skyscraper ({
        ofices: 2,
        length: 40,
        width: 20,
        floors: 5
})

skyscraper.fullArea;