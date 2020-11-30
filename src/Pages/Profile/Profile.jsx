import React from 'react';
import './Profile.css';
import Navigation from '../../components/navigation/navigation'

const Profile = () => {
    return (
        <div className="profile">
            <Navigation />
            <header>
                <img src="https://placeimg.com/400/400/tech" alt="Drawing of John Doe" className="profile-image"/>
            </header>

            <div className="tag">
                <h3>Name </h3>
                <h3>Job/Title</h3>
                <h3>Place of Study</h3>
                <p className="location">Location</p>
            </div>

            <button className="send-message">Send a Message</button>
            
            <div>
                <h3>Biography</h3>
            </div>

            <div>
                <h4>User post</h4>
                <h4>User post</h4>
            </div>
            

        </div>
        

        
    )
}

export default Profile;
