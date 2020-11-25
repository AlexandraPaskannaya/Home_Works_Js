function avg () {
    var result;
var leng = 0;
var sum = 0;
for (var i=0; i<arguments.length; i++) {
if (typeof arguments [i] === "number" && !isNaN(arguments[i])) {
       leng++;
        sum += arguments [i];
    }
}
result = sum / leng;
return result;
}
console.log (avg (4, 6, 8, "gg"));