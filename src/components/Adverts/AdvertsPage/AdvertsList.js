import React from 'react';
import Advert from './Advert';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { useStyles } from '../../shared/useStyles';

const AdvertsList = ({ adverts }) =>{
    const classes = useStyles();
    return (
        <Container maxWidth="lg" className={classes.blogsContainer}>
            <Grid container spacing={3}>
                {adverts.map(advert=>(
                    <Advert
                        key={advert._id}
                        {...advert}
                    />
                ))} 
            </Grid>
        </Container>
    );
}

export default AdvertsList;