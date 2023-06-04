result(102);

function result(n){
    let s = parseInt(n/10)
    switch(s){
        case 9:
            if(n>90 && n<=100){
                console.log("S")
            }
            break;
        case 8:
            if(n>80 && n<=90){
                console.log("A")
            }
            break;
        case 7:
            if(n>70 && n<=80){
                console.log("B")
            }
            break;
        case 6:
            if(n>60 && n<=70){
                console.log("C")
            }
            break;
        case 5:
            if(n>50 && n<=60){
                console.log("D")
            }
            break;
        case 4:
            if(n>40 && n<=50){
                console.log("E")
            }
            break;
        case 3:
        case 2:
        case 1:
        case 0:
            if(n>=0 && n<=40){
                console.log("Fail")
            }
            break;
        default:
            console.log("Invalid Input")
    }
}
