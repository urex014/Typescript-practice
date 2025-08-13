"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = interfaces;
function interfaces() {
    var product = {
        id: 1312,
        name: "hat",
        price: 20000,
        tags: ["nice", "dyg"]
    };
    function displayProduct(product) {
        console.log("Product: ".concat(product.name), "price: ".concat(product.price), "tags:".concat(product.tags));
    }
    displayProduct(product);
}
