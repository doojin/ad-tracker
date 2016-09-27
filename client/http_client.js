let request = require('request');

function get(url) {
    return new Promise(doGetRequest(url));
}

function doGetRequest(url) {
    return (resolve, reject) => request.get(url, buildResponseCallback(resolve, reject));
}

function buildResponseCallback(resolve, reject) {
    return (error, response, body) => error ? reject(error) : resolve(body);

}

module.exports = { get };