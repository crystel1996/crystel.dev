import React, { FC } from 'react';
import { ExperienceComponentInterface } from './interface';
import { Box } from '@mui/material';
import classes from './style.module.css';

export const Experience: FC<ExperienceComponentInterface> = () => {

    return <Box className={classes.experienceContent}>
        <Box className={classes.experienceLogo}>
            <img src="/Assets/css3.svg" alt="Css3" />
        </Box>
        <Box className={classes.experienceLogo}>
            <img src="/Assets/git.svg" alt="Git" />
        </Box>
        <Box className={classes.experienceLogo}>
            <img src="/Assets/graphql.svg" alt="Css3" />
        </Box>
        <Box className={classes.experienceLogo}>
            <img src="/Assets/html5.svg" alt="Css3" />
        </Box>
        <Box className={classes.experienceLogo}>
            <img src="/Assets/js.svg" alt="Css3" />
        </Box>
        <Box className={classes.experienceLogo}>
            <img src="/Assets/nestJS.svg" alt="Css3" />
        </Box>
        <Box className={classes.experienceLogo}>
            <img src="/Assets/nodeJS.svg" alt="Css3" />
        </Box>
        <Box className={classes.experienceLogo}>
            <img src="/Assets/postgresql.svg" alt="Css3" />
        </Box>
        <Box className={classes.experienceLogo}>
            <img src="/Assets/react.svg" alt="Css3" />
        </Box>
    </Box>

}