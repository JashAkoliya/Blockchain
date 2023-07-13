// let a = "9JASH";
// let regex = new RegExp("in","i");
// let regex = /[A-Y a-y]JASH/;
// let regex = /[^0-8]JASH/ // starting symbol must not 0-8
let b = "53459";
let regex = /^[0-5]\d{4}/;  // []{} <-- it will mention how much time
// [0-9] = \d
console.log(regex.test(b));
