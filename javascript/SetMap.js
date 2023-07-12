let set = new Set();
set.add(10);
set.add("Jash");
set.add("Jash");
set.delete(10);
console.log(set.has("Jash"));



// Map
// let map = new Map(); // it create set of key and array of values
// map.set("jash","akoliya");
// map.set("vijay","akoliya");
// map.set("jash","blockchain");
// // console.log(map);
// // console.log(map.keys());
// // console.log(map.values());
// map.forEach((k,v) => console.log(k,v))


// let v = [2,5,4,8]
// v.forEach(i=> console.log(i));



//callback , higher-order function , closure

// callback
// console.log("Hello");
// setTimeout(()=>console.log("get lost"),2000); 

// function x(){
//     function y(){
//         console.log("y");
//     }
//     console.log("x");
//     y();
// }
// x();



//functional - function are first class citizen
// add is higher order function and handle is callback function

// callback :- the function which is pass inside another function is called callback function
// higher-order function:- the function which return the function is called higher order function

// function add(x,y,handle){
//     let res = x+y;
//     handle(res);
// }

// function print(res){
//     console.log(res);
// }

// function sendRequest(res){
//     console.log("sending data to server :- ",res);
// }

// add(5,5,sendRequest);



// function outer(){
//     let n1 = 10;
//     console.log("Hello");

//     return function(n3){
//         let n2 = 20;
//         console.log("Jash",n1,n2,n3);
//     }
// }

// let res = outer();
// res(30);


//closure is the function with their lexical scope variable

// let str = "jash is in surat is"
// console.log(str.match(/is/g)); // is accept RegExp snd return array 

// let s = str.charCodeAt(0);
// let c = String.fromCharCode(65);
// console.log(c);

// let c = str.slice(-2); 
// let s = str.substring(1,5); // not pass negative num
// let i = str.substr(1,);
// let s1 = str.split(" ");
// console.log(c);
// console.log(s);
// console.log(s1);
// console.log(i);

// let a = 10;
// let b = a.toString();
// console.log(b+20);

// let s = "js is good is lang";
// let c = s.replace("js","java");
// let d = s.replace(/is/g,"are");
// console.log(d);

