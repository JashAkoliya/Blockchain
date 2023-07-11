// let a = "jash";// type is string
// let b = "jash";

// let a = Symbol("jash");// type is Symbol. It is gauranteed to be unique.
// let b = Symbol("jash");

// console.log(typeof a);
// console.log(a===b);

let age = Symbol("age");
let user = {
    name:"jash",
    [age]:19,
    qualification:"Btech"    
};

console.log(user);
// console.log(user.age); //undefined
console.log(user[age]);


for(let a in user){
    console.log(a);
}

console.log(JSON.stringify(user));

