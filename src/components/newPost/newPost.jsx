import React from 'react';

import { FaPen } from 'react-icons/fa';
import { GrImage } from 'react-icons/gr'
import { AiOutlineVideoCameraAdd } from 'react-icons/ai'
import { AiOutlineLink } from 'react-icons/ai'

import './newPost.css'

const NewPost = () => {
    return(
        <div className="new-post">
            <form>
                <FaPen />
                <input placeholder="Start a Post" />
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

export default NewPost;