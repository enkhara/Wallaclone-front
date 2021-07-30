import React from 'react';
import T from 'prop-types';

import ConfirmationButton from '../../shared/ConfirmationButton';
import placeholder from '../../../assets/images/placeholder.png';
import { advert } from '../propTypes';
import { formatDistanceToNow, format } from 'date-fns';

import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ChatIcon from '@material-ui/icons/Chat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { useStyles } from '../../shared/useStyles';
import ShareAdvert from '../../shareAdvert';

function AdvertDetail({
	name,
	transaction,
	desc,
	price,
	tags,
	image,
	updatedAt,
	userId,
	onDelete,
}) {
	const classes = useStyles();
	const URLIMG = process.env.REACT_APP_API_BASE_URL;

	return (
		
		<Grid >
			
			<Paper
				elevation={10}
				style={{
					padding: 20,
					height: '800px',
					margin: '50px auto',
					width: 600,
				}}
			>
				<Box>

					<CardActions className={classes.headerDetail}>
						<Box className={classes.author}>
							<Avatar/>
							<Box ml={2}>
								<Typography variant="subtitle2" component="p">
									{userId.username ? userId.username : 'Desconocido'}
								</Typography>
								<Typography variant="subtitle2" color="textSecondary" component="p">
									{formatDistanceToNow(new Date(updatedAt))}
								</Typography>
							</Box>
						</Box>
						<Box>
							<IconButton aria-label="add to favorites">
								<FavoriteBorderIcon style={{fontSize:'2rem'}}/>
							</IconButton>
							<IconButton aria-label="add to favorites" style={{padding:'0px'}}>
								<ChatIcon style={{fontSize:'2rem'}}/>
							</IconButton>

						</Box>
					</CardActions>

					<CardMedia
						className={classes.mediaDetailAdvert}
						image={image ? `${URLIMG}images/adverts/${image}` : placeholder}
					/>

						<Typography component="p" className={classes.priceDetailAdvert}>
							{`${price} €`}
						</Typography>
						<Typography component="h2" className={classes.nameDetailAdvert}>{name}</Typography>
						<Box className={classes.tagDetailAdvert}>
							<Typography component="p"><span style={{color:'#b2b3b4', marginRight:'1rem', fontWeight:'700'}}>Tags </span>{tags.join(' - ')}</Typography>
							<Typography component="p"><span style={{color:'#b2b3b4', marginRight:'1rem', fontWeight:'700'}}>Transaction </span>{transaction}</Typography>
						</Box>
						<Box className={classes.tagDetailAdvert} >
							<Typography component="p" style={{fontWeight:'500'}}>{desc}</Typography>
						</Box>
						<Box className={classes.socialDetailAdvert} >
		                	<ShareAdvert Url={ "http://localhost:3000/username/desc_anuncio"}/>
						</Box>
				</Box>
			</Paper>
				
		</Grid>
		


	);
}

AdvertDetail.propTypes = {
	...advert,
	image: T.string,
	onDelete: T.func.isRequired,
};

AdvertDetail.defaultProps = {
	image: null,
};

export default AdvertDetail;
