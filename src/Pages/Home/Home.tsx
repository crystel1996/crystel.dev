import React, { FC } from 'react';
import { HomePageInterface } from './interface';
import { Header } from '../../Components';
import { Box } from '@mui/material';
import classes from './style.module.css';

export const HomePage: FC<HomePageInterface> = () => {
    return <Box className={classes.home}>
    
        <Header />

    </Box>
}