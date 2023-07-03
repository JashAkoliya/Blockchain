function check(n1,n2,n3){
    if(n1===n2 && n2===n3){
        console.log("equilateral triangle")
    }

    else if(n1===n2 || n1===n3 || n2===n3){
        console.log("isoceles triangle")
    }
    
    else{
        console.log("scalene triangle")
    }
}

check(1,3,2)