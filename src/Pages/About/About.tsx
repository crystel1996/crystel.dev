import React, { FC } from 'react';
import { AboutPageInterface } from './interface';
import { AboutComponent, Header } from '../../Components';
import classes from './style.module.css';
import { Box } from '@mui/material';

export const AboutPage: FC<AboutPageInterface> = () => {

    return <Box className={classes.home}>
    
        <Header />
        <AboutComponent />

    </Box>

}