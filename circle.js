// class - circle

class circle{
    constructor(radius, colour){
        this.radius = radius;
        this.colour = colour;
    }
    get radiuscircle(){
        return this.radius;
    }
    set radiuscircle(radius){
        this.radius = radius;
    }
    get colourcircle(){
        return this.colour;
    }
    set colourcircle(colour){
        this.colour = colour;
    }
    get toString(){
        return`"circle[radius = ${this.radius}, colour = ${this.colour}]"`
    }
    get areaCircle(){
        return Math.PI * this.radius * this.radius;
    }
    get circumferenceCircle(){
        return 2 * Math.PI * this.radius;
    }
}
var obj = new circle(1.0,'red');


obj.radiuscircle = 3.3
console.log(obj.radiuscircle);

obj.colourcircle = "Sky blue"
console.log(obj.colourcircle);

console.log(obj.toString);

console.log(obj.areaCircle);

console.log(obj.circumferenceCircle);