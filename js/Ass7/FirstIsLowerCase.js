// Write a Javascript function to test whether the first character of a string
// is lowercase.

function check(s){
    let r = s[0];

    if(r[0]===r.toLowerCase()){
        console.log(true); 
    }
    else{
        console.log(false);
    }
}

check("Jash");
