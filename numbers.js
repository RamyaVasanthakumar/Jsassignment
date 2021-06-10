//even numbers between 0 to 100
for (i=0;i<100;i++)
{
    if(i%2==0)
    {
        console.log(i)
    }
    
}



//find out prime numbers(need to ask this approach is correct or not)
let n=133;
if(n%2 == 0 || n%3==0 || n%5==0)
{
 console.log(n +"is not a prime numer")
}else
{
    console.log(n + "is a prime number")
} 




// to check num is prime or not
let num = -7;
let isPrime = true;

if (num === 1) {
    console.log("1 is not prime num");
}
else if (num > 1) {
    for (let i = 2; i < num-1; i++) {
        if (num % i == 0) {
            isPrime = false;
            break;
        }
    }
  if (isPrime) {
        console.log(num + "is prime number");
    } else {
        console.log(num + "is not prime number");
    }
}
//prime is positive.so to ignore -ve numbers
else {
    console.log("no. is not prime number");
}





//Amstrong number
const number = 407;
let digit = number.toString().length;
let sum = 0;

let a = number;
while (a > 0) {
    console.log(digit);
    let remainder = a % 10;
    //console.log("remainder is:" +remainder);
    sum += remainder ** digit;
    //console.log("sum is:" + sum);
    a = parseInt(a / 10);
    console.log("temp variable after parse:" + a);
}//while loop executes till condition becomes false.so  27+125+1=153

if (sum == number) {
    console.log(number + 'is an amstrong number');
}
else {
    console.log(number +' is not amstrong number');
}