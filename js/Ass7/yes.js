// 9. Give a correct verdict to users input if he enters "yes", "YES","Yes" ,etc
// (any combination) using string methods.
// How will you handle that ?

function check(n){
    if(typeof n!=='string'){
        console.log("false");
    }

    if("yes"===n.toLowerCase()){
        console.log("true");
    }
    else{
        console.log("false");
    }
}

check("YES");