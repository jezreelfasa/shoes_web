// Star.jsx
import React from 'react';

function Star({ selected, onSelect, style }) {
    const starStyle = {
        color: selected ? 'gold' : 'gray', // Adjust the colors as needed
        cursor: 'pointer',
        fontSize: "16px",
    };

    return (
        <span style={starStyle} onClick={onSelect}>
            ★
        </span>
    );
}

export default Star;
