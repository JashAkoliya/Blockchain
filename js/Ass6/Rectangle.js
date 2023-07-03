class Rectangle{
    constructor(len,wid){
        this.len = len;
        this.wid = wid;
    }
    area(){
        console.log(this.len*this.wid);
    }
}

class Square extends Rectangle{
    constructor(num){
        super(num,num);
    }
}
let sqr = new Square(5);
sqr.area();

let rect = new Rectangle(5,2);
rect.area();