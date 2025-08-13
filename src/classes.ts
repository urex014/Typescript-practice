// // // shopping cart system with classes 
// // Project: Shopping Cart System
// // Requirements
// // Product class

// // Properties: id (readonly), name (public), price (public), stock (private).

// // Method: getInfo() → returns "Product: Name ($Price)".

// // Method: reduceStock(quantity: number) → decreases stock if enough, otherwise prints "Not enough stock".

// // CartItem class

// // Properties: product (public), quantity (public).

// // Method: getTotal() → returns total price for that item.

// // ShoppingCart class

// // Private array items to hold CartItems.

// // Method: addItem(product: Product, quantity: number).

// // Method: removeItem(productId: number).

// // Method: getTotal() → returns the sum of all items’ totals.

// // Test the system

// // Create some products.

// // Add them to the cart.

// // Show cart total.

// // Try adding more than available stock to see the error handling.

//   class Product{
//     readonly id:number 
//     public name: string;
//     public price: number;
//     private stock: number;

//     constructor(id:number, name:string, price:number, stock:number){
//       this.id = id;
//       this.name = name;
//       this.price = price;
//       this.stock = stock;
//     }
//     getInfo(){
//       return `name: ${this.name}... price:${this.price}`;
//     }
//     reduceStock(quantity:number){
//       if(quantity>this.stock){
//         console.log("not enough stock")
//       }else{
//       return this.stock-=quantity;
//       }
//     }
//   }

// class CartItems{
//   public product:Product;
//   public quantity:number;

//   constructor(product:Product, quantity:number){
//     this.product = product;
//     this.quantity = quantity;
//   }
// }