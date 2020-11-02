import React from 'react';

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
                    <p>logo</p>
                    <form>
                        <p><FaSearch /></p>
                        <input type="text" placeholder="Search" />
                    </form>
                </div>
                <div>
                    <ul>
                        <li>
                            <p className="nav-icon"><FaHome /></p>
                            <p>Home</p>
                        </li>
                        <li>
                            <p className="nav-icon"><IoIosPerson /></p>
                            <p>Profile</p>
                        </li>
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