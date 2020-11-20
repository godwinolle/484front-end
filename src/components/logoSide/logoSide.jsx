import React from 'react';

import logo from '../../assets/DevChatter-LogoWhite.png'
import './logoSide.css'

const logoSide = () => {
    return(
        <div className="logoSide">
            <img src={logo} alt="logo" />
        </div>
    )
}

export default logoSide;