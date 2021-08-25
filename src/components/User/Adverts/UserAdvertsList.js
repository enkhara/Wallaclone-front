import React, { Fragment } from 'react';
import T from 'prop-types';
import UserAdvert from './UserAdvert';
import withUser from '../../hoc/withUser';

import { useTranslation } from 'react-i18next';
import { useStyles } from './userAdvertsListCSS';
import { Grid, Typography, } from '@material-ui/core';

const AdvertsList = ({ adverts }) => {
	const classes = useStyles();
	
	const [t] = useTranslation('global');
	
	return (
		<Fragment>
			<Grid>
			 	<Typography gutterBottom variant="h4">
					{t('userzone.Your adverts')}
				</Typography>
				<Grid item>
              		<Typography variant="subtitle1">{adverts.length} {t('userzone.adverts')}</Typography>
				</Grid>
			</Grid>
			<Grid
				container
				direction="column"
	    		justifyContent="space-around"
				alignItems="stretch"
				className={classes.principalGrid}
				spacing={2}
				 > 
			
				{adverts.map((advert) => (
					<UserAdvert key={advert._id} {...advert} />
				))}

			</Grid>
			
	</Fragment>
	);
};

AdvertsList.propTypes = {
	adverts: T.array.isRequired,
};

const UserAdvertsList = withUser(AdvertsList);

export default UserAdvertsList;