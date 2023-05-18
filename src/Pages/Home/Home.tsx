import React, { FC } from 'react';
import { HomePageInterface } from './interface';
import { AboutComponent, ContactComponent, Experience, FooterComponent, Header, Landing, WorkComponent } from '../../Components';
import { Box } from '@mui/material';
import classes from './style.module.css';
import classnames from 'classnames';

export const HomePage: FC<HomePageInterface> = () => {
    return <Box className={classes.home}>
    
        <Header />
        
            <Landing />
     
        <Box className={classnames(classes.section, classes.aboutSection)}>
            <AboutComponent />
        </Box>
        <Box className={classes.section}>
            <Experience />
        </Box>
        <Box className={classnames(classes.section, classes.workSection)}>
            <WorkComponent />
        </Box>
        <Box className={classnames(classes.section, classes.contactSection)}>
            <ContactComponent />
        </Box>
        <Box className={classnames(classes.footerSection)}>
            <FooterComponent />
        </Box>
    </Box>
}