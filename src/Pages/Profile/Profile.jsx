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

            <div className="name">
                <br></br>
                <br></br>
                <br></br>
                <h2>Name</h2>
            </div>


            <div className="job">
                <h3>Job/Title</h3>
                </div>

                <div className="edit">
                    <button>Edit</button>
                </div>


            <div className="place">
                <h3>Place of Study</h3>
                </div>


            <div className="Location">
                <p>Location</p>
                </div>

  
            <div className="bio">
                <h3>Biography</h3>
                
            </div>

            <br></br>

            <div className="post1">
                <h4>User post</h4>
            </div>
            
            <div class="divider"/>

            <div className="post2">
                <h4>User post</h4>
            </div>
            

        </div>
        

        
    )
}

export default Profile;
