import React, {useEffect} from 'react';
import { Document, Page, pdfjs  } from 'react-pdf';
import CanvasDrawer from '../../services/canvas-drawer';
import './file-viewer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `https://cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`; // loading pdf.worker.js

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
        <div className={`file-viewer ${file ? `file-viewer-selected` : ''}`}>
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