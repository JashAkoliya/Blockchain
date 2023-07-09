// let empty={x:10,y:0}
// let p2={x:empty.x,y:empty.y+1} 
// console.log(p2);

// let language={
//     "title":"javascript",
//     "inventor":{
//         "firstname":"brendan",
//         "lastname":"eich"
//     },
//     "year":1995
// }

// console.log(language.inventor.latname);


// second way
// let book  = new Object;
// book.title = "Way of success"
// book.author = {"FN":"jash","LN":"akoliya"}
// book['author2']='vijay'

// console.log('Author: ',book.author2);


//third way

// let obj1 = Object.create({x:1,y:2});

// let o2 = obj1.x+obj1.y
// console.log(obj1.x);
// console.log(o2);


// car example

// let mycar = new Object;
// mycar.company = 'bmw'
// mycar.model = 'x5'
// mycar.year = 2022
// mycar.price = 500000
// mycar.transmission = 'auto'
// mycar.model='x6'

// console.log(mycar);



// student object
// let student = new Object;
// student.name = "Jash"
// student.age=19
// student.high_education="b.tech"
// student.subject={
//     cse:{"1":"os","2":"daa"},
//     ec:{"1":"logisim","2":"de"}
// }

// student.marks={
//     cse:{"1":65,"2":72},
//     ec:{"1":75,"2":84}
// }
// student.year_of_grad={"year":2025}
// console.log(`student  ${student.name}:-`,student.subject.cse)



// let add = function(n1,n2)
// {
//     return n1+n2;
// }
// console.log(add(5,2));


// function name(n1,n2){
//     return n1+n2;
// }
// let n = name
// let res = n(5,2)
// console.log(res)


// arrow function

// let add = (n1,n2)=>
// {
//     return n1+n2;
// }
// let res = add(5,5);
// console.log(res);

// or

// let add = (n1,n2)=>n1+n2
// let res = add(5,5);
// console.log(res);




// let obj = new Object();
// obj.name = "jash";
// obj.age = 19;
// obj.edu = "btech";


// function Student(name,age,edu){
//     this.name1=name;
//     this.age=age;
//     this.edu=edu;
// }

// let student1 = new Student("Jash",19,"btech")
// let student2 = new Student("Jay",18,"btech")
// console.log(student1)
// console.log(student2)