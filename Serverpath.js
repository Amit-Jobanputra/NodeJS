const http = require('http');
const fs = require('fs');
const path = require('path');

const server = http.createServer((req,res)=>{
    if(req.url === '/'){
        const filePath = path.join(__dirname ,'index.html');
        fs.readFile(filePath, 'utf8', (err, data) => {
            if(err){
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('500 Internal Server Error\n');
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                res.end(data);
            }
        }
        );
    }
    else{
        res.writeHead(404, {'Content-Type': 'text/plain'});
        res.end('404 Not Found\n');
    }

});

server.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});