import React from 'react';

import notFound from '../../assets/notFound.svg'
import './pageNotFound.css'

const pageNotFound = () => {
    return(
        <div className="pageNotFound">
            <img src={notFound} alt="pageNotFound" />
        </div>
    )
}

export default pageNotFound;