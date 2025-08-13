export default function interfaces(){

  interface Product{
    readonly id : number;
    name:string,
    price:number,
    tags?:string[]
  }
  interface biggerProducts extends Product{
    size:string
  }
  const product:Product = 
    {
      id:1312,
      name:"hat",
      price:20000,
      tags:["nice","dyg"]
    }
  
  function displayProduct(product:Product):void{
    console.log(
      `Product: ${product.name}`,
      `price: ${product.price}`,
      `tags:${product.tags}`
    )
  }
  displayProduct(product);

}