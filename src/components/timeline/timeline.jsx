import React, {Component} from 'react';

import person from '../../assets/person.svg'

import { AiOutlineHeart } from 'react-icons/ai'
//import { AiFillHeart } from 'react-icons/ai'
import { FaRegCommentDots } from 'react-icons/fa'
import jwtDecode from 'jwt-decode';
import axios from 'axios';



import './timeline.css'
import { render } from '@testing-library/react';

let authenticated;

const token = localStorage.MongoIdToken;
if(token) {
  const decodedToken = jwtDecode(token);
  if(decodedToken.payload._id == null) {
    window.location.href = '/login'
    authenticated = false;
  } else {
   authenticated = true;
   
  }
}



class TimeLine extends Component {

    
    likePost = (id) => {
        axios.post(`https://cosc484-backend.herokuapp.com/users/${localStorage.userId}/post/${id}/like`, {
            likes : [
                {
                    userId: localStorage.userId,
                     like: true
                }
            ]
        })
        .then(res => {
          console.log(res.data);
          console.log(localStorage.userId)
        })
        .catch(err => console.log(err));
    }
    
    
    render() {
        return(
            <div className="time-line">
                <div className="time-line-post">
                    <div className="userPost-info">
                        <div>
                            <img src={person} alt="user post" />
                        </div>
                        <div className="userPost-bio">
                            <p className="name">{this.props.author}</p>
                            <p className="occupation">Software Enginener at Amazon</p>
                        </div>
                    </div>
                    <div className="post">
                        <p>{this.props.post}</p>
                    </div>
                </div>
                <div className="time-line-interaction">
                    <div className="likes">
                        <p><AiOutlineHeart onClick = { ()=> {this.likePost(this.props.postId)}} /></p>
                        <p>{this.props.likes.length}</p>
                    </div>
                    <div className="comments">
                        <p><FaRegCommentDots /></p>
                        <p>{this.props.comment.length}</p>
                    </div>
                </div>
            </div>
        )
    }
    

}

export default TimeLine;