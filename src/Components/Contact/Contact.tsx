import React, { FC } from 'react';
import { ContactComponentInterface } from './interface';
import classes from './style.module.css';
import { Box } from '@mui/material';
import { TitleComponent } from '../Title';

export const ContactComponent: FC<ContactComponentInterface> = (props) => {
    return <Box className={classes.experienceContent}>
        <TitleComponent title="Contact" />
    </Box>
}
