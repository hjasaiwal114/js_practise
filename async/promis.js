const fetchUser = () => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const user = { name: 'John Doe', age: 30};
            resolve(user);
        }, 1000);
    });
};

const fetchPosts = (user) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const posts = ['Post 1', 'Post 2', 'Post 3'];
            resolve({ user, posts });
        }, 1000);
    });
};

fetchUser()
    .then((user) => fetchPosts(user))
    .then((data) => {
        console.log('User:', data.user);
        console.log('Posts:', data.posts);
    })
    .catch((error) => {
        console.error('Error:', error);
    });