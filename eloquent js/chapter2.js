/*
Minimum

The previous chapter introduced the standard function Math.min that returns its smallest argument. We can build something like that now. Write a function min that takes two arguments and returns their minimum.

// Your code here.

console.log(min(0, 10));
// → 0
console.log(min(0, -10));
// → -10
*/

let min = function(num1, num2) {
    if (num1<num2) {
        return num1;
    } else {
        return num2;
    }
};
console.log(min(0, 10));
console.log(min(0, -10));

/*
Recursion

We’ve seen that % (the remainder operator) can be used to test whether a number is even or odd by using % 2 to see whether it’s divisible by two. Here’s another way to define whether a positive whole number is even or odd:
- Zero is even.
- One is odd.
- For any other number N, its evenness is the same as N - 2.
Define a recursive function isEven corresponding to this description. The function should accept a single parameter (a positive, whole number) and return a Boolean.

Test it on 50 and 75. See how it behaves on -1. Why? Can you think of a way to fix this?
*/

function isEven(num) {
    if (num < 0) {
        return "the number is negative!";
    }
    if (num === 1) {
        return false;
    }
    if (num === 0) {
        return true;
    }
    return isEven(num-2);
};
console.log(isEven(50));
console.log(isEven(75));
console.log(isEven(-1));


let countChar = (string, char = "B") => {
    let count = 0;
    for (let i=0; i<string.length; i++) {
        if (string[i] === char) {
           count++;
        }
        }
    return count;
};
console.log(countChar("kakkerlak", "k"));

let countBs = (string) => {return countChar(string);} 

console.log(countBs("BBC"));
