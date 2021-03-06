/*
    https://nodejs.org/dist/latest-v4.x/docs/api/http.html#http_http_request_options_callback
*/
'use strict';

const http = require('http');
const options = {
    hostname: 'dev.markitondemand.com',
    path: '/MODApis/Api/v2/Lookup/json?input=',
    method: 'GET'
};

class stockQuoteService {

    lookupSymbol(symbol, callback) {
        options.path = options.path + symbol;
        var request = http.request(options, function(response) {
            debugger;
            response.setEncoding('utf8');
            response.on('data', function(chunk) {
                console.log(`Response body: ${chunk}`);
                callback(chunk);
            });
        });

        request.on('error', (error) => {
            debugger;
            console.error(`Error requesting data: ${error}`);
        });
        request.end();
        
        console.log(`From within lookupSymbol: ${http}`);
    }
}

module.exports = stockQuoteService;