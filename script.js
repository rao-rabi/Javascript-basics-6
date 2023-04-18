// 1-Calculate the Square of a Number.

let num = parseInt(prompt("Enter a number: "))
function numSquare(num) {
    return (num * num)
}
console.log(`The square of ${num} is: `, numSquare(num))

// 2-Calculate Square-root of a Number.

let num1 = parseInt(prompt("Enter a number"));
function numSqaureroot(num1) {
    return (Math.sqrt(num1))
}
console.log(`The squareroot of ${num1} is: `, numSqaureroot(num1));

// 3-copy-all-elements-from-an-array-to-another-array.

let arr = [2, 4, 5, 3, 6];
let copiedArr = arr.slice();
console.log("The Copied array is:", copiedArr);

// 4-maximum-and-minimum-between-two-numbers-using-functions, if you have not been proficient so you can do it simply in your own way.


let a = parseInt(prompt("Enter 1st number: "))
let b = parseInt(prompt("Enter 2nd number: "))
compare = (a, b) => {
    a < b ? console.log(`${a} is minimum number while ${b} is maximum`) : a > b ? console.log(`${a} is maximum number while ${b} is minimum`) : a = b ? console.log(`Both are equal`) : console.log(`Invalid Input`);
}
console.log(compare(a, b));

// 5-count-total-number-of-negative-elements-in-an-array.

let arrCount = [1, 4, -5, -8, -56, 25, 67, -8];
let count = 0;
for (let i = 0; i < arrCount.length; i++) {
    if (arrCount[i] < 0) {
        count++;
    }
}
console.log(`Total negative number in array is: ${count}`);

// 6-sum of all even numbers between 1 to n, n is taken from the user.

let n = parseInt(prompt("Enter number till you want to add even numbers: "));
let sum = 0;
evenSum = () => {
    for (let i = 1; i <= n; i++) {
        if (i % 2 == 0) {
            sum = sum += i;
        }
    }
    console.log(`The Sum of even numbers till ${n} is : ${sum}`);
}
console.log(evenSum());

// 7-count total number of duplicate elements in an array.

let arrDup = [2, 3, 5, 7, 4, 8, 5, 3, 2, 5];
let add = 0;
for (let i = 0; i < arrDup.length; i++) {
    for (let j = i; j < arrDup.length; j++) {
        if (arrDup[i] == arrDup[i + j]) {
            add++;
        }
    }
}
console.log(count);

