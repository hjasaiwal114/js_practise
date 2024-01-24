function fetchDataWithTimeout(url, timeout) {
    const controller = new AbortController();
    const { signal } = controller;

    const timeoutId = setTimeout(() => {
        controller.abort();
    }, timeout);

    return fetch(url, { signal })
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        })
        .catch(error => {
            if (error.name === 'AboortError') {
                throw new Error('Request time out. ');
            } else {
                throw error;
            }
        });

}

const url = 'sdkjb.com';
const timeoutMs = 5000;

console.log("Timeout milliseconfs: " + timeoutMs)

fetchDataWithTimeout(url, timeoutMs)
    .then(data => {
        console.log('Data', data);
    })
    .catch(error => {
        console.log('Error:', error.message);
    });