import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'

const signup = () => {
    return (
        <div className="container">
            <div className="wrapper">
                <div className="login-contanier">
                    <span className="heading">Welcome</span>
                    <div className="logo"> <img src={require("../gatsby-icon.png")}/></div>
                    <div className="input-wrapper">
                        <input className="input-field" placeholder="Username"/>
                        <span className="wrap-text"></span>
                    </div>
                    <div className="input-wrapper">
                        <input className="input-field" placeholder="Email"/>
                        <span className="wrap-text"></span>
                    </div>
                    <div className="input-wrapper">
                        <input className="input-field" placeholder="Password"/>
                        <span className="wrap-text"></span>
                    </div>
                    <div className="input-wrapper">
                        <input className="input-field" placeholder="Phone Number"/>
                        <span className="wrap-text"></span>
                    </div>
                    <div className="btn-container">
                        <button className="login-btn">Signup</button>
                    </div>
                    <div className="text-container">
                        <span className="bottom-text">Already have an account ? <Link className="link-text" to="/">Login</Link></span>
                    </div>  
                </div>
            </div>
        </div>
    ) 
}

export default signup