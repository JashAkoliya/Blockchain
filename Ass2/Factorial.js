let fact=1;
function factorial(n1,n2){
    s=n1;
    t=n2;
    for(i=s;i<=t;i++){
            if(isPrime(i)){
                for(j=i;j>=1;j--){
                    fact = fact*j;
                } 
                console.log(`${i} = ${fact}`)
                fact=1
            }
    }
}

function isPrime(n){
    flag=1;
    for(e=2;e<=n/2;e++){
        if(n%e==0){
            flag=0;
        }
    }
    if(flag==1){
        return true;
    }
}
factorial(2,10);