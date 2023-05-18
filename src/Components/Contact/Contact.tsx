import React, { FC } from 'react';
import { ContactComponentInterface } from './interface';
import classes from './style.module.css';
import { Box, Button, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import { TitleComponent } from '../Title';
import { Email, GitHub, LinkedIn, WhatsApp } from '@mui/icons-material';

export const ContactComponent: FC<ContactComponentInterface> = (props) => {
    return <Box className={classes.contactContent}>
        <TitleComponent title="Contact" />
        <Box className={classes.contactBox}>
            <Box className={classes.contactItem}>
                <Typography variant="h4">Social Network</Typography>
                <Box>
                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <WhatsApp htmlColor='#42cba5' />
                            </ListItemIcon>
                            <ListItemText>+261 32 73 074 49</ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <LinkedIn htmlColor='#70b5f9' />
                            </ListItemIcon>
                            <ListItemText>Crystel Ratsimbazafy</ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <GitHub htmlColor='#161b22' />
                            </ListItemIcon>
                            <ListItemText>crystel1996</ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <Email htmlColor='#cc4340' />
                            </ListItemIcon>
                            <ListItemText>crystelratsimbazafy@gmail.com</ListItemText>
                        </ListItem>
                    </List>
                </Box>
            </Box>
            <Box className={classes.contactItem}>
                <Box className={classes.contactSatisfying}>
                    <Typography>If you have projects to carry out, do not hesitate to contact me. Collaborate with us as soon as possible.</Typography>
                </Box>
                <Box className={classes.contactCollaborateLink}>
                    <Button size="large" LinkComponent="a" href="mailto:crystelratsimbazafy@gmail.com" variant='outlined'>Contact Me</Button>
                </Box>
            </Box>
        </Box>
    </Box>
}
