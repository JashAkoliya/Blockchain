function create(n){
    num = n;
    let a=0;
    if(n===1){
        console.log(6);
    }
    else{
        a = 6
        for(i=1;i<n;i++){
            a = a+5;
        }
        console.log(a);
    }
}

create(87);