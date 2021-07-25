import React from 'react';
import T from 'prop-types';

import { advert } from '../propTypes';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../../shared/useStyles';
import ShareAdvert from '../../shareAdvert';
import { Link } from 'react-router-dom';

const Advert = ({ _id, image, name, price, reserved, sale, sell, tags, desc }) => {
	const classes = useStyles();
	return (
		<Grid item xs={12} sm={6} md={4}>
			<Link 
				to={`/adverts/${name}/${_id}`} 
				style={{textDecoration:'none'}}>	
				<Card className={classes.card}>
					<CardActionArea>
						<CardMedia
							className={classes.media}
							image={`${process.env.REACT_APP_API_BASE_URL}/images/adverts/${image}`}
						/>
						<CardContent className={classes.cardContent}>
							<Typography component="p" className={classes.priceAdvert}>
								{`${price} €`}
							</Typography>
							<Typography component="p">
								{name}
							</Typography>
							<Typography component="p">
								{desc}
							</Typography>
						</CardContent>
					</CardActionArea>
					<CardActions className={classes.cardActions}>
						<ShareAdvert Url={'http://localhost:3000/username/desc_anuncio'} />
					</CardActions>
				</Card>
			</Link>
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
