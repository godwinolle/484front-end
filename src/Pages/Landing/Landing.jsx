import React from 'react'
import { Link } from 'react-router-dom' //this takes users to other pages in the SPA

import homeLogo from '../../assets/homeLogo.svg'
import logo from '../../assets/logo.svg'

import './Landing.css'


const Landing = () => {
    return(
        <div className="landing">
            <div className="landing-nav">
                <img src={logo} alt="website logo" />
                <ul>
                    <li className="sign-up">
                        <Link to="/signup" className="sign-up-link">Sign Up</Link>
                    </li>
                    <li>
                        Login
                    </li>
                </ul>
            </div>
            <div className="welcome">
                <div className="class-welcome">
                    <h3>WELCOME TO YOUR DEVELOPER COMMUNITY</h3>
                    <p>Share developer ideas</p>
                    <p>Share developer ideas</p>
                    <p>Share developer ideas</p>
                </div>
                <div className="class-image">
                    <img src={homeLogo} alt="dev-chat home logo" />
                </div>
            </div>
        </div>
    )
}

export default Landing