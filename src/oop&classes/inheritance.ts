const Inheritance = ()=>{
class Animal{
  public name:string;
  public age:number;
  protected sound: string;

  constructor(name:string, age:number, sound:string){
    this.name = name;
    this.age = age;
    this.sound = sound;
  }
  makeSound(){
    console.log(`the sound is |${this.sound}`)
  }
}
class Dog extends Animal{
  breed:string;
  constructor(name:string, age:number , sound:string, breed:string){
    super(name, age, sound);
    this.breed = breed;
  }
  makeSound(): void {
    console.log(`im a dog sooo ${this.sound} gng`)
  }
}
class Cat extends Animal{
  color:string;
  constructor(name:string, age:number, sound:string, color:string){
    super(name, age, sound)
    this.color= color;
  }
  makeSound():void{
    console.log(`im a cat. ${this.sound} nga!`)
  }
}
const dog = new Dog("BIngo", 12, "barky bark", "bulldog");
const cat = new Cat("mia", 25, "meow meow", "lebaese")
console.log(dog.makeSound());
console.log(cat.makeSound())
}
export default Inheritance