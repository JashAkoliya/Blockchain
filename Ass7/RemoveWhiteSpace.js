// 2. Input a String S with multiple words, and remove whitespaces and
// output the result -
// Input: “Hii Boy” Output: “HiiBoy”

function remove(s){
    let s1 = s.split("");
    let res = "";
    for(i=0;i<s1.length;i++){
        if(s1[i]!=" "){
            res = res+s1[i];
        }
    }
    console.log(res);
}

remove(" Hello jash ");
