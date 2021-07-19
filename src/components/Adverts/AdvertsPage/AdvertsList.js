import React from 'react';
import T from 'prop-types';
import Advert from './Advert';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import { useStyles } from '../../shared/useStyles';
import { Link } from 'react-router-dom';

const AdvertsList = ({ adverts }) => {
	const classes = useStyles();
	return (
		<Container maxWidth="lg" className={classes.blogsContainer}>
			<Grid container spacing={3}>
				{adverts.map((advert) => (
					<Link to={`/adverts/${advert.name}/${advert._id}`}>
						<Advert key={advert._id} {...advert} />
					</Link>
				))}
			</Grid>
		</Container>
	);
};

AdvertsList.propTypes = {
	adverts: T.array.isRequired,
};

export default AdvertsList;
