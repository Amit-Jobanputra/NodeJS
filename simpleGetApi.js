const http = require("http");

const server = http.createServer((req,res)=>{
    console.log(`Received:- ${req.method} request for ${req.url} `);

    if(req.method==="GET" && req.url ==="/"){
        res.writeHead(200,{'content-type': 'text/plain'});
        res.end('Welcome to Node.js Server ');
    }
    else if (req.method==='GET'&& req.url==='/about'){
        res.writeHead(200,{'content-type': 'text/plain'});
        res.end('Welcome to Node.js About  ');
    }
    else{
        res.writeHead(404,{'content-type': 'text/plain'});
        res.end('Page Not Found');
    }
});

server.listen(3000,()=>{
    console.log("Server is running at http://localhost:3000");
    
})