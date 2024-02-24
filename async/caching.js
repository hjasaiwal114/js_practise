const cache = {};

function fetchData(url) {
    if (cache[url]) {
        return cache[url];
    }

    const promise = new Promise((resolve, reject) => {

        setTimeout(() => {
            const data = { /* ... */ };
            cache[url] = Promise.resolve(data);
            resolve(data);
        }, 1000);
    });

    cache[url] = promise;
    return promise;
}