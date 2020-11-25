function repeat(str = " ", n = 2) {
    var result = "";
    for(var i = 0; i<n; i++){
        result = result + str;
    }
    return result;
}
repeat();