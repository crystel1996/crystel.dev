import React, { FC } from 'react';
import { HeaderComponentInterface } from './interface';
import classes from './style.module.css'
import { Box, IconButton, List, ListItem, ListItemText, Typography } from '@mui/material';
import { Menu } from '@mui/icons-material';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { MenuItem, MenuItemComponentInterface } from '../MenuList';

export const Header: FC<HeaderComponentInterface> = () => {

    const navigate = useNavigate();

    const handleRedirect = (tab: string) => {
        navigate(`/${tab}`);
    };

    const handleShowMenu = () => {
        
    };

    const MENUS: MenuItemComponentInterface[] = [
        { onClick: handleRedirect, label: 'About', classNameItem: classes.headerListMenuitem, classNameItemText: classes.headerListMenuitemText },
        { onClick: handleRedirect, label: 'Experiences', classNameItem: classes.headerListMenuitem, classNameItemText: classes.headerListMenuitemText },
        { onClick: handleRedirect, label: 'Work', classNameItem: classes.headerListMenuitem, classNameItemText: classes.headerListMenuitemText },
        { onClick: handleRedirect, label: 'Contact', classNameItem: classes.headerListMenuitem, classNameItemText: classes.headerListMenuitemText },
        { onClick: handleRedirect, label: 'Download CV', classNameItem: classNames(classes.headerListMenuitem, classes.headerListMenuButton), classNameItemText: classes.headerListMenuitemText },
    ];

    return <Box className={classes.header}>
        <Box className={classes.headerLogo}>
            <Typography  className={classes.headerLogo}>CRYSTEL</Typography>
        </Box>
        <Box className={classes.headerMenu}>
            <List className={classes.headerListMenu}>
                {MENUS.map((menu) => {
                    return <MenuItem onClick={menu.onClick} label={menu.label} classNameItem={menu.classNameItem} classNameItemText={menu.classNameItemText} />
                })}
            </List>

            <Box className={classes.headerMobileMenu}>
                <IconButton size="large" aria-label="Menu" onClick={handleShowMenu}>
                    <Menu fontSize='large' htmlColor='white' />
                </IconButton>
            </Box>

        </Box>
    </Box>

}