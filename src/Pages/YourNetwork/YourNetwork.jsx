import React from 'react';
import './YourNetwork.css';

import Navigation from '../../components/navigation/navigation'

const YourNetwork = () => {
    return (
        <div className="yournetwork">
            <Navigation />

           <div className="yourNetwork_header">
                <h2>Your Network</h2>
            </div>
            
            <div className = "YourNetwork_body">
                <div className="friends">
                    <p className="profilepicture"></p>
                    <div className = "friend_info">
                        <h3>Name </h3>
                        <h3>Job/Title</h3>
                        <h3>Place of Study</h3>
                        <p className="location">Location</p>
                    </div>
                    <button className = "dismiss-btn">dismiss</button>
                </div>
                <div className="friends">
                    <p className="profilepicture"></p>
                    <div className = "friend_info">
                        <h3>Name </h3>
                        <h3>Job/Title</h3>
                        <h3>Place of Study</h3>
                        <p className="location">Location</p>
                    </div>
                    <button className = "dismiss-btn">dismiss</button>
                </div>
                <div className="friends">
                    <p className="profilepicture"></p>
                    <div className = "friend_info">
                        <h3>Name </h3>
                        <h3>Job/Title</h3>
                        <h3>Place of Study</h3>
                        <p className="location">Location</p>
                    </div>
                    <button className = "dismiss-btn">dismiss</button>
                </div>
            </div>

        </div>    
        
    )
}
    
export default YourNetwork;