// Task 5
// Delete all elements of the array except the numbers

let array = [2, "one", 3, "four", 5, "six", 7, "eight", 9, "ten"];
let numberArray = [];

for(let i = 0; i<array.length; i++){
    if(typeof array[i] === "number"){
        numberArray.push(array[i]);
    }
}

console.log("The numbers in the array are: ", numberArray);