import React, { useContext } from 'react'

import { NameContext } from '../../NameContext'

import { GrLocation } from 'react-icons/gr';
import { FiExternalLink } from 'react-icons/fi'

import person from '../../assets/person.svg'
import './sideProfile.css'

const SideProfile = () => {
    const [name] = useContext(NameContext)

    const user = localStorage.getItem("name")

    return(
        <div className="sideProfile">
            <div className="header"></div>
            <div className="image">
                <img src={person} alt="person" />
            </div>
            <p className="user-name">{ name ? name: user }</p>

            <p className="user-bio">Software Engineer at Amazon</p>
            <p className="edit-profile-button">Edit Profile</p>
            <hr />
            <div className="bottom-half">
                <div className="following-followers">
                    <div>
                        <p>Followers</p>
                        <p className="follow-number">169</p>
                    </div>
                    <div>
                        <p>Following</p>
                        <p className="follow-number">19</p>
                    </div>
                </div>
                <p className="location"><GrLocation /> Towson MD</p>
                <p className="link"><FiExternalLink /> <a href="towson.edu">towson.edu</a></p>
            </div>
        </div>
    )
}

export default SideProfile;