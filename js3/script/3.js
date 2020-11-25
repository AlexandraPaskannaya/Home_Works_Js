var numbers = [10,25,100, true, "str", null, NaN];
var sum = 0;
for (var i = 0; i < numbers.length; i++) {
      if (typeof numbers[i] === "number" && !isNaN(numbers[i])) {
      sum += numbers[i];
    }
}
alert(sum);