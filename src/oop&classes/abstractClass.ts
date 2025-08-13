//you cant create an instance of an abstract class. 
//any class that extends an abstract class must implement all abstract methods 
const abstractClass = ()=>{
  abstract class Shape{
    color:string
    constructor( color:string){
      this.color = color;
    }
    abstract getArea():number;
    abstract display():void;
  }
  class Rectangle extends Shape{
    width: number;
    height: number;
    constructor(color: string, width: number, height: number) {
      super(color);
      this.width = width;
      this.height = height;
    }
    getArea() {
      return this.width * this.height;
    }
    display() {
      console.log(`rectangle with color ${this.color} and area ${this.getArea()}`);
    }
  }
  class Circle extends Shape{
    radius:number;
    constructor(color:string, radius:number){
      super(color)
      this.radius = radius
    }
    getArea(): number {
      return Math.PI*this.radius
    }
    display(): void {
      console.log(`circle with color ${this.color} and area ${this.getArea()}`)
    }
  }
  const rectangle = new Rectangle("red", 10, 28)
  const circle = new Circle("blue", 7)
}
export default abstractClass