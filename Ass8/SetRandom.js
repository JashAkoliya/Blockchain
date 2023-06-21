let s = new Set();
for(let i=0;i<4;i++){
    s.add(parseInt(Math.random()*10));
}
s.forEach((k)=>console.log(k));

if(s.has(8)){
    console.log("true");
}
else{
    console.log("false");
}