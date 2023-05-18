import React, { FC } from 'react';
import { GalleryComponentInterface } from './interface';
import { Box } from '@mui/material';


export const Gallery: FC<GalleryComponentInterface> = (props) => {

    return <Box className={props.classGalleryContent}>
        
        {props.listGalleries.map((gallery, index) => {
            return  <Box className={props.classGalleryItem} key={`${gallery.src}_${index}`}>
                        <img src={gallery.src} alt={gallery.alt} />
                    </Box> 
        })}
    </Box>

}
