class car{
    constructor(name,brand){
        this.name = name;
        this.brand = brand;
    }
}

class Child extends car{
    constructor(engine,price){
        super();
        this.engine = engine;
        this.price = price;
    }

    demo(){
        console.log(`${this.engine}  ${this.price}`)
    }
}

let c1 = new Child("turbo",500000)
c1.demo();