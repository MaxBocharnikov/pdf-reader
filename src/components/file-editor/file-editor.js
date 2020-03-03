import React from 'react';
import PdfParser from '../../services/pdf-parser';
import Pagination from './pagination';
import Coordinates from './coordinates';
import './file-editor.css';

const FileEditor = ({numPages, pageNumber, documentLoaded, coordinates, setFile, setPageNumber}) => {

    const onSelect = async event => {
        try {
            const file = event.target.files[0];
            const parsedFile = await PdfParser.parse(file);
            setFile(parsedFile);
        } catch (e) {
            alert(e);
        }

    };

    const setPage = page => {
        if(!page || page > numPages) return;
        setPageNumber(page);
    };

    return (
        <div className='file-editor'>
            <div className="form-group">
                <input
                    type="file"
                    className="form-control-file"
                    id="fileSelector"
                    name="fileSelector"
                    onChange={onSelect}
                />
            </div>
            <Pagination
                show={documentLoaded}
                currentPage = {pageNumber}
                pageCount = {numPages}
                setPage = {setPage}
            />
            <Coordinates coordinates = {coordinates}/>
        </div>
    )
};


export default FileEditor;