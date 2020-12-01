import React,{ Component } from 'react';

import { FaPen } from 'react-icons/fa';
import { GrImage } from 'react-icons/gr'
import { AiOutlineVideoCameraAdd } from 'react-icons/ai'
import { AiOutlineLink } from 'react-icons/ai'
import axios from 'axios';
import jwtDecode from 'jwt-decode';



import './newPost.css'
import { MdLocalGroceryStore } from 'react-icons/md';

class NewPost extends Component {

    state = {
        tweet: ''
    }
    handleChange = event => {
        this.setState({ tweet: event.target.value });
      }
    
      handleSubmit = event => {
        event.preventDefault();
    
    
        axios.post(`https://cosc484-backend.herokuapp.com/users/${localStorage.userId}/post`, {
            text: this.state.tweet,
            comment: [
                {
                    userId: "",
                    text: ""
                }
            ],
            likes: [
                {
                    userId: "",
                    like: false
                }
            ]
        })
          .then(res => {
            console.log(res.data);
          })
      }


    render() {

        return(
            <div className="new-post">
                <form onSubmit = {this.handleSubmit}>
                    <FaPen />
                    <input placeholder="Start a Post"  type="text" name ="tweet"  onChange={this.handleChange} />
                    {/* <button type="submit">Tweet</button> */}
                </form>
                <hr />
                <div className="add-media">
                    <div>
                        <GrImage />
                        <p>Add Image</p>
                    </div>
                    <div>
                        <AiOutlineVideoCameraAdd />
                        <p>Add Video</p>
                    </div>
                    <div>
                        <AiOutlineLink />
                        <p>Add Link</p>
                    </div>
                </div>
            </div>
        )
    }
    
}

export default NewPost;