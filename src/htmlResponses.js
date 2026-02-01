const fs = require('fs');

// const index = fs.readFileSync(`${__dirname}/../client/client.html`);

const getIndex = (request, response) => {
    getPage(request, response, '/../client/client.html');
};

const getPage2 = (request, response) => {
    getPage(request, response, '/../client/client2.html');
};

const getPage3 = (request, response) => {
    getPage(request, response, '/../client/client3.html');
};

const getPage = (request, response, filePath) => {
    const index = fs.readFileSync(`${__dirname}${filePath}`);
    response.writeHead(200, {'Content-Type': 'text/html'});
    response.write(index);
    response.end();
};

module.exports = {
    getIndex,
    getPage2,
    getPage3,

};
