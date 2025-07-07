import express from "express"
const app = express()
const port = 8000;

let users = [
  {
    "id": 1,
    "name": "Ayush Sharma",
    "age": 24,
    "position": "Software Engineer"
  },
  {
    "id": 2,
    "name": "Manas Biswas",
    "age": 22,
    "position": "Frontend Developer"
  },
  {
    "id": 3,
    "name": "Ritika Singh",
    "age": 25,
    "position": "Backend Developer"
  },
  {
    "id": 4,
    "name": "Rohan Mehra",
    "age": 23,
    "position": "UI/UX Designer"
  },
  {
    "id": 5,
    "name": "Sneha Patel",
    "age": 26,
    "position": "Project Manager"
  }
]


app.get("/user",(req,res)=>{
     res.json(users)
})

// bhai samaja : likh or variable ban ja 😂

app.get("/user/:id",(req,res)=>{
     let id = req.params.id
     let newuser=users.find((user)=>(user.id == id))
     if(!newuser){
          return res.send("404 Not Found")
     }
     res.json(newuser)
})


app.use(express.json()) // middlewere

app.get("/",(req,res)=>{
     res.json({name:"ayush" , class:"Btech 3rd year"})
})
app.post("/",(req,res)=>{
    let body = req.body
     console.log(body)

     res.send("hello")
    

     
})
app.get("/about",(req,res)=>{
     res.send("hello world, welcome to our about nad experience our services")
})
app.get("/contact",(req,res)=>{
     res.send("hello world, contact me and fall in love with developmennt")
})

// understanding params

app.get("/search",(req,res)=>{
    console.log( req.query)
     res.send("bhai abhi searching krenge ruk ja ")
})



// listening
app.listen(port,()=>{
     console.log(`server started at ${port}`)
})



























// // creating our first server 
// import http from "http"
// const Port = 8000
// const server=http.createServer((req,res)=>{
//    if(req.url=="/"){
//     res.end("Welcome to home page")
//    }
//    else if(req.url == "/about"){
//         res.end("welcome to about")
//    }
//    else if(req.url == "/contact"){
//         res.end("welcome to contacts")
//    }
//    else{
//     res.end("404 not found")
//    }



// })

// server.listen(Port,()=>{
//     console.log("server started")
// })


// // routing in node js

