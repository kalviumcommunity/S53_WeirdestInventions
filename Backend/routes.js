const mongoose = require('mongoose')
const express = require('express')
const Joi = require('joi') // Import Joi for validation
const app = express()
const Invention = require('./models/inventions')
const User = require('./models/user')
require("dotenv").config()
const postRouter = express.Router()
var jwt = require("jsonwebtoken");


// Define Joi schema for validation
const postValidationSchema = Joi.object({
  // Define your validation rules here
  // Example: 
  inventionName: Joi.string().min(5).required(),
  descriptionOfInvention: Joi.string().required(),
  imgUrl: Joi.string().uri().required(), // Require a valid URL for image
  // Add more properties as needed
  email: Joi.string().required()
});

const signupValidationSchema = Joi.object({
    fullname: Joi.string().min(5).required(),
    email: Joi.string().email().required(),
    password: Joi.string().min(8).required()
  });

//   const jwtVerify = (req, res, next) => {
//     try {
//       console.log(req.headers);
//       let { authorization } = req.headers;
//       let result = jwt.verify(authorization, process.env.JWT_PASS);
//       console.log(result.username);
//       next();
//     } catch (err) {
//       throw new ExpressError(
//         403,
//         "Not authorised to access this route without correct auth token"
//       );
//     }
//   };


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

postRouter.get("/data", async (req,res)=>{
    let resData;
    await Invention.find().then((data)=>{
        resData = data
    })
    res.send(resData)
})

postRouter.get("/data/:id",async (req,res) => {
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

postRouter.post("/addpost", validatePost,async (req,res)=>{ 
    let post = new Invention(req.body)
    await post.save().then((result)=>{
        res.send("Added Successfully 😇")
    }).catch((err)=>{
        res.status(500).send(err)
    })
})

postRouter.put("/update/:id", validatePost, async (req, res) => { 
    try {
        const  id  = req.params.id;
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

postRouter.delete("/delete", async (req,res)=>{
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
            const token = jwt.sign({ result: result._id }, `${process.env.SECURITY_KEY}`, { expiresIn: '7d' });

            // Set the JWT token as a cookie
            res.cookie('authToken', token, { httpOnly: true, maxAge: 7 * 24 * 60 * 60 * 1000, path: '/' });
            
            res.status(200).json({message:'Logged in',token});

        }
      }
    }
  );

 postRouter.get("/users/data",async (req, res)=> {

    try {
      const data = await User.find();
      res.json(data);
    } catch (error) {
      console.error('Error reading data from the database:', error);
      res.status(500).json({ error: 'Failed to retrieve data from the database' });
    }
  
  });

  postRouter.get("/api/:email",async (req, res) => {
    try {
      const email = req.params.email
      const record = await Invention.find({ email });
      if (!record) {
        throw new Error('Record not found');
      }
  
      res.json({ record });
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve the record from the database' });
    }
  });

module.exports = postRouter


