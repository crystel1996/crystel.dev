import React from 'react';
import { MODULE_INTERFACE } from './../../Modules';
import { Download } from './Download';

export const DownloadModule: MODULE_INTERFACE[] = [
    {
        path: '/download',
        component: <Download />
    },
];