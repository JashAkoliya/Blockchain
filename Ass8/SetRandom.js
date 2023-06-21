let s = new Set();
for(let i=0;i<4;i++){
    s.add(parseInt(Math.random()*10));
}
console.log("values:- ");
s.forEach((k)=>console.log(k));

console.log("Check that contain 8:- ");
if(s.has(8)){
    console.log("true");
}
else{
    console.log("false");
}
