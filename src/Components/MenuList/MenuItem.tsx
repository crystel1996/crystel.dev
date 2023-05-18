import { ListItem, ListItemText, Typography } from '@mui/material';
import React, { FC } from 'react';
import { MenuItemComponentInterface } from './interface';


export const MenuItem: FC<MenuItemComponentInterface> = (props) => {

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        event.stopPropagation();
        props.onClick(props.redirect ?? props.label);
    };

    return  <ListItem className={props.classNameItem} onClick={handleClick}>

                {props.isLink && <Typography component="a" href={props.redirect} target="_blank">{props.label}</Typography>}

                {!props.isLink && <ListItemText className={props.classNameItemText} >{props.label}</ListItemText>}
            </ListItem>

}