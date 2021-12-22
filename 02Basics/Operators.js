// var n1 = 9;
// var n2 = 19;

// console.log(n1 * n2);

// var ans = n1 < n2;
// console.log(ans);

var listingPrice = 799;
var sellingPrice = 199;

var discount = ((listingPrice - sellingPrice)/ listingPrice) * 100;

console.log("Discount percentage is" + discount);// 75.096354637474

displayDiscountPercent = Math.round(discount);

console.log("Discount given is :",displayDiscountPercent+"%");