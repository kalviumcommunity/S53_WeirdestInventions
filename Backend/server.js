const express = require('express')
const app = express()

const mongoose = require("mongoose");
require("dotenv").config()

async function main(){
    await mongoose.connect(process.env.MONGO_KEY)
}

console.log(process.env.MONGO_KEY);


app.get('/ping',(req,res)=>{
    res.send("pong")
})
app.get('/',(req,res)=>{
    main()
.then(()=>{
    res.send("Database Connected Successfully!");
})
.catch((err)=>{
    res.send(err);
})
})

app.listen(3000,()=>{
    console.log("the server is running on port 3000");
})

