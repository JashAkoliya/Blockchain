class Person{
    constructor(value){
        this.value = value;
    }

    greet(){
        return this.value
    }

    static check(gender){
        let name = gender== "male" ? "jash":"perksha"
        return new Person(name); 
    }
}

let res = Person.check("male");
console.log(res)

let  p = new Person("Jash")
console.log(p.greet())
