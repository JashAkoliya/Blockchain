// 3. Input a String S with two words, and replace first word with second word
// and display the result -
// Input: “Hii Boy” Output: “Boy Hii”

let s = "hii boy";
rev(s);
function rev(s){
    let s1 = s.split(" ");
    if(s1.length!=2){
        console.log("Invalid input");
    }
    else{
        console.log(s1[1]+" "+s1[0]);
    }
}