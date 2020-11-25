let arr = [1, 2, 56, 28, 90, 5, 6];
arr.sort(function (a, b) {
    return a - b;
});
alert(arr);
alert(arr.indexOf(6));