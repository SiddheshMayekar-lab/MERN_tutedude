const arr = [12, 45, 7, 23, 56, 89, 4, 11];

function findMax(array) {
    let max = array[0];
    for (let i = 1; i < array.length; i++) {
        if (array[i] > max) {
            max = array[i];
        }
    }
    return max;
}

const findSum = (array) => {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {
        sum = sum + array[i];
    }
    return sum;
};

const countOdd = function(array) {
    let count = 0;
    for (let i = 0; i < array.length; i++) {
        if (array[i] % 2 !== 0) {
            count++;
        }
    }
    return count;
};

console.log("Array:", arr);
console.log("Maximum number:", findMax(arr));
console.log("Sum of elements:", findSum(arr));
console.log("Count of odd numbers:", countOdd(arr));