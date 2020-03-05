import React from 'react';

import './FileData.scss';

const FileData = ({fileData}) => {
    if(!fileData) return null;
    const fileDataItems = fileData.constructionTypeEntries.map((item, idx) => {
        return (
            <li key={idx} className="file-data-item">{item.name}: <span>{item.value}</span></li>
        )
    });
    return (
        <ul className="file-data">
            {fileDataItems}
        </ul>
    )
};

export default FileData;