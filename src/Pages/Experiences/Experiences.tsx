import React, { FC } from 'react';
import { ExperiencePageInterface } from './interface';
import { Experience, Header } from '../../Components';
import classes from './style.module.css';
import { Box } from '@mui/material';

export const Experiences: FC<ExperiencePageInterface> = () => {
    return <Box className={classes.home}>
    
        <Header />

        <Experience />

    </Box>
}
