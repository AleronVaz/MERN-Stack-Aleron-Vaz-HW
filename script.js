//Day 7 HW - Aleron Vaz
const num = 20 

//Checking if the number is even or odd
if (num % 2 === 0 ){
    console.log("The number is even")
} else {
    console.log("The number is odd")
}

//Printing numbers from 1 to 100
for (let i = 1; i <= 100; i++) {
    console.log(i);
}

//finding largest out of 3 numbers
const a = 10;
const b = 20;
const c = 15;
let largest;

if (a > b && a > c) {
    largest = a;
}
else if (b > a && b > c) {
    largest = b;
}
else {
    largest = c;
}
console.log("The largest number is: " + largest);