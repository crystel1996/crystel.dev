import React, { FC, useState } from 'react';
import { HeaderComponentInterface } from './interface';
import classes from './style.module.css'
import { Box, Drawer, IconButton, List, Typography } from '@mui/material';
import { Close, Menu } from '@mui/icons-material';
import classNames from 'classnames';
import { useNavigate } from 'react-router-dom';
import { MenuItem, MenuItemComponentInterface } from '../MenuList';
import { useMobileDevice } from '../../Hooks';

export const Header: FC<HeaderComponentInterface> = () => {

    const navigate = useNavigate();
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

    const MENUS: MenuItemComponentInterface[] = [
        { onClick: handleRedirect, label: 'Home', redirect:'home', classNameItem: classes.headerListMenuitem, classNameItemText: classes.headerListMenuitemText },
        { onClick: handleRedirect, label: 'About', redirect: 'about', classNameItem: classes.headerListMenuitem, classNameItemText: classes.headerListMenuitemText },
        { onClick: handleRedirect, label: 'Experiences', redirect: 'experiences', classNameItem: classes.headerListMenuitem, classNameItemText: classes.headerListMenuitemText },
        { onClick: handleRedirect, label: 'Work', redirect: 'work', classNameItem: classes.headerListMenuitem, classNameItemText: classes.headerListMenuitemText },
        { onClick: handleRedirect, label: 'Contact', redirect: 'contact', classNameItem: classes.headerListMenuitem, classNameItemText: classes.headerListMenuitemText },
        { onClick: handleRedirect, label: 'Download CV', redirect: 'download', classNameItem: classNames(classes.headerListMenuitem, classes.headerListMenuButton), classNameItemText: classes.headerListMenuitemText },
    ];

    const MENU_MOBILE: MenuItemComponentInterface[] = [
        { onClick: handleRedirect, label: 'Home', redirect: 'home', classNameItem: classes.headerListMenuitem, classNameItemText: classes.headerListMenuitemText },
        { onClick: handleRedirect, label: 'About', redirect: 'about', classNameItem: classes.headerListMenuitem, classNameItemText: classes.headerListMenuitemText },
        { onClick: handleRedirect, label: 'Experiences', redirect: 'experiences', classNameItem: classes.headerListMenuitem, classNameItemText: classes.headerListMenuitemText },
        { onClick: handleRedirect, label: 'Work', redirect: 'work', classNameItem: classes.headerListMenuitem, classNameItemText: classes.headerListMenuitemText },
        { onClick: handleRedirect, label: 'Contact', redirect: 'contact', classNameItem: classes.headerListMenuitem, classNameItemText: classes.headerListMenuitemText },
        { onClick: handleRedirect, label: 'Download CV', redirect: 'download', classNameItem: classNames(classes.headerListMenuitem, classes.headerListMenuButton), classNameItemText: classes.headerListMenuitemText },
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
                        return <MenuItem key={`${menu}_${index}`} redirect={menu.redirect} onClick={menu.onClick} label={menu.label} classNameItem={menu.classNameItem} classNameItemText={menu.classNameItemText} />
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