import React from 'react';

const Button = ({ description, src, className, imgClassname }) => {
    return (
        <button className={className}><img src={src} alt="" className={imgClassname}/> {description}</button>
    )
}

export default Button;
