// Write a program to find whether a given number is armstrong number or

// not-
// The Armstrong number is a number that is equal to the sum of cubes of

// its digits. For example 0, 1, 153, 370, 371 and 407 are the Armstrong
// numbers. Let's try to understand why 153 is an Armstrong number.
// 153 = (1*1*1)+(5*5*5)+(3*3*3) where:
// (1*1*1)=1
// (5*5*5)=125
// (3*3*3)=27
// So:
// 1+125+27=153

function check(n){
    num = n;
    let a=0;
    while(n>0){
        let rem = n%10;
        rem = rem*rem*rem;
        a = a+rem;
        n = parseInt(n/10);
    }
    if(num===a){
        console.log("Armstrong number");
    }
    else{
        console.log("Not armstrong");
    }
}

check(153);
