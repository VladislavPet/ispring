var num1,num2;

function AddAChar(inChar)
{
if(document.calc.button.value == null || document.calc.button.value == "0")
         document.calc.button.value=inChar
    else
 document.calc.button.value +=inChar;
}

function Clear() 
{
document.calc.button.value="0";
}

function Answer() 
{
    document.calc.button.value= eval(document.calc.button.value)
}
function sin()
{
document.calc.button.value = Math.sin(document.calc.button.value); 
}
function cos()
{
document.calc.button.value = Math.cos(document.calc.button.value); 
}
function tan()
{
document.calc.button.value = Math.tan(document.calc.button.value); 
}
function pi() 
{
 document.calc.button.value = Math.PI ;
}
function acos() 
{
 document.calc.button.value = Math.acos(document.calc.button.value); 
}
function asin() 
{
 document.calc.button.value = Math.asin(document.calc.button.value); 
}
function atan() 
{
 document.calc.button.value = Math.atan(document.calc.button.value); 
}
function rand()
{
   document.calc.button.value = Math.random(document.calc.button.value); 
}
function Euler()
{
	document.calc.button.value= Math.E ; 
}
function sqrt() 
{
	document.calc.button.value= Math.sqrt(document.calc.button.value); 
}
function natLog() 
{
	document.calc.button.value= Math.log(document.calc.button.value); 
}
function Log() 
{
        document.calc.button.value=( 1/Math.LN10 ) * Math.log(document.calc.button.value); 
}
function percent() 
{
        document.calc.button.value=(document.calc.button.value)/100 ;
}
function Round() 
{
        document.calc.button.value=Math.round(document.calc.button.value); 
}
function square() 
{ 
num1=document.calc.button.value
num2=document.calc.button.value
var inChar=num1 * num2 
document.calc.button.value=inChar
}
function negative()
{
document.calc.button.value =  0 - document.calc.button.value;
}