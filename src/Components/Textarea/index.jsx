import React from 'react';
import './styles.scss'

const Textarea = ({ type, name, className, placeholder, handleOnChange, handleKeyDown, handleKeyUp }) => {
    return (
        <textarea onKeyDown={handleKeyDown} onKeyUp={handleKeyUp} rows="1" cols="70" type={type} name={name} className={className} placeholder={placeholder} onChange={handleOnChange} />
    )
}

export default Textarea;
