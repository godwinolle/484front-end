import React from 'react';

import Navigation from '../../components/navigation/navigation'

import SideProfile from '../../components/sideProfile/sideProfile'
import Trends from '../../components/trends/trends'
import NewPost from '../../components/newPost/newPost'
import TimeLine from '../../components/timeline/timeline'

import './Feed.css'

const Feed = () => {
    return(
        <div className="feed">
            <Navigation />
            <div className="page-content">
                <SideProfile />
                <div>
                    <NewPost />
                    <TimeLine />
                </div>
                <Trends />
            </div>
    
        </div>
    )
}

export default Feed;