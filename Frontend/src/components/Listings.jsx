import React, { useEffect, useState } from 'react'
import Card from './cards'
import axios from 'axios'

function Listings() {
  const[data, setData] = useState("")
    useEffect(()=>{
      axios.get("https://weirdest-inventions.onrender.com//posts").then((res)=>{
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
        <Card key={i} img={e.imgUrl} inventName={e.inventionName} desc={e.descriptionOfInvention} comments={e.comments}/>
      ))}
      </div>
    </div>
    // "Helo"
  )
}

export default Listings