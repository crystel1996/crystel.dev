import React, { FC } from 'react';
import { WorkComponentInterface } from './interface';
import classes from './style.module.css'
import { Box, Typography } from '@mui/material';

export const WorkComponent: FC<WorkComponentInterface> = () => {

    return <Box className={classes.workContent}>
        <Box className={classes.workTitle}>
            <Typography>Personal Projects</Typography>
        </Box>
        <Box className={classes.listWork}>
            <Box className={classes.workItem}>
                <Box className={classes.workImage}>
                    <img src="/Assets/project-photograph-portfolio.png" alt="Portfolio photograph" />
                </Box>
                <Box className={classes.workBody}>
                    <Box className={classes.workItemTitle}>
                        <Typography variant="h4">Portfolio Photograph</Typography>
                    </Box>
                    <Box className={classes.workDescription}>
                        <Box className={classes.workDescriptionItem}>
                            <Typography>Link: 
                                <Typography component="a" href="https://crystel1996.github.io/NetWedding/" target='_blank'> https://crystel1996.github.io/NetWedding/</Typography>
                            </Typography>            
                        </Box>
                        <Box className={classes.workDescriptionItem}>
                            <Typography>Repository: 
                                <Typography component="a" href="https://github.com/crystel1996/NetWedding"> https://github.com/crystel1996/NetWedding</Typography>
                            </Typography>
                        </Box>
                        <Box className={classes.workDescriptionItem}>
                            <Typography>Techno:
                                <Typography component="span"> ReactJS, JS, HTML5, CSS3</Typography>
                            </Typography>
                            
                        </Box>
                        <Box className={classes.workDescriptionItem}>
                            <Typography>Description:
                                <Typography component="span"> It’s a prototype of a photographer’s portfolio. </Typography>
                            </Typography>
                            
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box className={classes.workItem}>
                <Box className={classes.workImage}>
                    <img src="/Assets/my-portfolio.png" alt="My portfolio" />
                </Box>
                <Box className={classes.workBody}>
                    <Box className={classes.workItemTitle}>
                        <Typography variant="h4">My Portfolio</Typography>
                    </Box>
                    <Box className={classes.workDescription}>
                        <Box className={classes.workDescriptionItem}>
                            <Typography>Link: 
                                <Typography component="a" href="https://crystel.vercel.app/" target='_blank'> https://crystel.vercel.app/</Typography>
                            </Typography>            
                        </Box>
                        <Box className={classes.workDescriptionItem}>
                            <Typography>Repository: 
                                <Typography component="a" href="https://github.com/crystel1996/crystel.dev"> https://github.com/crystel1996/crystel.dev</Typography>
                            </Typography>
                        </Box>
                        <Box className={classes.workDescriptionItem}>
                            <Typography>Techno:
                                <Typography component="span"> ReactJS, JS, HTML5, CSS3, Material-UI</Typography>
                            </Typography>
                            
                        </Box>
                        <Box className={classes.workDescriptionItem}>
                            <Typography>Description:
                                <Typography component="span"> It’s my portfolio that describes my career path. </Typography>
                            </Typography>
                            
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    </Box>

}
