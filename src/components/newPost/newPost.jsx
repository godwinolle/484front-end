import React, { useState, useEffect, useContext } from 'react';

import { NameContext } from '../../NameContext';

import { FaPen } from 'react-icons/fa';
import { GrImage } from 'react-icons/gr'
import { AiOutlineVideoCameraAdd } from 'react-icons/ai'
import { AiOutlineLink } from 'react-icons/ai'

import axios from 'axios'

import './newPost.css'
import { MdLocalGroceryStore } from 'react-icons/md';

const NewPost = () => {
    const [post, setPost] = useState('');
    const [email] = useContext(NameContext);

    async function newPosts(userId, author, post){
        try{
            const response = await axios.post(`https://cosc484-backend.herokuapp.com/users/${userId}/post`,{
                userId: userId,
                author: author,
                post: post
            })
            await response.json;
            console.log(response)
        } catch(err){
             console.log(err)
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault()
        console.log(post)

        const userId = localStorage.getItem('id')
        const name = localStorage.getItem('name')

        newPosts(userId, name, post);
    }

    useEffect(() => {
        async function fetchUser(){
            try{
                const response = await axios.get('https://cosc484-backend.herokuapp.com/users');
                await response.json;
                const user1 = localStorage.setItem('email', email)
                response.data.users.map((user) => {
                    if(user.email === user1){
                        localStorage.setItem("id" , user._id)
                        localStorage.setItem("name", user.name)
                    }
                })
                //console.log(response)
            } catch(err){
                console.log(err);
            }
        }
        fetchUser()
    }, [])
    return(
        <div className="new-post">
            <form onSubmit={handleSubmit}>
                <FaPen />
                <input placeholder="Start a Post" value={post} onChange={(e) => setPost(e.target.value)}/>
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