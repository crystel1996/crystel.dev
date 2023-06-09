import React, { FC } from 'react';
import { WorkPageInterface } from './interface';
import classes from './style.module.css';
import { Box } from '@mui/material';
import { Header, WorkComponent } from '../../Components';

export const Work: FC<WorkPageInterface> = () => {

    return <Box className={classes.home}>
        <Header />
        <WorkComponent />
    </Box>

}
