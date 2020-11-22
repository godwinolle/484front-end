import React from 'react';

import Navigation from '../../components/navigation/navigation'

import SideProfile from '../../components/sideProfile/sideProfile'
import Trends from '../../components/trends/trends'
import NewPost from '../../components/newPost/newPost'
import TimeLine from '../../components/timeline/timeline'

import './Feed.css'

const posts = [
    'Ya\'ll heard that new Youngboy?',
    'Coding with Brad is really fun',
    'Benn up all night fixing this bug',
    'My friend Eddy works at Google',
    'Godwin needs to learn how to comment his code',
    'New API that grabs all of Youngboy songs on command',
    'Wish bradcodes posted more on IG',
    'When is Eddy gonna make a coding instagram?',
    'Connections to the backend is going well right now',
    'First post',
]
const Feed = () => {
    return(
        <div className="feed">
            <Navigation />
            <div className="page-content">
                <SideProfile />
                <div>
                    <NewPost />
                    {posts.map((post) => {
                        return(
                            <TimeLine post={post}/>
                        )
                    })}    
                </div>
                <Trends />
            </div>
        </div>
    )
}

export default Feed;