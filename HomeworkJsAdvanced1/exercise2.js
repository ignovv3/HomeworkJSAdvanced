// Task 2
// Print all digits of a given number


let number = Number(prompt("Enter a number to be split: "));
let array = [];

while(isNaN(number)) {
    number = Number(prompt("Wrong input. Please enter a number."));
}

let numbers = number.toString().split('');
let realNumbers = numbers.map(Number)
console.log(realNumbers);