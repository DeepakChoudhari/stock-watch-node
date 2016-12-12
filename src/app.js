'use strict';

const http = require('http');
const StockQuoteService = require('./stockQuoteService');
var stockQuoteService = new StockQuoteService();
stockQuoteService.lookupSymbol('Tom');
const port = 7000;
const requestListener = (req, res) => {
    res.statusCode = 200;
    let date = new Date().toTimeString();
    res.write(date);
    res.end();
};

/*
const server = http.createServer(requestListener);
server.listen(port);
*/

console.log(`Server listening at http://localhost:${port}/`);