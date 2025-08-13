export default function functions(){
  function fullName(firstName:string, lastName:string):string{
    return `${firstName} ${lastName}`;
  }
  console.log(fullName("amarachukwu", "Onuoha"))

  function applyDiscount(price:number, discount?:number):number{
    if(!discount){
      return price
    }else{
      return price - (price*discount);
    }
  }
  console.log(applyDiscount(200,20));

  function logProduct(productName:string, price:number, tags:string[]):void{
    console.log(productName, price, tags);
  }
  logProduct('connect', 40, ["what", "dam"])

}