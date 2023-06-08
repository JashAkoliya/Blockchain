// Write a program to find whether a given number is special number or

// not-
// If the sum of the factorial of digits of a number (N) is equal to the

// number itself, the number (N) is called a special number.
// eg- 145 is a special number
// Logic- 1! + 4! + 5!= 1+24+120 i.e 14


function check(n){
    num = n;
    a=0;
    fact=1;
    while(n>0){
        rem = n%10;
        for(i=1;i<=rem;i++){
            fact = fact*i;
        }
        a = a+fact;
        n = parseInt(n/10);
        fact=1;
    }
    if(num === a){
        console.log("special num")
    }
    else{
        console.log("not special num")
    }
}

check(145);
