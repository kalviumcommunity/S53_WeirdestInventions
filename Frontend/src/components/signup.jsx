import React, { useState, useContext } from 'react';
import axios from 'axios';
// import { AppContext } from './Context';


const Signup = () => {
    const [fullname, setfullname] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    // const {login, setLogin} = useContext(AppContext)

    const handleValidation = () => {
        const errors = {};
        if (fullname.length < 5) {
            errors.fullname = 'Full name must be at least 5 characters long.';
        }
        if (!/\S+@\S+\.\S+/.test(email)) {
            errors.email = 'Invalid email address.';
        }
        if (password.length < 8) {
            errors.password = 'Password must be at least 8 characters long.';
        }
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (handleValidation()) {
            try {
                const response = await axios.post('https://weirdest-inventions.onrender.com/posts/signup', {
                    fullname,
                    email,
                    password
                })
                console.log('Response:', response.data);
                // Redirect or perform any other actions upon successful registration
            } catch (error) {
                console.error('Error:', error);
                // Handle errors, such as displaying error messages to the user
            }
        } else {
            console.log('Form validation failed');
        }
    };

    return (
        <>
            {/* <!-- component --> */}
            <div className="flex items-center justify-center" style={{ height: "100vh", marginTop: "2vh" }}>
                <div className="bg-white p-8 rounded-lg shadow-lg max-w-sm w-full">
                    <div className="flex justify-center mb-6">
                        <span className="inline-block bg-gray-200 rounded-full p-3">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M12 4a4 4 0 0 1 4 4a4 4 0 0 1-4 4a4 4 0 0 1-4-4a4 4 0 0 1 4-4m0 10c4.42 0 8 1.79 8 4v2H4v-2c0-2.21 3.58-4 8-4" /></svg>
                        </span>
                    </div>
                    <h2 className="text-2xl font-semibold text-center mb-4">Create a new account</h2>
                    <p className="text-gray-600 text-center mb-6" style={{ backgroundColor: "white" }}>Enter your details to register.</p>
                    <form onSubmit={handleSubmit}>
                        <div className="mb-4">
                            <label htmlFor="fullname" className="block text-gray-700 text-sm font-semibold mb-2">Full Name *</label>
                            <input type="text" id="fullname" className={`form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500 ${errors.fullname && 'border-red-500'}`} required onChange={(e) => setfullname(e.target.value)} placeholder="James Brown" style={{ color: "white" }} />
                            {errors.fullname && <p className="text-black-500 text-xs mt-1" style={{backgroundColor:"white", color:"red"}}>{errors.fullname}</p>}
                        </div>
                        <div className="mb-4">
                            <label htmlFor="email" className="block text-gray-700 text-sm font-semibold mb-2">Email Address *</label>
                            <input type="email" id="email" className={`form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500 ${errors.email && 'border-red-500'}`} required onChange={(e) => setEmail(e.target.value)} placeholder="hello@alignui.com" style={{ color: "white" }} />
                            {errors.email && <p className="text-red-500 text-xs mt-1" style={{backgroundColor:"white", color:"red"}}>{errors.email}</p>}
                        </div>
                        <div className="mb-6">
                            <label htmlFor="password" className="block text-gray-700 text-sm font-semibold mb-2">Password *</label>
                            <input type="password" id="password" className={`form-input w-full px-4 py-2 border rounded-lg text-gray-700 focus:ring-blue-500 ${errors.password && 'border-red-500'}`} required onChange={(e) => setPassword(e.target.value)} placeholder="••••••••" style={{ color: "white" }} />
                            <p className="text-gray-600 text-xs mt-1" style={{ backgroundColor: "white" }}>Must contain 1 uppercase letter, 1 number, min. 8 characters.</p>
                            {errors.password && <p className="text-red-500 text-xs mt-1" style={{backgroundColor:"white", color:"red"}}>{errors.password}</p>}
                        </div>

                        <button type="submit" className="w-full bg-blue-500 text-white px-4 py-2 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50">Register</button>
                        <p className="text-gray-600 text-xs text-center mt-4" style={{ backgroundColor: "white" }}>
                            By clicking Register, you agree to accept Apex Financial's
                            <a href="#" className="text-blue-500 hover:underline">Terms and Conditions</a>.
                        </p>
                    </form>
                </div>
            </div>
        </>
    );
};

export default Signup;
