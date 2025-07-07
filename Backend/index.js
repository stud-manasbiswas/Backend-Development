import express from "express"
import cors from "cors"
let manas = express()
manas.use(cors({
    origin: "http://localhost:5173"
}))
manas.use(express.json())
const port = 8000;
manas.get("/",(req,res)=>{
    res.json({name:"manas",age:"21"})
})
manas.post("/",(req,res)=>{
    console.log(req.body)
    res.send({success :true})
})
manas.listen(port,()=>{
    console.log("server is started")
})