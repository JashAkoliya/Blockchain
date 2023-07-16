// let a = ["jash","jay","preksha"];
// let g = a[Symbol.iterator]();
// // console.log(typeof a[Symbol.iterator]());
// let f1 = g.next();
// console.log(f1);
// let f2 = g.next().value;
// console.log(f2);
// let f3 = g.next().done;
// console.log(f3);
// let f4 = g.next();
// console.log(f4);


let s = "jash"
let g2 = s[Symbol.iterator]();
let r = g2.next();

while(!r.done){
    console.log(r.value);
    r = g2.next();
}


