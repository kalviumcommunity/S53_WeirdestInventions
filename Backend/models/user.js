const bcrypt = require('bcrypt');
const mongoose = require("mongoose");

const UserSchema = mongoose.Schema({
    fullname : {
        type:String,
        required: true
    },
    email :{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
        minlength:8
    }
})


UserSchema.methods.comparePassword = async function(candidatePassword) {
  try {
    return await bcrypt.compare(candidatePassword, this.password);
  } catch (error) {
    throw new Error(error);
  }
};


const User = mongoose.model("User",UserSchema );

module.exports = User;