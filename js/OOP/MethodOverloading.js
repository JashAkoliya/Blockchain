// class Person{
//     constructor(name){
//         this.name = name;
//         this.occupation = "java";
//     }

//     greet(){
//         console.log(`${this.name} ${this.occupation}`);
//     }
// }

// class Student extends Person{
//     constructor(name){
//         super(name);
//         this.occupation = "js"
//     }
//     greet(){
//         console.log(`${this.name} ${this.occupation}`)
//     }
// }

// let p = new Person("Jash");
// p.greet();

// let s = new Student("Jash");
// s.greet();


function Animal(value){
    var obj = {};
    obj.name = value.name;
    return obj;
};

function Dog(value){
    var obj = Animal(value)
    obj.greet=function(){
        return `Hello ${obj.name}`;
    };
    return obj;
};

var eg = Dog({name:"tomy"});
console.log(eg.greet())

