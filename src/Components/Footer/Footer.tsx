import React, { FC } from 'react';
import { FooterComponentInterface } from './interface';
import { Box, Typography } from '@mui/material';

export const FooterComponent : FC<FooterComponentInterface> = () => {
    
    const date = new Date();
    
    return <Box>
        <Box>
            <Typography> {date.getFullYear()} Harimanana Crystel. All rights reserved.</Typography>
        </Box>
    </Box>
}