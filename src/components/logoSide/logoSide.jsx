import React from 'react';

import logo from '../../assets/mainLogo.svg'
import './logoSide.css'

const logoSide = () => {
    return(
        <div className="logoSide">
            <img src={logo} alt="logo" />
        </div>
    )
}

export default logoSide;