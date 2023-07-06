// let nums = [15,12,23]
// nums[5] = 5
// console.log(nums)



// let val = ["jash","jay",{name:"vijay"},function(){console.log("Hello");}];

// val[3]();

// let f = val[3];
// f();



// let val = [1,2,6,4,8,9];
// console.log(val.push(6));
// console.log(val)
// console.log(val.pop());
// console.log(val); 
// console.log(val.shift())
// console.log(val)
// console.log(val.unshift(3))
// console.log(val)



// let n = [];
// n[0] = 1;
// n[99] = 45;
// // for(let i in n){  //it work with index number
// //     console.log(n[i])
// // }

// for(let i of n){  // it work with value of the array
//     console.log(i)
// }



// let v  = [1,2,3]
// delete v[0];
// console.log(v);


// let v = [3,2,5,4]
// v.splice(1,2);  //remove particular part from array
// console.log(v)


// let v = [6,3,8,2];
// let r = v.filter(n => n%2===0).map(n => n*2)
// //  .forEach(n => console.log(n));
// .reduce((sum,num)=>sum+num,0);
// console.log(r)



// let v = [6,2,13,8,3,5];
// // let a = v[0];
// // let b = v[1];
// // let c = v[2];
// console.log(v);

// let [a,s,c,...d] = v;
// console.log(d);

// let s1 = "Hello jash! how are you?";
// let [x,y,...z] = s1.split(" ");
// console.log(x,y,z)
// console.log(z)



// rest and spread operator

//rest
// function sum(a,b,...num){  // as a parameter is rest
//     console.log(num)
//     for(let n of num){
//         r = r+n;
//     }
//     return r;
// }

// let res = sum(4,2,5,7,9);
// console.log(res);


//spread
function sum (a,b,c,d,e)
{
    let r = a+b+c+d+e;
    return r;
}

let n = [4,3,5,2,6];
let r = sum(...n); // as an argument its spread operator
console.log(r);

