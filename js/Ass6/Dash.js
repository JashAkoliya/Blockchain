function dash(n){
    let num = n.split("");
    let res = num[0];
    res.toString();
    
    for(i=0;i<num.length-1;i++){
        if(num[i]%2==0 && num[i+1]%2==0){
            res = res+"-"+num[i+1];
        }   
        else{
            res = res+num[i+1];
        }
    }
    console.log(res);
}

let n = String(2410364);
dash(n);