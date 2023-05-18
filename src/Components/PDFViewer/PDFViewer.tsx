import React, { FC, useEffect, useState } from 'react';
import { PDFViewerComponentInterface } from './interface';
import saveAs from 'file-saver';
import { Document, Page, pdfjs } from 'react-pdf';
import { useNavigate } from 'react-router-dom'; 

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export const PDFViewer: FC<PDFViewerComponentInterface> = () => {

    const navigate = useNavigate();

    const pdfFilePath = "/Assets/cv.pdf";

    const [numPages, setNumPages] = useState<number | null>(null);
    const [pageNumber, setPageNumber] = useState<number>(1);

    const loadPDF = async () => {
        try {
            const response = await fetch(pdfFilePath);
            const blob = await response.blob();
            console.log('[DOWNLOAD]')
            saveAs(blob, 'Developer (ReactJS / NodeJS) Crystel.pdf');
            navigate(-1);
        } catch (error) {
            console.error('Failed to download the PDF:', error);
        }
    };

    const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
        loadPDF();
    };

    return (
        <div>
            <Document file={pdfFilePath} onLoadSuccess={onDocumentLoadSuccess} externalLinkTarget='_blank'>
                <Page pageNumber={pageNumber} />
            </Document>

            <p>
                Page {pageNumber} of {numPages}
            </p>
        </div>
    );

}
