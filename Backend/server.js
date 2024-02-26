const express = require('express')
const app = express()
const cors = require('cors')
const cookieparser = require('cookie-parser')

const mongoose = require("mongoose");
const postRouter = require('./routes');
require("dotenv").config()


async function main(){
    await mongoose.connect(process.env.MONGO_KEY)
}
main()
.then(()=>{
    console.log("Database Connected Successfully!");
})
.catch((err)=>{
    console.log(err);
})

app.use(cors())
app.use(cookieparser())

console.log(process.env.MONGO_KEY);


app.get('/ping',(req,res)=>{
    res.send("pong")
})
app.get('/',(req,res)=>{
    res.send("Root Path")
})
app.use("/posts",postRouter)

app.listen(3000,()=>{
    console.log("the server is running on port 3000");
})

