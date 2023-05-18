import React, { FC, useState } from 'react';
import { HeaderComponentInterface } from './interface';
import classes from './style.module.css'
import { Box, Drawer, IconButton, List, Typography } from '@mui/material';
import { Close, Menu } from '@mui/icons-material';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { MenuItem, MenuItemComponentInterface } from '../MenuList';
import { useMobileDevice } from '../../Hooks';
import classnames from 'classnames';

export const Header: FC<HeaderComponentInterface> = () => {

    const navigate = useNavigate();
    
    const path = window.location.pathname.split('/')[1];

    console.log('[HISTORY]', window.location, path)

    const isMobileDevice = useMobileDevice();

    const [anchorElMenuMobile, setAnchorElMenuMobile] = useState<boolean>(false);

    const handleRedirect = (tab: string) => {
        navigate(`/${tab}`);
    };

    const handleShowMenuMobile = () => {
        setAnchorElMenuMobile(true);
    };

    const handleCloseMenuMobile = () => {
        setAnchorElMenuMobile(false);
    };

    const handleGoHome = () => {
        navigate('/')
    };

    const isActive = (tab: string) => {

        if (tab === 'home') {
            if (!path) {
                return true;
            }
        }

        return path === tab;
    };

    const MENUS: MenuItemComponentInterface[] = [
        { onClick: handleRedirect, label: 'Home', redirect:'home', classNameItem: classnames(classes.headerListMenuitem, isActive('home') ? classes.headerListMenuitemTextActive : null), classNameItemText: classnames(classes.headerListMenuitemText) },
        { onClick: handleRedirect, label: 'About', redirect: 'about', classNameItem: classnames(classes.headerListMenuitem, isActive('about') ? classes.headerListMenuitemTextActive : null), classNameItemText: classnames(classes.headerListMenuitemText) },
        { onClick: handleRedirect, label: 'Experiences', redirect: 'experiences', classNameItem: classnames(classes.headerListMenuitem, isActive('experiences') ? classes.headerListMenuitemTextActive : null), classNameItemText: classnames(classes.headerListMenuitemText) },
        { onClick: handleRedirect, label: 'Work', redirect: 'work', classNameItem: classnames(classes.headerListMenuitem, isActive('work') ? classes.headerListMenuitemTextActive : null), classNameItemText: classnames(classes.headerListMenuitemText) },
        { onClick: handleRedirect, label: 'Contact', redirect: 'contact', classNameItem: classnames(classes.headerListMenuitem, isActive('contact') ? classes.headerListMenuitemTextActive : null), classNameItemText: classnames(classes.headerListMenuitemText) },
        { onClick: handleRedirect, label: 'Download CV', redirect: 'download', classNameItem: classNames(classes.headerListMenuitem, classes.headerListMenuButton, isActive('download') ? classes.headerListMenuButtonActive : null), classNameItemText: classes.headerListMenuitemText },
    ];

    const MENU_MOBILE: MenuItemComponentInterface[] = [
        { onClick: handleRedirect, label: 'Home', redirect: 'home', classNameItem: classnames(classes.headerListMenuitem, isActive('home') ? classes.headerListMenuitemTextActive : null), classNameItemText: classnames(classes.headerListMenuitemText) },
        { onClick: handleRedirect, label: 'About', redirect: 'about', classNameItem: classnames(classes.headerListMenuitem, isActive('about') ? classes.headerListMenuitemTextActive : null), classNameItemText: classnames(classes.headerListMenuitemText) },
        { onClick: handleRedirect, label: 'Experiences', redirect: 'experiences', classNameItem: classnames(classes.headerListMenuitem, isActive('experiences') ? classes.headerListMenuitemTextActive : null), classNameItemText: classnames(classes.headerListMenuitemText) },
        { onClick: handleRedirect, label: 'Work', redirect: 'work', classNameItem: classnames(classes.headerListMenuitem, isActive('work') ? classes.headerListMenuitemTextActive : null), classNameItemText: classnames(classes.headerListMenuitemText) },
        { onClick: handleRedirect, label: 'Contact', redirect: 'contact', classNameItem: classnames(classes.headerListMenuitem, isActive('contact') ? classes.headerListMenuitemTextActive : null), classNameItemText: classnames(classes.headerListMenuitemText) },
        { onClick: handleRedirect, label: 'Download CV', redirect: 'download', classNameItem: classNames(classes.headerListMenuitem, classes.headerListMenuButton, isActive('download') ? classes.headerListMenuButtonActive : null), classNameItemText: classes.headerListMenuitemText },
    ];

    const LIST_MENU = React.useMemo(() => {
        if (isMobileDevice) {
            return  <Box className={classes.headerMobileMenu}>
                        <IconButton size="large" aria-label="Menu" onClick={handleShowMenuMobile}>
                            <Menu fontSize='large' htmlColor='white' />
                        </IconButton>
                        <Drawer
                            anchor="right"
                            open={anchorElMenuMobile}
                            onClose={handleCloseMenuMobile}
                            classes={{ paper: classes.menuDrawer }}
                        >
                            <Box className={classes.closeMenu} onClick={handleCloseMenuMobile}>
                                <Box>
                                    <Typography className={classes.titleMenuMobile}>Menu</Typography>
                                </Box>
                                <Box>
                                    <Close />
                                </Box>
                            </Box>
                            {
                                MENUS.map((menu, index) => {

                                    return <MenuItem 
                                            key={`${menu}_${index}`}
                                            isLink={menu.isLink}
                                            redirect={menu.redirect}
                                            onClick={menu.onClick} 
                                            label={menu.label} 
                                            classNameItem={menu.classNameItem} 
                                            classNameItemText={menu.classNameItemText} 
                                    />
                                })
                            }
                        </Drawer>
                    </Box>
        }

        return  <List className={classes.headerListMenu}>
                    {MENUS.map((menu, index) => {
                        return <MenuItem key={`${menu}_${index}`} isLink={menu.isLink} redirect={menu.redirect} onClick={menu.onClick} label={menu.label} classNameItem={menu.classNameItem} classNameItemText={menu.classNameItemText} />
                    })}
                </List>

    }, [MENUS, MENU_MOBILE, isMobileDevice, anchorElMenuMobile]);

    return <Box className={classes.header}>
        <Box className={classes.headerLogo} onClick={handleGoHome}>
            <Typography  className={classes.headerLogo}>CRYSTEL</Typography>
        </Box>
        <Box className={classes.headerMenu}>
            
            {LIST_MENU}

        </Box>
    </Box>

}