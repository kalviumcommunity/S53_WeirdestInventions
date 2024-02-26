import React, { useState, useContext } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { AppContext } from './Context';
import { setCookie } from '../utils/cookies'; //added this for cookiees


const Login = () => {
const {login, setLogin} = useContext(AppContext)
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:3000/posts/login', {
        email: formData.email,
        password: formData.password
      }).then(()=>{
        setCookie("email",formData.email,365)
        setLogin(loginCheck())
    })
    console.log('Response:', formData); // Handle response as needed
    } catch (error) {
      console.error('Error:', error); // Handle error appropriately
    }
  };


  

  return (
    <>
      {/* <!-- component --> */}
      <div className="flex items-center justify-center" style={{ height: "100vh" }}>
        <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
          <div className="flex justify-center mb-6">
            <span className="inline-block bg-gray-200 rounded-full p-3">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4"/></svg>
            </span>
          </div>
          <h2 className="text-2xl font-semibold text-center mb-4">LOGIN</h2>
          <p className="text-gray-600 text-center mb-6" style={{ backgroundColor: "white" }}>LOGIN IN TO HAVE FUN!</p>
          <form onSubmit={handleSubmit}>
            {/* <div className="mb-4">
              <label htmlFor="fullname" className="block text-gray-700 text-sm font-semibold mb-2">Full Name *</label>
              <input type="text" id="fullname" className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500" required onChange={handleChange} value={formData.fullname} placeholder="John Doe" style={{ color: "white" }} />
            </div> */}
            <div className="mb-4">
              <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">Email Address *</label>
              <input type="email" id="email" className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500" required onChange={handleChange} value={formData.email} placeholder="hello@example.com" style={{ color: "white" }} />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">Password *</label>
              <input type="password" id="password" className="form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500" required onChange={handleChange} value={formData.password} placeholder="••••••••" style={{ color: "white" }} />
              <p className="text-gray-600 text-xs mt-1" style={{ backgroundColor: "white" }}>Must contain 1 uppercase letter, 1 number, min. 8 characters.</p>
            </div>
            <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Login</button>
            <p className="text-gray-600 text-xs text-center mt-4" style={{ backgroundColor: "white" }}>
              By clicking Register, you agree to accept Apex Financial's
              <Link to="#" className="text-blue-500 hover:underline">Terms and Conditions</Link>.
            </p>
          </form>
        </div>
      </div>
    </>
  );
}

export default Login;
