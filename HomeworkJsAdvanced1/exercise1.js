// Task 1
// Write JS program which calculate sum 1+2+3+...n, where n is inputted by keyboard.

function sumOfInput(n){
    let sum = 0;
    n = Number(prompt("Enter a number: "));

    while(isNaN(n)) {
        n = Number(prompt("Wrong input. Please enter a number: "));
    }

    for(let i = 0; i <= n; i++) {
        sum += i;
    }
    return sum;
}

console.log("The sum of the numbers is: ", sumOfInput());
