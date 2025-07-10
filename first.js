// const os = require('os');

// console.log("Platform:",os.platform());
// console.log("Free Memory:", os.freemem());
const fs = require('fs');

// fs.writeFile('one.txt','Started Learning Node.js', (err) => {
//     if(err){
//         console.log("Error While Writing File:",err);    
//         return;
//     }
//     else{
//         console.log("File Written Successfully");
        
//     }
// });

fs.readFile('one.txt','utf8',(err,data)=>{
    if(err){
        console.log("Error While Reading File:",err);
        return;
    }
    console.log("File Content:", data);
    
});