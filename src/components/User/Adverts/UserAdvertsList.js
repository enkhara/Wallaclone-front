import React, { Fragment } from 'react';
import T from 'prop-types';
import UserAdvert from './UserAdvert';
import withUser from '../../hoc/withUser';

import { useTranslation } from 'react-i18next';
import { Grid, Typography, } from '@material-ui/core';

const AdvertsList = ({ adverts, favs, onDelete, onChangeReserved, onChangeSold }) => {

	const [t] = useTranslation('global');
	
	return (
		<Fragment>
			<Grid>
			 	<Typography 
				 	gutterBottom 
					variant="h4"
					style={{marginLeft:'1rem'}}
					
				>
					{favs ? t('userzone.Your favourites adverts') : t('userzone.Your adverts') }
				</Typography>
				<Grid item>
              		<Typography 
					  	variant="subtitle1"
						style={{marginBottom:'1rem',marginLeft:'1.2rem'}}
					>
						{adverts.length} {t('userzone.adverts')}
					</Typography>
				</Grid>
			</Grid>
			<Grid
				container
				direction="column"
	    		justifyContent="space-around"
				alignItems="stretch"
			
				spacing={2}
			> 
			
				{adverts.map((advert) => (
					<UserAdvert key={advert._id}
						{...advert}
						favs={favs}
						onDelete
						onChangeReserved
						onChangeSold
					/>
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