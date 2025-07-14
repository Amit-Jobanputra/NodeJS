const http = require('http');

const server = http.createServer((req, res) => {
    if(req.method ==='POST'&& req.url === '/api/users'){
        let body ='';
        req.on('data',chunk=>{
            body+=chunk.toString();
        });
        req.on('end',()=>{
            const data = JSON.parse(body);
            console.log('Received data:', data);
            res.writeHead(200, {'Content-Type': 'application/json'});
            res.end(JSON.stringify({ message: 'User data received successfully', user :data}));
        });
    }else{ 
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('404 Not Found\n');
    }
});

server.listen(3000,()=>{
    console.log('Server is running at http://localhost:3000');
});