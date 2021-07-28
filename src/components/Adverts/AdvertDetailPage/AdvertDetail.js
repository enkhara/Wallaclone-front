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
import ChatBubbleOutlineIcon from '@material-ui/icons/ChatBubbleOutline';
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
		
		// <Grid>
		// 	<Paper
		// 		elevation={10}
		// 		style={{
		// 			padding: 30,
		// 			height: '750px',
		// 			margin: '50px auto',
		// 			width: 550,
		// 		}}
		// 	>
		// 		<Card className={classes.card}>
		// 			<CardActionArea>
		// 				<CardMedia
		// 					className={classes.media}
		// 					image={image ? `${URLIMG}images/adverts/${image}` : placeholder}
		// 				/>
		// 				<CardContent>
		// 					<Typography gutterBottom variant="h4" component="h2">
		// 						{name}
		// 					</Typography>

		// 					<Typography gutterBottom variant="h5" component="p">
		// 						Description: {desc}
		// 					</Typography>
		// 					<Typography component="p" className={classes.priceAdvert}>
		// 						Price: {`${price} €`}
		// 					</Typography>
		// 					<Typography gutterBottom variant="h5" component="p">
		// 						Type: {transaction}
		// 					</Typography>
		// 					<Typography gutterBottom variant="h5" component="p">
		// 						Tags: {'#' + tags.join(', #')}
		// 					</Typography>
		// 				</CardContent>
		// 			</CardActionArea>
		// 			<CardActions className={classes.cardActions}>
		// 				<Box className={classes.author}>
		// 					{/* <Avatar src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2734&q=80" /> */}
		// 					<Avatar src="/broken-image.jpg" />
		// 					<Box ml={2}>
		// 						<Typography variant="subtitle2" component="p">
		// 							{userId.username ? userId.username : 'Desconocido'}
		// 						</Typography>
		// 						<Typography
		// 							variant="subtitle2"
		// 							color="textSecondary"
		// 							component="time"
		// 						>
		// 							{format(new Date(updatedAt), 'dd/MM/yyyy')}
		// 						</Typography>
		// 					</Box>
		// 					<Box>
		// 						<Typography
		// 							variant="subtitle3"
		// 							color="textSecondary"
		// 							component="time"
		// 						>
		// 							{formatDistanceToNow(new Date(updatedAt))}
		// 						</Typography>
		// 					</Box>
		// 				</Box>
		// 				<IconButton aria-label="add to favorites">
		// 					<FavoriteBorderIcon />
		// 				</IconButton>
		// 				<ShareAdvert Url="http://localhost:3000/username/desc_anuncio" />
		// 			</CardActions>
		// 		</Card>
		// 		<ConfirmationButton confirmation="Are you sure?" onConfirm={onDelete}>
		// 			Delete
		// 		</ConfirmationButton>
		// 	</Paper>
		// </Grid>

		<Grid>
			<Paper
				elevation={10}
				style={{
					padding: 20,
					height: '750px',
					margin: '50px auto',
					width: 800,
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
								<ChatBubbleOutlineIcon style={{fontSize:'2rem'}}/>
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
								<Typography component="p">{transaction}</Typography>
							</Box>
							<Typography component="p">{desc}</Typography>
		
                    <ShareAdvert Url={ "http://localhost:3000/username/desc_anuncio"}/>
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
