fetch('https://api.example.com/data')
    .then(response => response.json())
    .then(data => {
        const paredData = JSON.parse(data);
    })
    .catch(error => {
        console.log(error);
    });
    