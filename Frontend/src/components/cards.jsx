import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
function Card({img,inventName,desc,comments, id}) {
  const navigate = useNavigate();
  const editPost = () => {
    navigate(`/editpost/${id}`)
  }
  const API_URL = "http://localhost:3000/posts"
  const handleDelete = () => {
    axios.delete(API_URL, { data: { inventionName: inventName } })
        .then((response) => {
            console.log(response.data); // Log the response data to check the server's response
            navigate('/listings');
        })
        .catch(error => {
            console.error('Error:', error.message);
        });
};



  return (
    <div className="cards relative flex w-full max-w-[22rem]   flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
      <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
        <img style={{height:"30vh" , width:"30vw"}}
          src={img}
          alt="card-1"
        />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
        <button
          className="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          data-ripple-dark="true"
        >
          <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="h-6 w-6"
            >
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
            </svg>
          </span>
        </button>
      </div>
      <div className="p-6">
        <div className="mb-3 flex items-center justify-between">
          <h5 className="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
          {inventName}
          </h5>
        </div>
        <p className="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased bg-white"
        style={{height:"9vh"}}
        >
        {desc}
        </p>
        <div className="group mt-8 inline-flex flex-wrap items-center gap-3">
          {/* Icons */}
        </div>
      </div>
      <div className="p-6 pt-3">
      
        {/* <button
          className="block w-full select-none rounded-lg bg-pink-500 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          data-ripple-light="true"
        >
          comments
        </button> */}


        <button style={{marginRight:"6vh", marginTop:"1vh"}} className="btn btn-info" onClick={editPost}>EDIT</button>
        <button className="btn btn-error" onClick={handleDelete}>DELETE</button>
      
      </div>
    </div>




 
  );
  
}

export default Card;
