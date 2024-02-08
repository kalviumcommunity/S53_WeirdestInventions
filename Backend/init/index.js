const mongoose = require("mongoose");
const Invention = require("../models/inventions");
require("dotenv").config()

async function main(){
    mongoose.connect(process.env.MONGO_KEY)
}

console.log(process.env.MONGO_KEY);

main()
.then(()=>{
    console.log("Database Connected Successfully!");
})
.catch((err)=>{
    console.log(err);
})

const inventions = [
    new Invention ({
        inventionName: "Pet Rock",
        yearOfInvention: 1975,
        nameOfInventor: "Gary Dahl",
        reactions: ["Confusion", "Amusement"],
        comments: "A rock as a pet? It's weirdly amusing!"
      }),
      new Invention({
        inventionName: "Baby Mop",
        yearOfInvention: 2012,
        nameOfInventor: "Laura Ryzner",
        reactions: ["Amusement", "Surprise"],
        comments: "Babies cleaning the floor while crawling, a unique idea!"
      }),
      new Invention({
        inventionName: "Hula Chair",
        yearOfInvention: 2008,
        nameOfInventor: "Turner Broadcasting",
        reactions: ["Laughter", "Disbelief"],
        comments: "Exercising with a hula hoop while sitting, really?"
      }),
      new Invention({
        inventionName: "Butter Stick",
        yearOfInvention: 2006,
        nameOfInventor: "Kristine Steuart",
        reactions: ["Raised Eyebrows", "Confusion"],
        comments: "Butter in a stick form, not exactly practical!"
      }),
      new Invention({
        inventionName: "Fork with an Umbrella",
        yearOfInvention: 1992,
        nameOfInventor: "Unknown",
        reactions: ["Bafflement", "Amusement"],
        comments: "An umbrella attached to a fork, for rainy bites!"
      }),
      new Invention({
        inventionName: "Pizza Scissors",
        yearOfInvention: 2004,
        nameOfInventor: "Kikkerland Design",
        reactions: ["Practical Jokes", "Surprise"],
        comments: "Scissors specially designed for cutting pizza slices!"
      }),
      new Invention({
        inventionName: "Doggles (Dog Goggles)",
        yearOfInvention: 1997,
        nameOfInventor: "Roni Cohen",
        reactions: ["Amusement", "Cuteness Overload"],
        comments: "Goggles made for dogs, because they need eye protection too!"
      }),
      new Invention({
        inventionName: "USB Pet Rock",
        yearOfInvention: 2007,
        nameOfInventor: "Unknown",
        reactions: ["Tech Confusion", "Amusement"],
        comments: "A USB-powered version of the classic Pet Rock!"
      }),
      new Invention({
        inventionName: "Portable Chin Rest for Subway Commuters",
        yearOfInvention: 2015,
        nameOfInventor: "Unknown",
        reactions: ["Practicality Questions", "Laughter"],
        comments: "A portable chin rest for napping during subway rides!"
      }),
      new Invention({
        inventionName: "Toilet Paper Roll Hat",
        yearOfInvention: 2002,
        nameOfInventor: "Unknown",
        reactions: ["Amusement", "Confusion"],
        comments: "A hat made from toilet paper rolls, fashion statement?"
      })
    ];

Invention.insertMany(inventions)
.then((data)=>{
    console.log("data added successfully ");
}).catch((err)=>{
    console.log(err);
})
  
