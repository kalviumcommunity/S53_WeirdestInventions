const mongoose = require('mongoose')
const express = require('express')
const Joi = require('joi') // Import Joi for validation
const app = express()
const Invention = require('./models/inventions')
const User = require('./models/user')
require("dotenv").config()
const postRouter = express.Router()


// Define Joi schema for validation
const postValidationSchema = Joi.object({
  // Define your validation rules here
  // Example: 
  inventionName: Joi.string().min(5).required(),
  descriptionOfInvention: Joi.string().required(),
  imgUrl: Joi.string().uri().required() // Require a valid URL for image
  // Add more properties as needed
});

const signupValidationSchema = Joi.object({
    fullname: Joi.string().min(5).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required()
  });

postRouter.use(express.json())
main()
  .then(() => {
    console.log("Connection Successful!");
  })
  .catch((err) => console.log(err));
  
async function main(){
    await mongoose.connect(process.env.MONGO_KEY)
} 

const validateUser = (req, res, next) => {
    const { error } = signupValidationSchema.validate(req.body);
    if (error) {
      // Return a 400 error if validation fails
      return res.status(400).send(error.details[0].message);
    } else {
      next();
    }
}; 

const validatePost = (req, res, next) => {
    const { error } = postValidationSchema.validate(req.body);
    if (error) {
      // Return a 400 error if validation fails
      return res.status(400).send(error.details[0].message);
    } else {
      next();
    }
};

postRouter.get("/", async (req,res)=>{
    let resData;
    await Invention.find().then((data)=>{
        resData = data
    })
    res.send(resData)
})

postRouter.get("/:id",async (req,res) => {
    try {
        const { id } = req.params;
        const invention = await Invention.findById(id);

        if (!invention) {
            return res.status(404).send("Invention not found");
        }

        res.json(invention);
    } catch (error) {
        console.error(error);
        res.status(500).send("Server Error");
    }
});

postRouter.post("/", validatePost, async (req,res)=>{ 
    let post = new Invention(req.body)
    await post.save().then((result)=>{
        res.send("Added Successfully 😇")
    }).catch((err)=>{
        res.status(500).send(err)
    })
})

postRouter.put("/:id", validatePost, async (req, res) => { 
    try {
        const { id } = req.params;
        const newData = req.body;

        const result = await Invention.findByIdAndUpdate(id, newData);

        if (!result) {
            return res.status(404).send("Invention not found");
        }

        res.send("UPDATED");
    } catch (err) {
        console.error(err);
        res.status(500).send("Server Error");
    }
});

postRouter.delete("/", async (req,res)=>{
    let deleteInvention = req.body.inventionName
    try{
        let result = await Invention.deleteOne({inventionName:deleteInvention})
        if (result.deletedCount === 0){
            res.status(404).send("Data not found..!")
        } else {
            res.send("Invention Deleted")
        }
    } catch(err) {
        console.error(err);
        res.status(500).send(err.message)
    }
})

 postRouter.post("/signup" ,validateUser,async (req, res) => {
    const { fullname,email, password } = req.body;
  
    try {
      // Check if the username already exists
      const existingUser = await User.findOne({ email });
  
      if (existingUser) {
        return res.json({ message: 'email already exists' });
      }
      const newUser = new User({
        fullname,
        email,
        password,
      });
  
      await newUser.save();
  
      res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
      res.status(500).json({ message: 'Internal Server Error' });
    }
  })

 postRouter.post(
    "/login",
    async (req, res) => {
      let { email, password } = req.body;
      let result = await User.find({ email: email });
      if (result.length == 0) {
        throw new Error("User not found!");
      } else {
        let savedPassword = result[0].password;
        if (savedPassword != password) {
          throw new Error("Wrong Password");
        } else {
          res.send("LOGGED IN");
        }
      }
    }
  );

module.exports = postRouter

// const signupHandler = async (req, res) => {
//     const { username, password } = req.body;
  
//     try {
//       // Check if the username already exists
//       const existingUser = await User.findOne({ username });
  
//       if (existingUser) {
//         return res.json({ message: 'Username already exists' });
//       }
//       const newUser = new User({
//         username,
//         password,
//       });
  
//       await newUser.save();
  
//       res.status(201).json({ message: 'User registered successfully' });
//     } catch (error) {
//       res.status(500).json({ message: 'Internal Server Error' });
//     }
//   };