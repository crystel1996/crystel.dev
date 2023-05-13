import React from 'react';
import { MODULE_INTERFACE } from './../../Modules';
import { HomePage } from './Home';

export const HomeModule: MODULE_INTERFACE[] = [
    {
        path: '/home',
        component: <HomePage />
    },
    {
        path: '/',
        component: <HomePage />
    },
];