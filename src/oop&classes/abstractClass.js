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
//you cant create an instance of an abstract class. 
//any class that extends an abstract class must implement all abstract methods 
var abstractClass = function () {
    var Shape = /** @class */ (function () {
        function Shape(color) {
            this.color = color;
        }
        return Shape;
    }());
    var Rectangle = /** @class */ (function (_super) {
        __extends(Rectangle, _super);
        function Rectangle(color, width, height) {
            var _this = _super.call(this, color) || this;
            _this.width = width;
            _this.height = height;
            return _this;
        }
        Rectangle.prototype.getArea = function () {
            return this.width * this.height;
        };
        Rectangle.prototype.display = function () {
            console.log("rectangle with color ".concat(this.color, " and area ").concat(this.getArea()));
        };
        return Rectangle;
    }(Shape));
    var Circle = /** @class */ (function (_super) {
        __extends(Circle, _super);
        function Circle(color, radius) {
            var _this = _super.call(this, color) || this;
            _this.radius = radius;
            return _this;
        }
        Circle.prototype.getArea = function () {
            return Math.PI * this.radius;
        };
        Circle.prototype.display = function () {
            console.log("circle with color ".concat(this.color, " and area ").concat(this.getArea()));
        };
        return Circle;
    }(Shape));
    var rectangle = new Rectangle("red", 10, 28);
    var circle = new Circle("blue", 7);
};
exports.default = abstractClass;
