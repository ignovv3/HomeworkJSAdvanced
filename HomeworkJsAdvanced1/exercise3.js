// Task 3
// Change the character (-) of the members of the array let numArr = [4, -9, -98, -1, 444, 3, -555];

let array = [3, 5, -2, 45, -12, 491, -6, -99];

for(let i = 0; i<array.length; i++){
    array[i] = Number(array[i].toString().replace("-", ""));
}

console.log("New array with positive numbers: ", array);