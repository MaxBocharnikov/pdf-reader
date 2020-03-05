import React from 'react';
import './Coordinates.scss';

const Coordinates = ({coordinates}) => {
    if(!coordinates) return null;
    const coordinatesToShow = [
        coordinates[1],
        coordinates[2],
        coordinates[0],
        coordinates[3],
    ];
    const renderedCoordinates = coordinatesToShow.map((coordinate) => {
        return (
             <div key={coordinate.point} className="coordinate-item">
                 {coordinate.point}
                 <div>
                     <span> {coordinate.x},</span>
                     <span> {coordinate.y}</span>
                 </div>
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