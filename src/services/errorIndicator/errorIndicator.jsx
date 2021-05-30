import React from 'react';
import './errorIndicator.css';
import imgStarOfDeath from './depositphotos_238390542-stock-illustration-simple-vector-illustration-icon-of.jpg';

const ErrorIndicator = ()=>{
    return (
        <div className = 'error-indicator'>
            <img src={imgStarOfDeath} alt='star of death'/>
            <span className = 'boom'>BOOM!</span>
            <span>something has gone terrible wrong</span>
            <span>(but we already send droids to fix it)</span>
        </div>
    )
}

export default ErrorIndicator;