import React from 'react';
import { MODULE_INTERFACE } from './../../Modules';
import { Experiences } from './Experiences';

export const ExperienceModule: MODULE_INTERFACE[] = [
    {
        path: '/experiences',
        component: <Experiences />
    },
];