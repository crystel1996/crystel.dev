import React, { FC, useEffect, useState } from 'react';
import { PDFViewerComponentInterface } from './interface';
import saveAs from 'file-saver';
import { Document, Page, pdfjs } from 'react-pdf';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

export const PDFViewer: FC<PDFViewerComponentInterface> = () => {

    const pdfFilePath = "/Assets/cv.pdf";

    const [numPages, setNumPages] = useState<number | null>(null);
    const [pageNumber, setPageNumber] = useState<number>(1);

    useEffect(() => {
        const loadPDF = async () => {
            try {
                const response = await fetch(pdfFilePath);
                const blob = await response.blob();
                saveAs(blob, 'Developer (ReactJS / NodeJS) Crystel.pdf');
            } catch (error) {
                console.error('Failed to download the PDF:', error);
            }
        };

        loadPDF();
    }, [pdfFilePath]);

    const onDocumentLoadSuccess = ({ numPages }: { numPages: number }) => {
        setNumPages(numPages);
    };

    return (
        <div>
            <Document file={pdfFilePath} onLoadSuccess={onDocumentLoadSuccess}>
                <Page pageNumber={pageNumber} />
            </Document>

            <p>
                Page {pageNumber} of {numPages}
            </p>
        </div>
    );

}
