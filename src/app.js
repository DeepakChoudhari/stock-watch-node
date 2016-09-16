'use strict';

const http = require('http');
const port = 7000;
const requestListener = (req, res) => {
    res.statusCode = 200;
    let date = new Date().toTimeString();
    res.write(date);
    res.end();
};
const server = http.createServer(requestListener);
server.listen(port);

console.log(`Server listening at http://localhost:${port}/`);