const http = require('http');

const server = http.createServer((req, res) => {
    const url = req.url;
    if(url==='/'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('This is Home Page\n');
    }
    else if(url==='/about'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('This is About Page\n');
    }
    else if(url==='/contact'){
        res.writeHead(200, {'Content-Type': 'text/plain'});
        res.end('This is Contact Page\n');
    }
    else{
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('404 Not Found\n');
    }
});

server.listen(3000,()=>{
    console.log("Server is running on http://localhost:3000");
});