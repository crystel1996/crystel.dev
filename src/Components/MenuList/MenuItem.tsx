import { ListItem, ListItemText } from '@mui/material';
import React, { FC } from 'react';
import { MenuItemComponentInterface } from './interface';


export const MenuItem: FC<MenuItemComponentInterface> = (props) => {

    const handleClick = (event: React.MouseEvent<HTMLElement>) => {
        event.stopPropagation();
        props.onClick(props.label);
    };

    return  <ListItem className={props.classNameItem} onClick={handleClick}>
                <ListItemText className={props.classNameItemText} >{props.label}</ListItemText>
            </ListItem>

}