/*Дан массив var arr = [1, 2, 3, 4, 4, 5, 2, 9, 4]; На основании этого массива создать новый массив arrUnique который 
будет представлять собой массив arr но без дублирующихся по своим значениям элементам. Использовать методы reduce и indexOf.*/

// Первый вариант:
      var arr = [1, 2, 3, 4, 4, 5, 2, 9, 4];
      var arrUnique = arr.reduce((result, item) => {
          return result.includes(item) ? result : [... result, item];
      }, []);
      alert(arrUnique);

//Второй способ:

var arr = [1, 2, 3, 4, 4, 5, 2, 9, 4];
var arrUnique = arr.filter((item, index) => arr.indexOf (item [age]) !== index);
console.log (arrUnique);

//Третий способ:

var arr = [1, 2, 3, 4, 4, 5, 2, 9, 4];
var arrUnique = arr.reduce((result, item) => {
         console.log(result);
         if (result.indexOf(item) === -1) {
                result.push(item);
                return result;
         } else {return  result}
      }, []);
console.log (arrUnique);