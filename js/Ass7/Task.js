// 10. Given a String S, achieve following tasks
// a) Convert the String into upper case.
// b) Convert only the first character to uppercase.

// c) Convert the String into lower case.
// d) Break the string into two halves and swap them.
// e) Count the repeating characters.
// f) Reverse the string

let s = "jash";
console.log(s.toUpperCase());


let s2 = s[0].toUpperCase()+s.slice(1);
console.log(s2);


let s3 = "JASH"
console.log(s2.toLowerCase());



let s4 = "jash";
let r = "";
for(i=0;i<s.length;i++){
    if(i===s.length/2){
        r = r + " " + s[i];
    }
    else{
        r = r + s[i];
    }
}
let res = r.split(" ");
console.log(res[1]+" "+res[0]);



let s5 = "jash akoliya vijaybhai";
let n = 0;
let a = [];
for(i=0;i<s5.length;i++){
    if(a.includes(s5[i])){
        n++;
    }
    else{
        a.push(s5[i]);
    }
}
console.log(n);



let s6 = "jash";
let r1 = "";
for(i=s6.length-1;i>=0;i--){
    r1 = r1+s6[i];
}
console.log(r1);




