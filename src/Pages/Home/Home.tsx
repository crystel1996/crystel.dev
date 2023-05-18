import React, { FC } from 'react';
import { HomePageInterface } from './interface';
import { AboutComponent, ContactComponent, Experience, Header, Landing, WorkComponent } from '../../Components';
import { Box } from '@mui/material';
import classes from './style.module.css';

export const HomePage: FC<HomePageInterface> = () => {
    return <Box className={classes.home}>
    
        <Header />
        
            <Landing />
     
        <Box className={classes.section}>
            <AboutComponent />
        </Box>
        <Box className={classes.section}>
            <Experience />
        </Box>
        <Box className={classes.section}>
            <WorkComponent />
        </Box>
        <Box className={classes.section}>
            <ContactComponent />
        </Box>
    </Box>
}