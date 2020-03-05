import React from 'react';

import './FileData.css';

const FileData = ({fileData}) => {
    if(!fileData) return null;
    return (
        <ul className="file-data">
            <li className="file-data-item">Construction Type: {fileData.constructionType}</li>
        </ul>
    )
};

export default FileData;