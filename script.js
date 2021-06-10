//operators in Js
let x = 40;
let y = 20;
let z="40";
var add = x+y;
console.log('add result:' + add)
var sub = x-y;
console.log('sub result:' + sub)
var mul = x*y;
console.log('mul result:' + mul)
var modulo = x/y;
console.log('modulo result:' + modulo)
var div = x%y;
console.log('div result:' + div)
var power = x**y;
console.log('exponential result:' + power)
console.log('ternary operator' + x>y?x:y)
console.log('equalto:' + (x == z))
console.log('strict equalto:' + (x===y))
console.log('notequalto:' + (5!=5) )
console.log('postincrement:' + x++);
console.log('preincrement:' + (++x))
console.log('predecrement:' + (--x))
console.log('postdecrement:' + (x--))
//To find odd or even number
   var num =10;

    if ( num % 2 == 0) {
         console.log(num + ' is an Even number');
    }else{
         console.log(num + ' is an Odd number');
    }

//to find type of var
a="hi"
b=10
c=true
console.log('Datatype of given input is:'+ typeof(a));
console.log('Datatype of given input is:'+ typeof(b));
console.log('Datatype of given input is:'+ typeof(c));

//To find user age and also <,>= ,logical and,or operators example
var age=20;

if (age<3)
{
    console.log("The person is Infant");
}
else if(age>3 && age<12)
{
    console.log("The person is Child");
}
else if(age>12 && age<=19)
{
    console.log("The person is Teen");
}
else if(age>19 && age<40)
{
    console.log("The person is adult");
}
else
{
    console.log("The person is old")
}