const http = require('http');
console.log("Hey")
const server = http.createServer((req,res)=>{
   if(req.url === '/'){
    res.end("Home Page")
   } 
   if(req.url === '/about'){
    res.end("About Page")
   } 
   if(req.url === '/cart'){
    res.end("Cart Page is awesome")
   } 
    
})

server.listen(3000,()=>{
    console.log("Server Running on port 3000");
    
})

// console.log("HTTP Object",http);

