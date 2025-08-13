"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Inheritance = function () {
    var Animal = /** @class */ (function () {
        function Animal(name, age, sound) {
            this.name = name;
            this.age = age;
            this.sound = sound;
        }
        Animal.prototype.makeSound = function () {
            console.log("the sound is |".concat(this.sound));
        };
        return Animal;
    }());
    var Dog = /** @class */ (function (_super) {
        __extends(Dog, _super);
        function Dog(name, age, sound, breed) {
            var _this = _super.call(this, name, age, sound) || this;
            _this.breed = breed;
            return _this;
        }
        Dog.prototype.makeSound = function () {
            console.log("im a dog sooo ".concat(this.sound, " gng"));
        };
        return Dog;
    }(Animal));
    var Cat = /** @class */ (function (_super) {
        __extends(Cat, _super);
        function Cat(name, age, sound, color) {
            var _this = _super.call(this, name, age, sound) || this;
            _this.color = color;
            return _this;
        }
        Cat.prototype.makeSound = function () {
            console.log("im a cat. ".concat(this.sound, " nga!"));
        };
        return Cat;
    }(Animal));
    var dog = new Dog("BIngo", 12, "barky bark", "bulldog");
    var cat = new Cat("mia", 25, "meow meow", "lebaese");
    console.log(dog.makeSound());
    console.log(cat.makeSound());
};
exports.default = Inheritance;
