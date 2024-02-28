import React, { useEffect, useState } from 'react'
import Card from './cards'
import axios from 'axios'
import { IoMdAddCircle } from "react-icons/io";
import { Link } from 'react-router-dom';

function Listings() {
  const[data, setData] = useState("")
    useEffect(()=>{
      axios.get("http://localhost:3000/posts/data").then((res)=>{
        setData(res.data)
        console.log(res.data)
    }).catch((err)=>{
        console.log(err)
    })
    },[])
  return (
    <div className='listings-grandParent'>
      <div className='listings-parent'>
      {data.length!=0 && data.map((e,i) => (
        <Card key= {i} img={e.imgUrl} inventName={e.inventionName} desc={e.descriptionOfInvention} comments={e.comments} id={e._id}/>
        ))}

      <div > 
        <Link
          style={{marginRight:"10"}}
          to="/addpost"
          className="text-red-500 fixed bottom-0 right-0  mb-20 mr-8 "
          aria-label="">
            

          <IoMdAddCircle className="" size={70} />
        </Link>
        
      </div>
      </div>
    </div>
    // "Helo"
  )
}

export default Listings
