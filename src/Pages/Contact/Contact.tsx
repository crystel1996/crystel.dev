import React, { FC } from 'react';
import { ContactPageInterface } from './interface';
import classes from './style.module.css';
import { Box } from '@mui/material';
import { ContactComponent, Header } from '../../Components';

export const ContactPage: FC<ContactPageInterface> = () => {
    return <Box className={classes.home}>
    
        <Header />

        <ContactComponent />

    </Box>
}
