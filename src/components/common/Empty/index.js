import React from 'react';
import PropTypes from 'prop-types';

const Empty = ({ title, text }) => {
    return (
        <div className="empty-block">
            <h2>{title}</h2>
            <p>{text}</p>
        </div>
    );
}

export default Empty;

Empty.prototype = {
    title: PropTypes.string,
    text: PropTypes.string
}