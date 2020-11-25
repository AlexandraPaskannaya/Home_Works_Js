function goods (n = 0) {
    let ost1 = n % 10;
    let ost2 = n % 100;
        if (ost1 === 1 && ost2 !== 11) {
            alert (n + "товар");
        } else if (ost1 === 2 || ost1 === 3 || ost1 === 4 && ost2 !== 12 && ost2 !== 13 && ost2 !== 14) {
            alert (n + "товара");
        } else {
            alert (n + "товаров");
        }
}
goods (8);