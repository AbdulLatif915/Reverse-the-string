
const inputString = "Superman";
const reversedString = inputString.split('').reverse().join('');
console.log("Reversed String:", reversedString);


const isPalindrome = inputString.toLowerCase() === inputString.split('').reverse().join('').toLowerCase();
console.log("Is Palindrome:", isPalindrome);


const userInput = prompt("Enter something:");
console.log("Type of Input:", typeof userInput);


if (!isNaN(userInput) && Number(userInput) === 88) {
    console.log("Type: Number");
} else {
    console.log("Type: Not a Number or not equal to 88");
}


const inputArray = [1, 2, 3, 5, 6, 7];
let isConsistent = true;

for (let i = 0; i < inputArray.length - 1; i++) {
    if (inputArray[i + 1] - inputArray[i] !== 1) {
        isConsistent = false;
        break;
    }
}

console.log("Is Array Consistent:", isConsistent)