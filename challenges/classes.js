// 1. Copy and paste your prototype in here and refactor into class syntax.

// function CuboidMaker(attr){
//   this.length = attr.length;
//   this.width = attr.width;
//   this.height = attr.height;
// }
// CuboidMaker.prototype.volume = function (){
//   return this.length * this.width * this.height;
// }
// CuboidMaker.prototype.surfaceArea = function(){
//   return  2 * (this.length * this.width + this.length * this.height + this.width * this.height);
// }

class CuboidMaker{
    constructor(attr){
        this.length = attr.length;
        this.width = attr.width;
        this.height = attr.height;
    }
    volume(){
        return this.length * this.width * this.height;
    }
    surfaceArea(){
        return  2 * (this.length * this.width + this.length * this.height + this.width * this.height);    
    }
}
const cuboid = new CuboidMaker({
  length: 4,
  width: 5,
  height: 5,
});

// Test your volume and surfaceArea methods by uncommenting the logs below:
console.log(cuboid.volume()); // 100
console.log(cuboid.surfaceArea()); // 130

// Stretch Task: Extend the base class CuboidMaker with a sub class called CubeMaker.  Find out the formulas for volume and surface area for cubes and create those methods using the dimension properties from CuboidMaker.  Test your work by logging out your volume and surface area.

class CubeMaker extends CuboidMaker{
    constructor(attr){
        super(attr);
        this.side = attr.side;
    }
    volume() {
        return Math.pow(this.side, 3)
    }
    surfaceArea() {
        return 6 * Math.pow(this.side, 2)
    }
}

const newCube = new CubeMaker({
    side: 12,
});

console.log(newCube.volume());
console.log(newCube.surfaceArea())

// here's the video I used as a reference 
// https://www.youtube.com/watch?v=5xdKfAwDKWA

