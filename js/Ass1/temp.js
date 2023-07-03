function ctoF(celsius)
{
    c = celsius;
    f = (c*9+32*5)/5;
    console.log(c+'\xB0C is '+f+'\xB0F')
}

function Ftoc(fahrenheit)
{
    f = fahrenheit;
    c = (5*(f-32))/9
    console.log(f+'\xB0F is' +c+'\xB0C' )
}
ctoF(60)
Ftoc(45)