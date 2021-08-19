import React from 'react';
import T from 'prop-types';
import placeholder from '../../../assets/images/placeholder.png';
import { advert } from '../propTypes';
import { formatDistanceToNow } from 'date-fns';
import ShareAdvert from '../shareAdvert';
import { Link } from 'react-router-dom';
import { useStyles } from './advertCSS';
import {
	Grid,
	Card,
	CardActionArea,
	CardActions,
	CardMedia,
	CardContent,
	Typography,
	Box,
	Avatar
} from '@material-ui/core';

const Advert = ({
	_id,
	image,
	name,
	desc,
	price,
	transaction,
	tags,
	reserved,
	sold,
	userId,
	createdAt
}) => {
	const classes = useStyles();
	return (

		<Grid item xs={12} sm={6} lg={4}>
			<article>
				<Link to={`/adverts/${name}/${_id}`} style={{ textDecoration: 'none' }}>
					<Card className={classes.card}>
						<CardActionArea>
							<CardMedia
								className={classes.media}
								image={
									image
										? `${process.env.REACT_APP_API_BASE_URL}images/adverts/${image}`
										: placeholder
								}
							/>
							<CardContent className={classes.cardContent}>
								<Typography component="p" className={classes.priceAdvert}>
									{`${price} €`}
								</Typography>
								<Typography component="p">{name}</Typography>
								<Typography component="p">{tags.join(' - ')}</Typography>
								<Typography component="p">{transaction}</Typography>
								<Typography component="p">{desc}</Typography>
							</CardContent>
						</CardActionArea>
					 
						<CardActions className={classes.cardActions}>
                    		<Box className={classes.author}>
                        		<Avatar/>
                        		<Box ml={2}>
                            		<Typography variant="subtitle2" component="p">
                            			{userId.username}
                            		</Typography>
                            		<Typography variant="subtitle2" color="textSecondary" component="p">
										{formatDistanceToNow(new Date(createdAt))}
                            		</Typography>
                        		</Box>
                    		</Box>
                    
                        	<ShareAdvert Url={ "http://localhost:3000/username/desc_anuncio"}/>
                		</CardActions>
					</Card>
				</Link>
			</article>
		</Grid>
	);
};

Advert.prototype = {
	...advert,
	image: T.string,
	reserved: T.bool,
	sell: T.bool,
};

export default Advert;

 