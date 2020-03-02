import React from 'react';
import './coordinates.css';

const Coordinates = ({coordinates}) => {
    if(!coordinates) return null;
    const renderedCoordinates = coordinates.map((coordinate) => {
        return (
             <div className="coordinate-item">
                 {coordinate.point}:
                 <span> {coordinate.x},</span>
                 <span> {coordinate.y},</span>
             </div>
        )
    });
    return (
        <div className="coordinates">
            {renderedCoordinates}
        </div>
    )
};


export default Coordinates;