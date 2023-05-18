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
                            <ListItemText>
                                <Typography component="a" href="tel:+261327307449">+261 32 73 074 49</Typography>
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <LinkedIn htmlColor='#70b5f9' />
                            </ListItemIcon>
                            <ListItemText>
                                <Typography target="_blank" component="a" href="https://www.linkedin.com/in/crystel-ratsimbazafy-996a5417a/">Crystel Ratsimbazafy</Typography>
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <GitHub htmlColor='#161b22' />
                            </ListItemIcon>
                            <ListItemText>
                                <Typography target="_blank" component="a" href="https://github.com/crystel1996">crystel1996</Typography>
                            </ListItemText>
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
