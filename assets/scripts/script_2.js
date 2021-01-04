/*Задание со звездочкой. Для всех четных переключение цвета с красного на синий каждый
две секунды(вначале красный через 2 секунды синий, потом через 2 секунды опять красный и т.д.).
А для нечентных элементов переключение с синего на красный цвет каждые 
две секунды(вначале синий 2 секунды через 2 секунды красный, потом через
2 секунды опять синий и т.д.). Для этого использовать setInterval.*/


/* ul li:odd не работает.

function changeColor() {
    var oddListItems = document.querySelectorAll("ul li:odd");
  
      for (var i = 0; i < oddListItems.length; i++) {
        oddListItems[i].style.color = oddListItems[i].style.color === 'blue' ? 'red' : 'blue';
     }
  }
window.setInterval(changeColor, 2000);
*/

// работает только ul li:last-child

function changeColor() {
    var oddListItems = document.querySelectorAll("ul li:last-child");
  
      for (var i = 0; i < oddListItems.length; i++) {
        oddListItems[i].style.color = oddListItems[i].style.color === 'blue' ? 'red' : 'blue';
     }
  }
window.setInterval(changeColor, 2000);