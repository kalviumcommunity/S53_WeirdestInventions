import React from 'react'
import bulb from "../assets/HPimg.png"
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <>
    {/* <h2>Jason WIlliam</h2> */}
    <div style={{width: "100%",display: "flex",height:"100vh",flexDirection: "column",justifyContent: "space-around",alignItems:"center",paddingTop: "6%"}}>
      <div style={{display: "flex",justifyContent: "space-around",width: "100%",alignItems: "center",}}>

    <img src={bulb} alt="" id='img' style={{width: "40vw"}}/>
    <h1 style={{fontSize: "50px",color: "white",textAlign: "left",fontWeight: "800"}}>EXPLORE THE <br /> <span style={{color:"rgb(236, 220, 156)"}}>WIERDEST INNOVATIONS</span> <br /> MADE BY CREATIVE <br /> <span style={{color:"rgb(70, 63, 20)"}}>INVENTORS!</span></h1>
      </div>
     <Link to="/listings">   

    <button className="btn btn-outline btn-primary" style={{alignSelf: "flex-end",marginRight: "7vw", width:"20vh",fontSize:"20px"}}>EXPLORE ☆</button> 
     </Link>
    </div>
   
  
    </>
        
    
  )
}

export default Home