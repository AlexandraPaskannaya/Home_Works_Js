function mun(n, m) {
    var result = n*m;
    for(var i = 0; i<mun.length; i++) {
      if(typeof mun[i] === "number" && !isNaN(mun[i])){
        result *= mun[i]
      }
      return result;
  } 
}
  alert( mun(5,10));