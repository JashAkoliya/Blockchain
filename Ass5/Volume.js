// Write a JavaScript program to get the volume of a Cylinder, Sphere and
// Cone with four decimal places using objects and classes.
// Create classes for volumes for each geometric shape which returns the
// output using the getVolume() method.

// eg- to get volume of cylinder-
// let obj= new Cylinder(radius,height);

// obj.getVolume();

// Formulas for volumes of the shapes-
// 1) Cylinder- Volume = πr

// 2h

// where r is the radius and h is the height of the cylinder.
// 2)Sphere- Volume= 4/3πr
// 3
// where r is the radius
// 3) Cone- Volume= πr
// 2h/3

// where r is the radius and h is the height of the cone.

class Cylinder{
    constructor(radius,height){
        this.radius = radius;
        this.height = height;
    }
    getVolume(){
        let r = this.radius;
        let h = this.height;
        let n = 3.14*r*r*h;
        console.log(`Cylinder ${n}`);
    }
}
class Sphere{
    constructor(radius){
        this.radius = radius;
    }
    getVolume(){
        let r = this.radius;
        let n = 4/3*3.14*r*r*r;
        console.log(`Sphere ${n}`);
    }
}
class Cone{
    constructor(radius,height){
        this.radius = radius;
        this.height = height;
    }
    getVolume(){
        let r = this.radius;
        let h = this.height;
        let n = 3.14*r*r*h/3;
        console.log(`Cone ${n}`);
    }
}

let shape = new Cylinder(5,2);
shape.getVolume();
