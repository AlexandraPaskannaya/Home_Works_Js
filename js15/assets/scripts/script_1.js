/*Напишите код как получить h1, ul, коллекцию элементов li, коллекцию четных элементов li, 
коллекцию нечетных элементов li (для этого вспоминаем odd, even в css).*/

//как получить h1
console.log(document.body.firstElementChild)
//или
console.log(document.body.children[0])

//как получить ul
console.log(document.body.children[1])

//коллекцию четных элементов li + Добавьте для всех четных элементов li красный цвет текста.
let evenListItems = document.querySelectorAll("ul li:nth-child(even)");
for(let item of evenListItems) {
    item.style.color = "red"
    alert(item.innerHTML)
}

//коллекцию нечетных элементов li + А для нечетных элементов синий цвет текста.
let oddListItems = document.querySelectorAll('ul li:nth-child(odd)');
for (let items of oddListItems) {
    items.style.color = "blue";
    alert(items.innerHTML)
}
