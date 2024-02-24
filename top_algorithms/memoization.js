function memoize(func) {
    const cache = {};

    return function(...args) {
        const key = JSON.stringify(args);

        if (cache[key]) {
            console.log('Fetching result from cache..');
            return cache[key];
        }

        console.log('Executing function...');
        const result = func(...args);
        cache[key] = result;
        return result;
    }
}

function fibonacci(n) {
    if (n <= 1) {
        return n;
    }

    return fibonacci(n-1) + fibonacci(n-2);
}

const memoizedFibonacci = memoize(fibonacci);
console.log(memoizedFibonacci(5));
console.log(memoizedFibonacci(5));