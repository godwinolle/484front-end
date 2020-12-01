import React, {Component} from 'react';
import axios from 'axios';


import Navigation from '../../components/navigation/navigation'

import SideProfile from '../../components/sideProfile/sideProfile'
import Trends from '../../components/trends/trends'
import NewPost from '../../components/newPost/newPost'
import TimeLine from '../../components/timeline/timeline'

import './Feed.css'

class Feed extends Component {

    state = { 
        posts:[]
    }

    componentDidMount() {
                axios.get('https://cosc484-backend.herokuapp.com/posts')
                .then(res => {
                    console.log(res.data.resources)
                    this.setState({
                        posts: res.data.resources
                    })
                })
                .catch(err => console.log(err));
            }
    render(){
        return(
            <div className="feed">
                <Navigation />
                <div className="page-content">
                    <SideProfile />
                    <div>
                        <NewPost />
                        {this.state.posts.map((post) => {
                            return(
                                <TimeLine post={post.text} likes={post.likes.length} comments={post.comment.length} key={ post._id.toString()}/>
                            )
                        })}    
                    </div>
                    <Trends />
                </div>
            </div>
        )
    }
    
}

export default Feed;