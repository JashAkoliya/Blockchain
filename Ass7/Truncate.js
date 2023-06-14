// 1. Input a String S, and check its length and if the length is greater than 4,
// truncate the input String and output the result -
// Input: Ice Output: Ice
// Input:Icecream Output:Icec...

function check(n){
    if(n.length > 4){
        console.log(n.slice(0,4));
    }
    else{
        console.log(n);
    }
}
check("Ice");