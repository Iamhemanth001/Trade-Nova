/* eslint-disable no-unused-vars */
import React, { useState } from "react";
import { GoogleLogin } from '@react-oauth/google';
import {jwtDecode} from "jwt-decode";
import axios from "axios";

function Signup() {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault(); 
        
        if (!email || !password) {
            setError("All fields are required.");
            return;
        }

        const userData = {email, password };

        try {
            const response = await axios.post("http://localhost:8200/signup", userData);
            setSuccessMessage("User created successfully!");
        } catch (error) {
            console.error("Error creating user:", error.response?.data || error.message);
            setError(error.response?.data?.message || "An error occurred. Please try again.");
        }
    };

    const handleGoogleSignup = async (credentialResponse) => {
        try {
            const token = credentialResponse.credential;
    
            if (!token) {
                console.error("Google ID token is missing.");
                setError("Google ID token is missing.");
                return;
            }
    
            const response = await axios.post("http://localhost:8200/google-login", { idToken: token });
    
            setSuccessMessage("User created successfully with Google!");
            setError('');
        } catch (error) {
            console.error("Error creating Google user:", error.response?.data || error.message);
            setError(error.response?.data?.message || "An error occurred. Please try again.");
        }
    };
    

    return (
        <div className="container mt-5">
            <div className="row mt-5 p-5">
                <div className="col-6 mt-5 p-5">
                    <img src="media/images/landing.png" style={{ width: "100%" }} />
                </div>

                <div className="col-6 mt-5 p-5">
                    <h2>Signup now</h2>
                    <p className="text-muted">Or track your existing application.</p>

                    {/* Manual Signup Form */}
                    <form onSubmit={handleSubmit}>

                        <div className="form-group mt-3">
                            <label htmlFor="email">Email</label>
                            <input
                                type="email"
                                id="email"
                                className="form-control"
                                value={email}
                                onChange={(e) => setEmail(e.target.value)}
                            />
                        </div>

                        <div className="form-group mt-3">
                            <label htmlFor="password">Password</label>
                            <input
                                type="password"
                                id="password"
                                className="form-control"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                            />
                        </div>

                        {/* Display error message if any */}
                        {error && <div className="alert alert-danger mt-3">{error}</div>}
                        {successMessage && <div className="alert alert-success mt-3">{successMessage}</div>}

                        <button type="submit" className="btn btn-primary mt-3">Signup</button>
                    </form>

                    {/* Google OAuth Login */}
                    <GoogleLogin
                        onSuccess={handleGoogleSignup}
                        onError={() => {
                            console.log('Login Failed');
                        }}
                    />
                </div>

                <div className="col">
                    <p>I authorize Zerodha to contact me even if my number is registered on DND. I authorize Zerodha to fetch my KYC information from the C-KYC registry with my PAN. Please visit this article to know more.</p>
                    <p>By submitting your contact details, you authorize Zerodha to contact you even if you are registered on DND & conduct online KYC for trading & demat account opening as per KRA regulations and PMLA guidelines.</p>
                </div>
            </div>
        </div>
    );
}

export default Signup;
