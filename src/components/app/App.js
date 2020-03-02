import React, {useState} from 'react';
import FileEditor from '../file-editor/';
import FileViewer from '../file-viewer/';
import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

const App = () => {
    const [file, setFile] = useState(null);
    const [numPages, setNumPages] = useState(null);
    const [pageNumber, setPageNumber] = useState(1);
    const [documentLoaded, setDocumentLoaded] = useState(false);
    const [coordinates, setCoordinates] = useState(null);

    return (
        <div className="container">
           <FileEditor
               numPages = {numPages}
               pageNumber = {pageNumber}
               documentLoaded = {documentLoaded}
               coordinates = {coordinates}
               setFile = {setFile}
               setPageNumber = {setPageNumber}
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
    )
};


export default App;