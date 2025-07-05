// creating our first server 
import http from "http"
const Port = 8000
const server=http.createServer((req,res)=>{
   if(req.url=="/"){
    res.end("Welcome to home page")
   }
   else if(req.url == "/about"){
        res.end("welcome to about")
   }
   else if(req.url == "/contact"){
        res.end("welcome to contacts")
   }
   else{
    res.end("404 not found")
   }



})

server.listen(Port,()=>{
    console.log("server started")
})


// routing in node js

