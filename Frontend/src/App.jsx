import React from 'react'
import axios from 'axios'
import { useState } from 'react'

function App() {
  let [username,setusername]=useState("")
  let [age,setsetage]=useState("")
  let [city,setcity]=useState("")
  async function getRes(){
  //  const res = await fetch("http://localhost:8000/")
  // //  let data = res.json();
  //  data
  //  .then((e)=>{
  //   console.log(e)
  //  })
  //  .catch((e)=>{
  //   console.log(e)
  //  })
  axios.post("http://localhost:8000/",{
    username,
    age,
    city
  }).then((e)=>{
    console.log(e.data.name)
   })
   .catch((e)=>{
    console.log(e)
   })

  }

  return (
    <div>
      <input type="text" placeholder='username' value={username} onChange={(e)=>setusername(e.target.value)} />
      <input type="text" placeholder='age'  value={age} onChange={(e)=>setsetage(e.target.value)} />
      <input type="text" placeholder='city'  value={city} onChange={(e)=>setcity(e.target.value)} />
      <button onClick={()=>getRes()}>Send</button>
    </div>
  )
}

export default App
