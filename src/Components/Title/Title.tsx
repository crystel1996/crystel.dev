import React, { FC } from 'react';
import { TitleComponentInterface } from './interface';
import { Box, Typography } from '@mui/material';
import classes from './style.module.css';

export const TitleComponent: FC<TitleComponentInterface> = (props) => {

    return  <Box className={classes.title}>
                <Typography>{props.title}</Typography>
            </Box>

}
