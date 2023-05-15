import React, { FC } from 'react';
import { ExperienceComponentInterface } from './interface';
import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import classes from './style.module.css';
import { TaskAlt } from '@mui/icons-material';

export const Experience: FC<ExperienceComponentInterface> = () => {

    return <Box className={classes.experienceContent}>
        <Box className={classes.experienceTitle}>
            <Typography>List of technologies</Typography>
        </Box>
        <Box className={classes.experiecenceListTechno}>
            <Box className={classes.experienceLogo}>
                <img src="/Assets/css3.svg" alt="Css3" />
            </Box>
            <Box className={classes.experienceLogo}>
                <img src="/Assets/git.svg" alt="Git" />
            </Box>
            <Box className={classes.experienceLogo}>
                <img src="/Assets/graphql.svg" alt="Css3" />
            </Box>
            <Box className={classes.experienceLogo}>
                <img src="/Assets/html5.svg" alt="Css3" />
            </Box>
            <Box className={classes.experienceLogo}>
                <img src="/Assets/js.svg" alt="Css3" />
            </Box>
            <Box className={classes.experienceLogo}>
                <img src="/Assets/nestJS.svg" alt="Css3" />
            </Box>
            <Box className={classes.experienceLogo}>
                <img src="/Assets/nodeJS.svg" alt="Css3" />
            </Box>
            <Box className={classes.experienceLogo}>
                <img src="/Assets/postgresql.svg" alt="Css3" />
            </Box>
            <Box className={classes.experienceLogo}>
                <img src="/Assets/react.svg" alt="Css3" />
            </Box>
        </Box>
        <Box className={classes.listExperiences}>
            <Box className={classes.experiencesItem}>
                <Box className={classes.experiencesTitle}>
                    <Typography variant="h4">Developer ReactJS / NodeJS</Typography>
                    <Typography>Date: December 2020 - Now</Typography>
                    <Typography>Company: Digital4Win</Typography>
                    <Typography>Techno: ReactJS, NodeJS, NestJs, Graphql, Git, Postgresql, js, css3</Typography>
                </Box>
                <Box>
                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <TaskAlt color="success" />
                            </ListItemIcon>
                            <ListItemText>Creation of apis for managing customer and supplier relations</ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <TaskAlt color="success" />
                            </ListItemIcon>
                            <ListItemText>Creation of apis for managing customer appointments</ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <TaskAlt color="success" />
                            </ListItemIcon>
                            <ListItemText>Creation of user interfaces </ListItemText>
                        </ListItem>
                    </List>
                </Box>
            </Box>
            <Box className={classes.experiencesItem}>
                <Box className={classes.experiencesTitle}>
                    <Typography variant="h4">Developer PHP</Typography>
                    <Typography>Date: December 2019 - Mars 2020</Typography>
                    <Typography>Company: Nir'Info</Typography>
                    <Typography>Techno: PHP, MySql, HTML/Css, Js</Typography>
                </Box>
                <Box>
                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <TaskAlt color="success" />
                            </ListItemIcon>
                            <ListItemText>
                                Creation of apis to manage a school establishment
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <TaskAlt color="success" />
                            </ListItemIcon>
                            <ListItemText>
                                Creation of user interfaces for schools
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <TaskAlt color="success" />
                            </ListItemIcon>
                            <ListItemText>
                                Creation of user interfaces for a hotel showcase site
                            </ListItemText>
                        </ListItem>
                    </List>
                </Box>
            </Box>
        </Box>
    </Box>

}