function user (a, b, c) {
    let d = Math.pow (b,2) - 4*a*c;
        if(d > 0) {
            let x1 = (-d + Math.sqrt(d)) / (2*a);
            let x2 = (-d - Math.sqrt(d)) / (2*a);
         return [x1, x2];
        } else if (d === 0) {
            let x = -d / (2*a);
            return [x];
        } else {
            return 
        }
    }
    user(2,5,3);