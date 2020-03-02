import React, {useEffect} from 'react';
import { Document, Page } from 'react-pdf/dist/entry.webpack';
import CanvasDrawer from '../../services/canvas-drawer';
import './file-viewer.css';

const FileViewer = ({file, pageNumber, documentLoaded, setNumPages, setPageNumber, setDocumentLoaded, setCoordinates}) => {

    const onDocumentLoadSuccess = ({ numPages }) => {
        setDocumentLoaded(true);
        setNumPages(numPages);
    };

    useEffect(() => {
        let canvas;
        setCoordinates(null);
        if(file && documentLoaded) {
            setTimeout(() => {
                canvas = new CanvasDrawer('.pdf-viewer canvas', setCoordinates);
                canvas.register();
            }, 300);
        }
        return () => {
            canvas && canvas.unRegister();
        }
    }, [file, pageNumber, documentLoaded]);

    useEffect(() => {
        setPageNumber(1);
    }, [file]);


    return (
        <div>
            <Document
                file={file}
                onLoadSuccess={onDocumentLoadSuccess}
                className='pdf-viewer'
            >
                <Page pageNumber={pageNumber} />
                <canvas className="draw-canvas"></canvas>
            </Document>
        </div>
    )
};


export default FileViewer;