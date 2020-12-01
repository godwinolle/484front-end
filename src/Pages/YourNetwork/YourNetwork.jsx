import React from 'react';
import './YourNetwork.css';

import Navigation from '../../components/navigation/navigation'

const YourNetwork = () => {
    return (
        <div className="yournetwork">
            <Navigation />

           <div className="yourNetwork">
                <h2>Your Network</h2>
            </div>
            
            <table>
            <tr>
            <div className="friends">
            <th><p className="profilepicture"></p></th>
            <th><h3>Name </h3>
                <h3>Job/Title</h3>
                <h3>Place of Study</h3>
                <p className="location">Location</p></th>
            </div>
            </tr>
            </table>

        </div>    
        
    )
}
    
export default YourNetwork;