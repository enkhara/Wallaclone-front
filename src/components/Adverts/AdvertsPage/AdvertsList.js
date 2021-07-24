import React from 'react';
import T from 'prop-types';
import Advert from './Advert';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { useStyles } from '../../shared/useStyles';


const AdvertsList = ({ adverts }) => {
	const classes = useStyles();
	return (
		<Container maxWidth="lg" className={classes.blogsContainer}>
			<Grid container spacing={10}>
				{adverts.map((advert) => (
					
						<Advert key={advert._id} {...advert} />
					
				))}
			</Grid>
		</Container>
	);
};




AdvertsList.propTypes = {
	adverts: T.array.isRequired,
};

export default AdvertsList;
