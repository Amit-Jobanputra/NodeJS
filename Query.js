const http = require('http');
const url = require('url');
const querystring = require('querystring');

const server = http.createServer((req,res)=>{
    const parseurl = url.parse(req.url);
    const pathname = parseurl.pathname;
    const query = querystring.parse(parseurl.query);
    
    if(pathname === '/greet'){
        const name = query.name || 'Guest';
        res.writeHead(200,{'Content-Type':'text/plain'});
        res.end(`Hello ${name}\n`);
    }
    else{
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('404 Not Found\n');
    }
    
});

server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});