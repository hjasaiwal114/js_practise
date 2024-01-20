var request  = require('request');
function requestWrapper(url, callback) {
    request.get(url, function (err, response) {
        if (err) {
            callback(err);
        } else {
            callback(null, response);
        }
    })
}