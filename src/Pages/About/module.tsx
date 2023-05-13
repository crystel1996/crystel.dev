import React from 'react';
import { MODULE_INTERFACE } from './../../Modules';
import { AboutPage } from './About';

export const AboutModule: MODULE_INTERFACE[] = [
    {
        path: '/about',
        component: <AboutPage />
    },
];