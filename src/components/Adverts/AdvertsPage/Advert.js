import React from 'react';
import T from 'prop-types';
import placeholder from '../../../assets/images/placeholder.png';
import { advert } from '../propTypes';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../../shared/useStyles';
import ShareAdvert from '../shareAdvert';
import { Link } from 'react-router-dom';


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
}) => {
	const classes = useStyles();
	return (

		<Grid item xs={12} sm={6} md={4}>
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
								{/* <Typography component="p">{tags.length ? tags.join(' - ') : tags}</Typography> */}
								<Typography component="p">{tags.join(' - ')}</Typography>
								<Typography component="p">{transaction}</Typography>
								<Typography component="p">{desc}</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions className={classes.cardActions}>
							<ShareAdvert Url='http://localhost:3000/username/desc_anuncio' />
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
