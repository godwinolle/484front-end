import React from 'react';

import person from '../../assets/person.png'

import { AiOutlineHeart } from 'react-icons/ai'
//import { AiFillHeart } from 'react-icons/ai'
import { FaRegCommentDots } from 'react-icons/fa'

import './timeline.css'

const TimeLine = (props) => {
    return(
        <div className="time-line">
            <div className="time-line-post">
                <div className="userPost-info">
                    <div>
                        <img src={person} alt="user post" />
                    </div>
                    <div className="userPost-bio">
                        <p className="name">Jennifer Doe</p>
                        <p className="occupation">Software Enginener at Amazon</p>
                    </div>
                </div>
                <div className="post">
                    <p>{props.post}</p>
                </div>
            </div>
            <div className="time-line-interaction">
                <div className="likes">
                    <p><AiOutlineHeart /></p>
                    <p>12,453</p>
                </div>
                <div className="comments">
                    <p><FaRegCommentDots /></p>
                    <p>2,432</p>
                </div>
            </div>
        </div>
    )
}

export default TimeLine;