var exec = require('cordova/exec');

exports.makeSimpleHttpRequest = function (arg0, success, error) {
    exec(success, error, 'HttpClient', 'makeSimpleHttpRequest', [arg0]);
};
