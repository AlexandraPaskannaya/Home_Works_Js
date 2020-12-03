/*Используя объект Date представьте текущую дату на момент выполения задания в формате DD.MM.YYYYY (например 5.12.2020).
   Расширить задание таким образом чтобы если день месяца есть число меньше 10 перед ней ставился "0" (например 05.12.2020);*/
   var Date = new Date();
   var day = Date.getDate();
   var month = Date.getMonth()+1;
   var year = Date.getFullYear();
   if(day<10){day='0'+day}
   
   var Date = day+'.'+month+'.'+year;
   
   alert(Date);
