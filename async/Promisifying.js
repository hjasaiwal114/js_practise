function  getUserData(userId, callback) {
    setTimeout(() => {
        const userData = { id: userId, name: "John Doe"};
        callback(null, userData);
    }, 1000);
}

function getUserDataAsyc(userId) {
    return new Promise((resolve, reject) => {
        getUserData(userId, (error, data) => {
            if (error) {
                reject(error);
            } else {
                resolve(data);
            }
        });
    });
}