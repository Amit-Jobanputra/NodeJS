const http = require('http');
const server = http.createServer((req,res)=>{
    console.log(`${req.method} ${req.url}`);
    if(req.method==="POST" && req.url==='/echo'){
        let body='';
        req.on('data',chunk=>{
            body +=chunk.toString();
        });
        req.on('end',()=>{
            try{
                const parsed=JSON.parse(body);
                const response = {
                    echo:parsed.message
                };
                res.writeHead(200,{'content-type': 'application/json'});
                res.end(JSON.stringify(response));
        }
        catch(err){
            res.writeHead(400,{'content-type':'application/json'});
            res.end(JSON.stringify({error:'Invalid JSON'}));
        }
    
    });
    }
    else{
        res.writeHead(400,{'content-type':'text/plain'});
        res.end('404 Not Found');
    }
});

server.listen(3000,()=>{
    console.log("Server is Running At http://localhost:3000");
    
})