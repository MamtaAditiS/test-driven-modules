import React from 'react'
import './login.css'
import { Link } from 'react-router-dom'


const login = () => {
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
                        <input className="input-field" placeholder="Password"/>
                        <span className="wrap-text"></span>
                    </div>
                    <div className="btn-container">
                        <button className="login-btn">Login</button>
                    </div>
                    <div className="text-container">
                        <span className="bottom-text">Don't have an account? <Link className="link-text" to='/signup'>Sign up</Link></span>
                    </div>  
                </div>
            </div>
        </div>
    ) 
}

export default login