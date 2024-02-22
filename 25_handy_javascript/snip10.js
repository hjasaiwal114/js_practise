function fibonacci(num) {
    if (num <= 1) {
        return num;
    } else {
        return fibonacci(num - 1) + fibonacci(num - 2);
    }
}

const num = 6;
const fibonacciNum = fibonacci(num);

console.log(fibonacci);