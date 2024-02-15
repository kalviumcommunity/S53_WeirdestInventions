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
        imgUrl: "https://d.newsweek.com/en/full/1652456/dynasphere.png?w=1200&f=aa70fc9c08f08b72a0bfa66c5557d746",
        inventionName: "Dynasphere",
        descriptionOfInvention: "an electrically-driven wheel, capable of speeds of 30mph, invented by Mr J. A. Purves of Taunton and his son.",
      }),
      new Invention({
        imgUrl: "https://photos.prnewswire.com/prnfull/20150210/174636",
        inventionName: "Selfie Toaster",
        descriptionOfInvention: "Hammacher Schlemmer , To help liven it up, this toaster from the Vermont Novelty Toaster Corporation released in 2014 is customized using a photo of your face",
      }),
      new Invention({
        imgUrl: "https://t.ly/az7lb",
        inventionName: "Ostrich Pillow",
        descriptionOfInvention: "Ostrich Pillow was conceptualized by the European design duo kawamura-ganjavian , the Ostrich Pillow allows the wearer to escape the world by sticking their head into a fluffy hole.",
      }),
      new Invention({
        imgUrl: "https://homefixated.com/wp-content/uploads/2017/07/Ping-Pong-Table-Door.jpg",
        inventionName: "Ping-Pong Door",
        descriptionOfInvention: "Tabias Franzel is the person who created the ping-pong door , Love ping pong but don't have the space? This door converts to a ping pong table with a simple flip of the wrist!",
      }),
      new Invention({
        imgUrl: "https://i.insider.com/512b9dfbeab8ea240a00000b?width=750&format=jpeg&auto=webp",
        inventionName: "Dogbrella",
        descriptionOfInvention: "Hammacher Schlemmer the inventor of Dogbrella, this umbrella that mounts to a dog's collar and keeps them dry for walks",
      }),
      new Invention({
        imgUrl: "https://netdna.coolthings.com/wp-content/uploads/2013/04/flasktie1.jpg",
        inventionName: "Flask Tie",
        descriptionOfInvention: "The Flask Tie was invented by Steven Anthony, If work is driving you to the bottle, a flask hidden in your tie can do double-duty.",
      }),
      new Invention({
        imgUrl: "https://3.imimg.com/data3/VM/RQ/MY-10119348/boyfriend-arm-pillow.jpg",
        inventionName: "Boyfriend's Arm Pillow",
        descriptionOfInvention: "Released in 2008 by the Kameo Corporation, this pillow shaped like an embracing human arm quickly caught on in Japan",
      }),
      new Invention({
        imgUrl: "https://qph.cf2.quoracdn.net/main-qimg-d2d8f25e46c581bfc352fa2646a20971-lq",
        inventionName: "Mass Shaving Machine",
        descriptionOfInvention: "Invented in the 19th century, the “mass shaving machine” can shave a dozen men at once.",
      }),
      new Invention({
        imgUrl: "https://d.newsweek.com/en/full/1652426/massage-helmet.webp?w=790&f=b673bad9379ca47a1f5ba055cfcafe81",
        inventionName: "Massage helmet",
        descriptionOfInvention: "In the 1960s, you didn't need to visit a spa to get a relaxing head massage. You could slip on this massage helmet for an air-powered scalp rubdown.",
      }),
      new Invention({
        imgUrl: "https://i0.wp.com/rayool.wordpress.com/files/2009/10/noodlefan.jpg",
        inventionName: "Noodle Fan",
        descriptionOfInvention: "No one wants to burn their mouth with hot food. The inventor Momofuku Ando must have thought a lot about doing good to people, hence, invented this Noodle Fan.",
      })
    ];

Invention.insertMany(inventions)
.then((data)=>{
    console.log("data added successfully ");
}).catch((err)=>{
    console.log(err);
})
  
