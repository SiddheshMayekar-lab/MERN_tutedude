// Function that returns a Promise
function divideNumbers(a, b) {
    return new Promise((resolve, reject) => {

        if (b === 0) {
            reject("Error: Division by zero is not allowed.");
        } else {
            resolve(a / b);
        }

    });
}

// Test cases
divideNumbers(10, 2)
    .then(result => console.log("10 / 2 =", result))
    .catch(error => console.log(error));

divideNumbers(10, 0)
    .then(result => console.log("10 / 0 =", result))
    .catch(error => console.log(error));

divideNumbers(25, 5)
    .then(result => console.log("25 / 5 =", result))
    .catch(error => console.log(error));

divideNumbers(8, 4)
    .then(result => console.log("8 / 4 =", result))
    .catch(error => console.log(error));

divideNumbers(7, 0)
    .then(result => console.log("7 / 0 =", result))
    .catch(error => console.log(error));

