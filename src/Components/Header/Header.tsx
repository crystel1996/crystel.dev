import React, { FC } from 'react';
import { HeaderComponentInterface } from './interface';
import classes from './style.module.css'
import { Box, List, ListItem, ListItemText, Typography } from '@mui/material';
import classNames from 'classnames';

export const Header: FC<HeaderComponentInterface> = () => {

    return <Box className={classes.header}>
        <Box className={classes.headerLogo}>
            <Typography variant='h1' className={classes.headerLogo}>CRYSTEL</Typography>
        </Box>
        <Box className={classes.headerMenu}>
            <List className={classes.headerListMenu}>
                <ListItem className={classes.headerListMenuitem}>
                    <ListItemText className={classes.headerListMenuitemText}>About</ListItemText>
                </ListItem>
                <ListItem className={classes.headerListMenuitem}>
                    <ListItemText className={classes.headerListMenuitemText}>Experiences</ListItemText>
                </ListItem>
                <ListItem className={classes.headerListMenuitem}>
                    <ListItemText className={classes.headerListMenuitemText}>Work</ListItemText>
                </ListItem>
                <ListItem className={classes.headerListMenuitem}>
                    <ListItemText className={classes.headerListMenuitemText}>Contact</ListItemText>
                </ListItem>
                <ListItem className={classNames(classes.headerListMenuitem, classes.headerListMenuButton)}>
                    <ListItemText className={classes.headerListMenuitemText} >Download CV</ListItemText>
                </ListItem>
            </List>
        </Box>
    </Box>

}