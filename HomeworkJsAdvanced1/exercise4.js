// Task 4
// Copy the odd elements from the given one into a new array. Print the new one in the console. const givenArr = [12, 45, 88, 1, 567, 3, 91];

let array = [34, 35, 12, 34, 67, 1, 2, 4, 5];
let newArray = [];

for(let i = 0; i<array.length; i++) {
    if(array[i] % 2 != 0){
        newArray.push(array[i]);
    }
}

console.log("Odd elements of the array are: ", newArray);
