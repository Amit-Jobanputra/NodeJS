const http = require('http');
const users =[
    { id: 1, name: 'Amit' },
    { id: 2, name: 'Rohan' },
    { id: 3, name: 'Dev' }
];

const server = http.createServer((req,res)=>{
    if(req.url === '/api/users'){
        res.writeHead(200,{'Content-Type': 'application/json'});
        res.end(JSON.stringify(users));
    }
    else{
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('404 Not Found\n');
    }
});

server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});