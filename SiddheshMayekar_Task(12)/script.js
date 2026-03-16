let P = 40000;   // principal
let r = 0.7 ;   // rate of interest
let n = 1;       // number of times compounded per year
let t = 3;       // time in years

let A = P * (1 + (r/n)) ** n*t;

console.log("The compound interest after 3 years is:", A);