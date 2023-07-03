let n1=1
let n="";
for(i=1;i<=4;i++){
    for(j=1;j<=i;j++){
        n = n+n1+" ";        
        n1++;
    }
    console.log(n);
    n=""
}
