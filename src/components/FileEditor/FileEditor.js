import React, {useState} from 'react';
import PdfParser from '../../services/pdf.parser';
import Pagination from './Pagination/index';
import Coordinates from './Coordinates';
import './FileEditor.scss';
import Api from '../../services/api';
import FileData from './FileData/FileData';

const FileEditor = ({numPages, pageNumber, documentLoaded, coordinates, setFile, setPageNumber, setLoadingStatus}) => {

    const [fileData, setFileData] = useState(null);

    const onSelect = async event => {
        try {
            const file = event.target.files[0];
            const parsedFile = await PdfParser.parse(file);
            setFileData(null);
            setFile(parsedFile);
            getFileData(file);

        } catch (e) {
            alert(e);
        }

    };

    const getFileData = file => {
        setLoadingStatus(true);
        Api.getFileData(file).then((res) => {
            setFileData(res);
            setLoadingStatus(false);
        }).catch((e) => {
            console.log(e);
            setLoadingStatus(false);
        })
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
            <FileData fileData = {fileData}/>
            <Coordinates coordinates = {coordinates}/>
        </div>
    )
};


export default FileEditor;