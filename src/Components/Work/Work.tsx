import React, { FC } from 'react';
import { WorkComponentInterface } from './interface';
import classes from './style.module.css'
import { Box, Typography } from '@mui/material';

export const WorkComponent: FC<WorkComponentInterface> = () => {

    return <Box className={classes.workContent}>
        <Box className={classes.workTitle}>
            <Typography>List of My Work</Typography>
        </Box>
    </Box>

}
