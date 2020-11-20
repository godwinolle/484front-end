import React from 'react';

import { Link } from 'react-router-dom'
//importng the logo
import logo from '../../assets/DevChatter-LogoWhite.png'
//importing the logos
import { FaSearch } from 'react-icons/fa' //search bar 
import  { FaHome } from 'react-icons/fa' //home logo
import { IoIosPerson } from 'react-icons/io' //profile logo
import { BiMessageRounded } from 'react-icons/bi' //messaging logo
import { BsFillPeopleFill } from 'react-icons/bs' //networks logo
import { MdNotifications } from 'react-icons/md' //notifications logo

import './navigation.css'

const Navigation = () => {
    return(
        <div className="navigation">
            <nav>
                <div className="search-bar">
                    <img src={logo} alt="dev chatter logo"/>
                    <form>
                        <p><FaSearch /></p>
                        <input type="text" placeholder="Search" />
                    </form>
                </div>
                <div>
                    <ul>
                        <Link to="/feed" className="nav-links">
                            <li>
                                <p className="nav-icon"><FaHome /></p>
                                <p>Home</p>
                            </li>
                        </Link>
                        <Link to="/profile" className="nav-links">
                        <li>
                            <p className="nav-icon"><IoIosPerson /></p>
                            <p>Profile</p>
                        </li>
                        </Link>
                        <li>
                            <p className="nav-icon"><BiMessageRounded /></p>
                            <p>Messages</p>
                        </li>
                        <li>
                            <p className="nav-icon"><BsFillPeopleFill /></p>
                            <p>Network</p>
                        </li>
                        <li>
                            <p className="nav-icon"><MdNotifications /></p>
                            <p>Notifications</p>
                        </li>
                    </ul>
                </div>
            </nav>
        </div>
    )
}

export default Navigation