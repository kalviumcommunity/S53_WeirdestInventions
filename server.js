const express = require('express')
const app = express()

app.get('/ping',(req,res)=>{
    res.send("pong")
})
app.get('/',(req,res)=>{
    res.send("Home")
})

app.listen(3000,()=>{
    console.log("the server is running on port 3000");
})

