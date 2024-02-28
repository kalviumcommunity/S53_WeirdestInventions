import React, { useEffect, useState } from 'react'
import Card from './cards'
import axios from 'axios'
import { IoMdAddCircle } from "react-icons/io";
import { Link } from 'react-router-dom';

function Posts() {
  const [emails, setEmails] = useState([]);
  const [selectedEmail, setSelectedEmail] = useState('');
  const [data, setData] = useState([]);

  useEffect(() => {
    axios.get("http://localhost:3000/posts/users/data")
      .then((res) => {
        setEmails(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(`http://localhost:3000/posts/api/${selectedEmail}`);
        setData(response.data.record);
        console.log(response.data.record);
      } catch (error) {
        console.log(error);
      }
    };
  
    if (selectedEmail !== '') {
      fetchData();
    }
  }, [selectedEmail]);
  

  const handleEmailChange = (event) => {
    setSelectedEmail(event.target.value);
  };

  return (
    <div className='listings-grandParent'>
      <div className='listings-paren' style={{height:"100vh"}}>
        {/* Select tag with options */}
        <select onChange={handleEmailChange} value={selectedEmail} style={{
          height: "4vh",
          padding: "5px",
          borderRadius: "5px",
          border: "1px solid #ccc",
          fontSize: "16px",
          width: "200px",
          backgroundColor: "#f7f7f7", // Background color
          color: "#333", // Text color
          outline: "none", // Remove outline
          boxShadow: "0 0 5px rgba(0,0,0,0.1)",
           position:"relative",
           right:"20vh"
          }}>
          <option value="">Select an email</option>
          {emails.map((email, index) => (
            <option key={index} value={email.email}>{email.email}</option>
          ))}
        </select>

        {/* Displaying cards based on selected email */}
        {data.length !== 0 && data.map((e, i) => (
          <Card key={i} img={e.imgUrl} inventName={e.inventionName} desc={e.descriptionOfInvention} comments={e.comments} id={e._id} />
        ))}

        {/* Add post button */}
        <div>
          <Link
            style={{ marginRight: "10" }}
            to="/addpost"
            className="text-red-500 fixed bottom-0 right-0  mb-20 mr-8 "
            aria-label="">
            <IoMdAddCircle className="" size={70} />
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Posts;



