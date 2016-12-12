'use strict';

const   http = require('http'),
        queryStringParser = require('querystring'),
        port = 7000,
        StockQuoteService = require('./stockQuoteService'),
        stockQuoteSvc = new StockQuoteService();

const requestListener = (req, res) => {
    let queryString = queryStringParser.parse(req.url.split('?')[1]);
    let stockSymbol = queryString.q;

    stockQuoteSvc.lookupSymbol(stockSymbol, function(data){
        res.write(data);
        res.end();
    });
    
    /*
    res.statusCode = 200;
    let date = new Date().toTimeString();
    res.write(date);
    res.end();
    */
};

const server = http.createServer(requestListener);
server.listen(port);
console.log(`Server listening at http://localhost:${port}/`);