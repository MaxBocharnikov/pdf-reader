import React, {useState, Fragment} from 'react';
import FileEditor from '../FileEditor';
import FileViewer from '../FileViewer/';
import 'bootstrap/dist/css/bootstrap.css';
import './App.scss';
import Spinner from '../Spinner/';

const App = () => {
    const [file, setFile] = useState(null);
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [documentLoaded, setDocumentLoaded] = useState(false);
    const [coordinates, setCoordinates] = useState(null);
    const [loadingStatus, setLoadingStatus] = useState(false);

    const spinner = loadingStatus ? <Spinner/> : null;

    return (
        <Fragment>
            {spinner}
            <div className="container">
                <FileEditor
                    file = {file}
                    numPages = {numPages}
                    pageNumber = {pageNumber}
                    documentLoaded = {documentLoaded}
                    coordinates = {coordinates}
                    setFile = {setFile}
                    setPageNumber = {setPageNumber}
                    setLoadingStatus = {setLoadingStatus}
                />
                <FileViewer
                    file = {file}
                    pageNumber = {pageNumber}
                    setNumPages = {setNumPages}
                    setPageNumber = {setPageNumber}
                    setDocumentLoaded = {setDocumentLoaded}
                    setCoordinates = {setCoordinates}
                    documentLoaded = {documentLoaded}
                />
            </div>
        </Fragment>
    )
};


export default App;