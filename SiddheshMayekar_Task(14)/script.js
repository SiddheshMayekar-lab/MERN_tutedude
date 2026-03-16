let num = 153;
let sum = 0;
let digit;
let n = 10;

console.log("Number:", num);

// Sum of digits
let number = num;

while (number > 0) {
    digit = number % 10;
    sum = sum + digit;
    number = (number - digit) / 10;
}

console.log("Sum of digits:", sum);

// Table of n
console.log("Table of", n);
for (let i = 1; i <= 10; i++) {
    console.log(n + " x " + i + " = " + (n * i));
}

// Sum from 1 to n
let sumN = 0;
for (let i = 1; i <= n; i++) {
    sumN = sumN + i;
}
console.log("Sum from 1 to", n, ":", sumN);

// Armstrong check
let armstrongSum = 0;
let temporaryNumber = num;

while (temporaryNumber > 0) {
    digit = temporaryNumber % 10;
    armstrongSum = armstrongSum + digit * digit * digit;
    temporaryNumber = (temporaryNumber - digit) / 10;
}

if (armstrongSum === num) {
    console.log("Is it an Armstrong number? Yes");
} else {
    console.log("Is it an Armstrong number? No");
}

// Prime check
let isPrime = true;

if (num <= 1) {
    isPrime = false;
} else {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            isPrime = false;
            break;
        }
    }
}

if (isPrime) {
    console.log("Is it a prime number? Yes");
} else {
    console.log("Is it a prime number? No");
}

// Factors
console.log("Factors:");
for (let i = 1; i <= num; i++) {
    if (num % i === 0) {
        console.log(i);
    }
}