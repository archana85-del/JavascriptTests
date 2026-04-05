let customerType = "Premium";
let purchaseAmount = 150;
let discount = 0;

if (customerType === "Premium") {
    if (purchaseAmount > 100) {
        discount = 20;
    } else {
        discount = 10;
    }
} else if (customerType === "Regular") {
    if (purchaseAmount > 100) {
        discount = 5;
    } else {
        discount = 0;
    }
}

console.log("Discount:", discount + "%");