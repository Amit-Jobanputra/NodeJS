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

// fs.readFile('one.txt','utf8',(err,data)=>{
//     if(err){
//         console.log("Error While Reading File:",err);
//         return;
//     }
//     console.log("File Content:", data);
    
// });

// fs.appendFile('one.txt','\nToday i learent OS and FS module', (err) => {
//     if(err){
//         console.log("Error While Appending File:", err);    
//         return;
//     }    
//     console.log("File Appended Successfully");
    
// });

fs.unlink('one.txt',(err)=>{
    if(err){
        console.log("Error While Deleting File:", err);
        return
    }
    console.log("File Deleted Successfully");  
});