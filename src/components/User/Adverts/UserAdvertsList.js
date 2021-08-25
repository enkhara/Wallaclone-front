import React, { Fragment } from 'react';
import T from 'prop-types';
import UserAdvert from './UserAdvert';

import { useTranslation } from 'react-i18next';
import { useStyles } from './userAdvertsListCSS';
import { Grid } from '@material-ui/core';

const UserAdvertsList = ({ adverts }) => {
	const classes = useStyles();
	
	const [t] = useTranslation('global');
	
	return (
		<Fragment>
			<Grid container spacing={7} className={classes.principalGrid}>
				{adverts.currentData().map((advert) => (
					<UserAdvert key={advert._id} {...advert} />
				))}

			</Grid>
			
	</Fragment>
	);
};

UserAdvertsList.propTypes = {
	adverts: T.array.isRequired,
};

export default UserAdvertsList;