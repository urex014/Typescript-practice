// // shopping cart system with classes 
// Project: Shopping Cart System
// Requirements
// Product class
// Properties: id (readonly), name (public), price (public), stock (private).
// Method: getInfo() → returns "Product: Name ($Price)".
// Method: reduceStock(quantity: number) → decreases stock if enough, otherwise prints "Not enough stock".
// CartItem class
// Properties: product (public), quantity (public).
// Method: getTotal() → returns total price for that item.
// ShoppingCart class
// Private array items to hold CartItems.
// Method: addItem(product: Product, quantity: number).
// Method: removeItem(productId: number).
// Method: getTotal() → returns the sum of all items’ totals.
// Test the system
// Create some products.
// Add them to the cart.
// Show cart total.
// Try adding more than available stock to see the error handling.
var Product = /** @class */ (function () {
    function Product(id, name, price, stock) {
        this.id = id;
        this.name = name;
        this.price = price;
        this.stock = stock;
    }
    Product.prototype.getInfo = function () {
        return "name: ".concat(this.name, "... price:").concat(this.price);
    };
    Product.prototype.reduceStock = function (quantity) {
        if (quantity > this.stock) {
            console.log("not enough stock");
        }
        else {
            return this.stock - quantity;
        }
    };
    return Product;
}());
var shirt = new Product(1, "shirt", 10000, 4);
console.log(shirt.getInfo());
console.log(shirt.reduceStock(5));
var cartItems = /** @class */ (function () {
    function cartItems(product, quantity) {
        this.product = product;
        this.quantity = quantity;
    }
    cartItems.prototype.getTotal = function () {
        return;
    };
    return cartItems;
}());
