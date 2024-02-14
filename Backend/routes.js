const mongoose = require('mongoose')
const express = require('express')
const app = express()
const Invention = require('./models/inventions')
require("dotenv").config()
const postRouter = express.Router()

postRouter.use(express.json())
main()
  .then(() => {
    console.log("Connection Successful!");
  })
  .catch((err) => console.log(err));
  
async function main(){
    await mongoose.connect(process.env.MONGO_KEY)
}

postRouter.get("/", async (req,res)=>{
    let resData
    await Invention.find().then( (data)=>{
        resData = data
    })
    res.send(resData)
})

postRouter.post("/", async (req,res)=>{
    let post = new Invention(req.body)
    await post.save().then((result)=>{
        res.send("Added Successfully 😇")
    }).catch((err)=>{
        res.status(500).send(err)
    })
})

postRouter.put("/:inventionname", async (req, res) => {
    try {
        let { inventionname } = req.params;
        let newData = req.body;

        let result = await Invention.findOneAndUpdate({ inventionName: inventionname }, newData);

        if (result === null || result === undefined) {
            res.status(404).send("invention not found");
        } else {
            res.send("Updated Successfully😎");
        }
    } catch (err) {
        res.status(500).send(err.message);
    }
});


postRouter.delete("/", async (req,res)=>{
    let deleteInvention = req.body.inventionName
    // console.log(deleteInvention)
    try{
        let result = await Invention.deleteOne({inventionName:deleteInvention})
        // console.log(result)
        if (result.deletedCount==0){
            res.status(404).send("User not found..!")
        }else{
            res.send("Invention Deleted")
        }
    }catch{
        res.status(500).send(err.message)
    }
})

// const port = 3000
// app.listen(port,()=>{
//     console.log(`App is Listening on PORT : ${port}`)
// })

module.exports = postRouter