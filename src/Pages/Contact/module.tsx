import React from 'react';
import { MODULE_INTERFACE } from './../../Modules';
import { ContactPage } from './Contact';

export const ContactModule: MODULE_INTERFACE[] = [
    {
        path: '/contact',
        component: <ContactPage />
    },
]