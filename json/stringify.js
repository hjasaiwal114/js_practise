const data = {name: "John", age: 30, city: "New York"};
const jsonString = JSON.stringify(data);

fetch('https://api.example.com/save', {
    method: 'POST',
    body: jsonString
})
    .then(response => {
        // handle server resposne
    })
    .catch(error => {
        console.error(error);
    })