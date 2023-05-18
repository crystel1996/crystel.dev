import React, { FC } from 'react';
import { LandingComponentInterface } from './interface';
import { Box, Button, Typography } from '@mui/material';
import classes from './style.module.css';

export const Landing: FC<LandingComponentInterface> = () => {

    return <Box className={classes.landingSection}>
        <Box className={classes.landingDefinite}>
            <Box className={classes.landingTitle}>
                <Typography variant="h1">Harimanana Crystel</Typography>
            </Box>
            <Box className={classes.landingSubtitle}>
                <Typography variant="h2">Javascript (ReactJS / NodeJs) Developer</Typography>
            </Box>
            <Box className={classes.landingText}>
                <Typography>I am a web developer who uses javascript with the React / NodeJs.</Typography>
            </Box>
            <Box className={classes.landingButton}>
                <Button size="large" LinkComponent="a" href="mailto:crystelratsimbazafy@gmail.com" variant='outlined'>Contact Me</Button>
            </Box>
        </Box>
    </Box>

}