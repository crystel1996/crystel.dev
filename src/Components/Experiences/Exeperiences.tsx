import React, { FC } from 'react';
import { ExperienceComponentInterface } from './interface';
import { Box, List, ListItem, ListItemIcon, ListItemText, Typography } from '@mui/material';
import classes from './style.module.css';
import { TaskAlt } from '@mui/icons-material';
import { Gallery, GalleryItem } from '../Gallery';
import { TitleComponent } from '../Title';

const LIST_GALLERIES: GalleryItem[] = [
    { src: "/Assets/css3.svg", alt: "Css3" },
    { src: "/Assets/git.svg", alt: "Git" },
    { src: "/Assets/graphql.svg", alt: "Graphql" },
    { src: "/Assets/html5.svg", alt: "HTML5" },
    { src: "/Assets/js.svg", alt: "JS" },
    { src: "/Assets/nestJS.svg", alt: "NestJS" },
    { src: "/Assets/nodeJS.svg", alt: "Node JS" },
    { src: "/Assets/postgresql.svg", alt: "PostgreSQL" },
    { src: "/Assets/react.svg", alt: "React" }
];

export const Experience: FC<ExperienceComponentInterface> = () => {

    return <Box className={classes.experienceContent}>
        <TitleComponent title="Professional Experience" />
        <Gallery 
            classGalleryContent={classes.experiecenceListTechno} 
            classGalleryItem={classes.experienceLogo}  
            listGalleries={LIST_GALLERIES}
        />
        <Box className={classes.listExperiences}>
            <Box className={classes.experiencesItem}>
                <Box className={classes.experiencesTitle}>
                    <Typography variant="h4">Developer ReactJS / NodeJS</Typography>
                    <Typography className={classes.experiencesLibelle}>Date:<Typography component="span">December 2020 - Now</Typography></Typography>
                    <Typography className={classes.experiencesLibelle}>Company:<Typography component="span"> Digital4Win</Typography></Typography>
                    <Typography className={classes.experiencesLibelle}>Techno:<Typography component="span">ReactJS, NodeJS, NestJs, Graphql, Git, Postgresql, js, css3</Typography></Typography>
                </Box>
                <Box>
                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <TaskAlt htmlColor="#17e821" />
                            </ListItemIcon>
                            <ListItemText>Creation of apis for managing customer and supplier relations</ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <TaskAlt htmlColor="#17e821" />
                            </ListItemIcon>
                            <ListItemText>Creation of apis for managing customer appointments</ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <TaskAlt htmlColor="#17e821" />
                            </ListItemIcon>
                            <ListItemText>Creation of user interfaces </ListItemText>
                        </ListItem>
                    </List>
                </Box>
            </Box>
            <Box className={classes.experiencesItem}>
                <Box className={classes.experiencesTitle}>
                    <Typography variant="h4">Developer PHP</Typography>
                    <Typography className={classes.experiencesLibelle}>Date:<Typography component="span">December 2019 - Mars 2020</Typography> </Typography>
                    <Typography className={classes.experiencesLibelle}>Company:<Typography component="span">Nir'Info</Typography></Typography>
                    <Typography className={classes.experiencesLibelle}>Techno:<Typography component="span"> PHP, MySql, HTML/Css, Js</Typography></Typography>
                </Box>
                <Box>
                    <List>
                        <ListItem>
                            <ListItemIcon>
                                <TaskAlt htmlColor="#17e821" />
                            </ListItemIcon>
                            <ListItemText>
                                Creation of apis to manage a school establishment
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <TaskAlt htmlColor="#17e821" />
                            </ListItemIcon>
                            <ListItemText>
                                Creation of user interfaces for schools
                            </ListItemText>
                        </ListItem>
                        <ListItem>
                            <ListItemIcon>
                                <TaskAlt htmlColor="#17e821" />
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