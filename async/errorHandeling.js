async function fetchData() {
    try {
        const response = await fetch('http://api.example.com/data');
        const data = await response.json();
        console.log(data);
    } catch (error) {
        console.log('An error occured:', error);
    }
}