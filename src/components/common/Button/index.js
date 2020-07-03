import React from 'react';

const Button = ({
    disabled = false, 
    size, 
    text, 
    isWhite = false, 
    className = '',
    onClick
}) => {
    return (
        <button 
            className={`btn btn-${size} ${isWhite ? 'btn--white' : ''} ${className}`} 
            disabled={disabled} 
            onClick={onClick}
            >
            {text}
        </button>
    );
}

export default Button;
