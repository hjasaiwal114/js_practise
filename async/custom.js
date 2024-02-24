fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => {
        // ...
    })
    .catch(error => {
        console.error(error);
    });