import React from 'react';
import './Network.css';

import Navigation from '../../components/navigation/navigation'

const network = () => {
    return (
        <div className="network">
            <Navigation />

            <div className="YourNetwork">
                <h1>57</h1> 
                <h3>Your Network</h3>
                <button className="seeAll">see all</button>
            </div>

           <div className="invitations">
                <h2>Invitations</h2>
            </div>
            
            <div className="newRequest">
                <p className="profilepicture"></p>
                <h3>Name </h3>
                <h3>Job/Title</h3>
                <h3>Place of Study</h3>
                <p className="location">Location</p>
            </div>

            <button className="dismiss">dismiss</button>
            <button className="accept">accept</button>

        </div>    
        
    )
}

export default network;