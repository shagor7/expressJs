const http =  require('http');
const { resourceUsage } = require('process');
const server = http.createServer((req, res) => {
    if(req.url === '/') {
        res.write('This the homepage!');
        resourceUsage.end();
    } else if(req.url === '/about' && req.method === 'GET') {
        res.write('This is about page');
        res.end();
    } else {
        res.write('not found');
        res.end();
    }
});

server.listen(3000);

console.log('listening on port 3000');