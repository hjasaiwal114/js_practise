function factorial(num) {
    if (num === 0 || num === 1) {
        return 1;
    } else {
        return num * factorial(num - 1);
    }
}

const num = 5;
const factorialNum = factorial(num);

console.log(factorialNum);