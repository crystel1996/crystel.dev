import React, { FC } from 'react';
import { PDFViewerComponentInterface } from './interface';
import { Viewer, Worker, SpecialZoomLevel } from '@react-pdf-viewer/core';
import { defaultLayoutPlugin } from '@react-pdf-viewer/default-layout';
import classes from './style.module.css';

import '@react-pdf-viewer/core/lib/styles/index.css';
import '@react-pdf-viewer/default-layout/lib/styles/index.css';
import { Box } from '@mui/material';
import { Header } from '../Header';

export const PDFViewer: FC<PDFViewerComponentInterface> = () => {

    const defaultLayoutPluginInstance = defaultLayoutPlugin();

    return (
        <Box className={classes.home}>
            <Header />
            <Box className={classes.cvContent}>
                <Worker workerUrl="https://unpkg.com/pdfjs-dist@3.6.172/build/pdf.worker.js">
                    <Box

                        className={classes.cv}

                    >
                        <Viewer
                            fileUrl={`/Assets/Developer-(ReactJS -  NodeJS)-Crystel.pdf`}
                            plugins={[defaultLayoutPluginInstance]}
                            defaultScale={SpecialZoomLevel.PageFit}
                        />
                    </Box>
                </Worker>
            </Box>
        </Box>
    );

}
