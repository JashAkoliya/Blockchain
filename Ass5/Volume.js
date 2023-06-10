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