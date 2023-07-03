class Person{

    constructor(name){
        this.name = name
    }

    greet(name1){
        this.name1 = name1
        console.log(`${this.name} ${this.name1}`)
    }
}

// let person1 = new Person("Jash");
// person1.greet("jay");


class Student extends Person{
    constructor(name1,std){
        super(name1);
        console.log("Hello")
        
        // this.name = name1;
        this.std = std;
    }

    // greet_stud(){ 
    //     console.log(`${this.name} ${this.std}`)
    // }
}

// class Child extends Student{

// }
// let child1 = new Child("Jash")
// child1.greet("Jay");

let stud1 = new Student("Jash",12)
stud1.greet();