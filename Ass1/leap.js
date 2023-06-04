let n = 1988;

if(n%4===0 && ((n%400===0) || (n%100!==0)))
{
    console.log("leap year")
}
else
{
    console.log("not leap year")
}