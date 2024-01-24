function downloadContent(url) {
    const promise = urls.map(url => {
        return new Promise((resolve, reject) => {
            fetch(url)
                .then(response => {
                    if (!Response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }
                    return response.text();
                })
                .then(data => resolve(data))
                .catch(error => resolve(error));
        });
    });
    return Promise.all(promise) ;
}

const urls = [
    'https://jsonplaceholder.typicode.com/posts/1',
    'https://jsonplaceholder.typicode.com/posts/2',
    'https://jsonplaceholder.typicode.com/posts/3'
  ];

downloadContent(urls)
  .then(contents => {
    console.log('Downloaded contents:', contents);
  })
  .catch(error => {
    console.log('Error:', error.message);
  });
  