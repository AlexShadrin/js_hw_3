const basket = [
    ['plate', 115],
    ['fork', 34],
    ['spoon', 32],
    ['knife', 80],
];

const countBasketPrice = function (basket) {
    return basket.reduce(function (a, b) {
        return a + b[1];
    }, 0);
}
console.log(countBasketPrice(basket));