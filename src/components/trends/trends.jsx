import React from 'react';

import './trends.css' //the CSS for this component is being added here


const Trends = () => {
    return(
        <div className="trends">
            <h4>What's Happening</h4>
            <hr />
            <ul>
                <li>
                    <p className="trend-location">Trending Right Now</p>
                    Playstation 5 Restock?
                    <p className="trend-counts">18.7k Posts</p>
                </li>
                <hr />
                <li>
                    <p className="trend-location">Trending in the World</p>
                    Mentors for Programmers
                    <p className="trend-counts">12.7k Posts</p>
                </li>
                <hr />
                <li>
                    <p className="trend-location">Trending in the World</p>
                    Cross-Platform or Native?
                    <p className="trend-counts">21.2k Posts</p>
                </li>
                <hr />
                <li>
                    <p className="trend-location">Trending in the United States</p>
                    2020 Holiday Season
                    <p className="trend-counts">10.4k Posts</p>
                </li>
            </ul>
        </div>
    )
}

export default Trends;