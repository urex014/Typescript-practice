"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = functions;
function functions() {
    function fullName(firstName, lastName) {
        return "".concat(firstName, " ").concat(lastName);
    }
    console.log(fullName("amarachukwu", "Onuoha"));
    function applyDiscount(price, discount) {
        if (!discount) {
            return price;
        }
        else {
            return price - (price * discount);
        }
    }
    console.log(applyDiscount(200, 20));
    function logProduct(productName, price, tags) {
        console.log(productName, price, tags);
    }
    logProduct('connect', 40, ["what", "dam"]);
}
