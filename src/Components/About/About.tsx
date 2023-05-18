import React, { FC } from 'react';
import { AboutComponentInterface } from './interface';
import { Box, Typography } from '@mui/material';
import classes from './style.module.css';

export const AboutComponent: FC<AboutComponentInterface> = () => {

    return <Box className={classes.aboutSection}>
        <Box className={classes.aboutTitle}>
            <Typography>About</Typography>
        </Box>
        <Box className={classes.aboutImage}>
            <img src="https://media.licdn.com/dms/image/C5603AQHHnZsbq8dpug/profile-displayphoto-shrink_100_100/0/1645086082772?e=1686787200&v=beta&t=tSBT6uhqnwvZAOCy4Me9Ddn9R9dgoClOe-jruD4Bv3Q" alt="Logo" />
        </Box>
        <Box className={classes.aboutText}>
            <Typography>
                I am a dedicated and skilled JavaScript developer, specializing in React and other popular JavaScript libraries and frameworks. With extensive experience in web development, I take pride in my ability to create innovative and high-quality solutions for my clients.
                As a developer, I am constantly seeking to expand my knowledge and stay up-to-date with the latest technologies and best practices in the industry. This passion for learning and growth is what drives me to consistently deliver exceptional work that meets the needs of my clients.
                My expertise in React and other JavaScript libraries and frameworks allows me to create dynamic and responsive user interfaces, as well as scalable and performant web applications. I believe that clear and effective communication with clients is essential to the success of any project, and I strive to maintain open lines of communication throughout the development process.
                If you are looking for a reliable and talented JavaScript developer with a focus on React and other libraries and frameworks, I am ready to help you bring your web development projects to life. Please don't hesitate to contact me to discuss your needs and how I can be of service.
            </Typography>
        </Box>
    </Box>

}
