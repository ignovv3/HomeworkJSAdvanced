/* Make 3 functions:
    Function that takes a number through a parameter and returns how many digits that number has
    Function that takes a number through a parameter and returns if its even or odd
    Function that takes a number through a parameter and returns if its positive or negative
Create a function that takes a number through a parameter and calls all three functions for the number that was passed. It should show the results in the console.
Ex:
Code: getNumberStats(-25); Console: 2 Digits, Odd, Negative */

function countDigits(number) {
    if(number < 0) {
        return number.toString().length -1;
    }

    return number.toString().length;
}

// Function that takes a number through a parameter and returns if its even or odd
function isEven(number) {
    if(number % 2 === 0){
        return "Even";
    }
    
    return "Odd";
}

// Function that takes a number through a parameter and returns if its positive or negative

function isPositive(number) {
    return number >=0 ? "Positive" : "Negative";
}

// Create a function that takes a number through a parameter and calls all three functions for the number that was passed. It should show the results in the console.
function numberStats(number) {
    const digits = countDigits(number);
    const parity = isEven(number);
    const sign = isPositive(number);
    console.log(`${digits} ${parity} ${sign}`);
}

numberStats(-222);