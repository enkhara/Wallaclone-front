import React from 'react';
import T from 'prop-types';

import ConfirmationButton from '../../shared/ConfirmationButton';
import placeholder from '../../../assets/images/placeholder.png';
import { advert } from '../propTypes';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { useStyles } from '../../shared/useStyles';
import ShareAdvert from '../../shareAdvert';

function AdvertDetail({ name, sale, desc, price, tags, image, onDelete }) {
	const classes = useStyles();

	return (
		<Grid item xs={12} sm={6} md={4}>
			<Card className={classes.card}>
				<CardActionArea>
					<CardMedia
						className={classes.media}
						image={
							`${process.env.REACT_APP_API_BASE_URL}/images/adverts/${image}` ||
							placeholder
						}
					/>
					<CardContent>
						<Typography gutterBottom variant="h5" component="h2">
							{name}
						</Typography>
						<Typography variant="body2" color="textSecondary" component="p">
							{`${price}€`}
						</Typography>
					</CardContent>
				</CardActionArea>
				<CardActions className={classes.cardActions}>
					<Box className={classes.author}>
						<Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80" />
						<Box ml={2}>
							<Typography variant="subtitle2" component="p">
								Guy Clemons
							</Typography>
							<Typography
								variant="subtitle2"
								color="textSecondary"
								component="p"
							>
								May 14, 2020
							</Typography>
						</Box>
					</Box>
					<IconButton aria-label="add to favorites">
						<FavoriteBorderIcon />
					</IconButton>
					<ShareAdvert Url={'http://localhost:3000/username/desc_anuncio'} />
				</CardActions>
			</Card>
			<ConfirmationButton confirmation="Are you sure?" onConfirm={onDelete}>
				Delete
			</ConfirmationButton>
		</Grid>
	);
}

AdvertDetail.propTypes = {
	...advert,
	photo: T.string,
	onDelete: T.func.isRequired,
};

AdvertDetail.defaultProps = {
	photo: null,
};

export default AdvertDetail;
