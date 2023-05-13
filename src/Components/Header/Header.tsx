import React, { FC, useState } from 'react';
import { HeaderComponentInterface } from './interface';
import classes from './style.module.css'
import { Box, Drawer, IconButton, List, ListItem, ListItemText, Typography } from '@mui/material';
import { Menu } from '@mui/icons-material';
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

    const MENUS: MenuItemComponentInterface[] = [
        { onClick: handleRedirect, label: 'About', classNameItem: classes.headerListMenuitem, classNameItemText: classes.headerListMenuitemText },
        { onClick: handleRedirect, label: 'Experiences', classNameItem: classes.headerListMenuitem, classNameItemText: classes.headerListMenuitemText },
        { onClick: handleRedirect, label: 'Work', classNameItem: classes.headerListMenuitem, classNameItemText: classes.headerListMenuitemText },
        { onClick: handleRedirect, label: 'Contact', classNameItem: classes.headerListMenuitem, classNameItemText: classes.headerListMenuitemText },
        { onClick: handleRedirect, label: 'Download CV', classNameItem: classNames(classes.headerListMenuitem, classes.headerListMenuButton), classNameItemText: classes.headerListMenuitemText },
    ];

    const MENU_MOBILE: MenuItemComponentInterface[] = [
        { onClick: handleRedirect, label: 'About', classNameItem: classes.headerListMenuitem, classNameItemText: classes.headerListMenuitemText },
        { onClick: handleRedirect, label: 'Experiences', classNameItem: classes.headerListMenuitem, classNameItemText: classes.headerListMenuitemText },
        { onClick: handleRedirect, label: 'Work', classNameItem: classes.headerListMenuitem, classNameItemText: classes.headerListMenuitemText },
        { onClick: handleRedirect, label: 'Contact', classNameItem: classes.headerListMenuitem, classNameItemText: classes.headerListMenuitemText },
        { onClick: handleRedirect, label: 'Download CV', classNameItem: classNames(classes.headerListMenuitem, classes.headerListMenuButton), classNameItemText: classes.headerListMenuitemText },
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
                        >
                            {
                                MENUS.map((menu) => {
                                    return <MenuItem onClick={menu.onClick} label={menu.label} classNameItem={menu.classNameItem} classNameItemText={menu.classNameItemText} />
                                })
                            }
                        </Drawer>
                    </Box>
        }

        return  <List className={classes.headerListMenu}>
                    {MENUS.map((menu) => {
                        return <MenuItem onClick={menu.onClick} label={menu.label} classNameItem={menu.classNameItem} classNameItemText={menu.classNameItemText} />
                    })}
                </List>

    }, [MENUS, MENU_MOBILE, isMobileDevice, anchorElMenuMobile]);

    return <Box className={classes.header}>
        <Box className={classes.headerLogo}>
            <Typography  className={classes.headerLogo}>CRYSTEL</Typography>
        </Box>
        <Box className={classes.headerMenu}>
            
            {LIST_MENU}

        </Box>
    </Box>

}