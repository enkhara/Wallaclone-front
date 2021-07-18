import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import Typography from '@material-ui/core/Typography';
import Container from '@material-ui/core/Container';
import Box from '@material-ui/core/Box';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { useStyles } from '../../shared/useStyles';
import { Header } from '../../layout';
import ShareAdvert from '../../shareAdvert';
import { getAdverts } from '../../../store/selectors';
import { advertsLoadAction } from '../../../store/actions';
import EmptyList from './EmptyList';

//<ShareAdvert Url={url_del_post} Titulo={titulo_del_post} Resumen={resumen_del_post} /> 

const AdvertsPage = () => {
	
	const classes = useStyles();	
	const dispatch = useDispatch();
  	const adverts = useSelector(getAdverts);
	
  	React.useEffect(() => {
    	dispatch(advertsLoadAction());
  	}, []);
	return(
		<React.Fragment>
						
			<Header/>
			<Container maxWidth="lg" className={classes.blogsContainer}>
				<Grid container spacing={3}>
					{adverts.length 
					? 
						<AdvertsList 
							adverts={adverts}
						/> 
					: 	
						<EmptyList/>
					}
					{/* <Grid item xs={12} sm={6} md={4}>
						<Card className={classes.card}>
							<CardActionArea>
								<CardMedia
									className={classes.media}
									image="https://images.pexels.com/photos/2004161/pexels-photo-2004161.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
									title="Contemplative Reptile"
								/>
							<CardContent>
								<Typography gutterBottom variant="h5" component="h2">
									React useContext
								</Typography>
								<Typography variant="body2" color="textSecondary" component="p">
									Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
									across all continents except Antarctica
								</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions className={classes.cardActions}>
							<Box className={classes.author}>
							<Avatar src="https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
							<Box ml={2}>
								<Typography variant="subtitle2" component="p">
									Guy Clemons
								</Typography>
								<Typography variant="subtitle2" color="textSecondary" component="p">
									May 14, 2020
								</Typography>
							</Box>
							</Box>
							<IconButton aria-label="add to favorites">
								<FavoriteBorderIcon />
							</IconButton>
							<ShareAdvert Url={ "http://localhost:3000/username/desc_anuncio"}/>
						</CardActions>
						</Card>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<Card className={classes.card}>
						<CardActionArea>
							<CardMedia
								className={classes.media}
								image="https://images.pexels.com/photos/34600/pexels-photo.jpg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
								title="Contemplative Reptile"
							/>
							<CardContent>
							<Typography gutterBottom variant="h5" component="h2">
								React Router
							</Typography>
							<Typography variant="body2" color="textSecondary" component="p">
								Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
								across all continents except Antarctica
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
								<Typography variant="subtitle2" color="textSecondary" component="p">
								May 14, 2020
								</Typography>
							</Box>
							</Box>
							<IconButton aria-label="add to favorites">
								<FavoriteBorderIcon />
							</IconButton>
							<ShareAdvert Url={ "http://localhost:3000/username/desc_anuncio"}/>
						</CardActions>
						</Card>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<Card className={classes.card}>
						<CardActionArea>
							<CardMedia
							className={classes.media}
							image="https://images.pexels.com/photos/1181263/pexels-photo-1181263.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
							title="Contemplative Reptile"
							/>
							<CardContent>
							<Typography gutterBottom variant="h5" component="h2">
								React useContext
							</Typography>
							<Typography variant="body2" color="textSecondary" component="p">
								Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
								across all continents except Antarctica
							</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions className={classes.cardActions}>
							<Box className={classes.author}>
							<Avatar src="https://images.pexels.com/photos/415829/pexels-photo-415829.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" />
							<Box ml={2}>
								<Typography variant="subtitle2" component="p">
								Guy Clemons
								</Typography>
								<Typography variant="subtitle2" color="textSecondary" component="p">
								May 14, 2020
								</Typography>
							</Box>
							</Box>
							<IconButton aria-label="add to favorites">
								<FavoriteBorderIcon />
							</IconButton>
							<ShareAdvert Url={ "http://localhost:3000/username/desc_anuncio"}/>
						</CardActions>
						</Card>
					</Grid>
					<Grid item xs={12} sm={6} md={4}>
						<Card className={classes.card}>
						<CardActionArea>
							<CardMedia
								className={classes.media}
								image="https://images.pexels.com/photos/325111/pexels-photo-325111.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
								title="Contemplative Reptile"
							/>
							<CardContent>
							<Typography gutterBottom variant="h5" component="h2">
								React useContext
							</Typography>
							<Typography variant="body2" color="textSecondary" component="p">
								Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
								across all continents except Antarctica
							</Typography>
							</CardContent>
						</CardActionArea>
						<CardActions className={classes.cardActions}>
							<Box className={classes.author}>
							<Avatar src="https://images.unsplash.com/photo-1584999734482-0361aecad844?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1100&q=80" />
							<Box ml={2}>
								<Typography variant="subtitle2" component="p">
								Guy Clemons
								</Typography>
								<Typography variant="subtitle2" color="textSecondary" component="p">
								May 14, 2020
								</Typography>
							</Box>
							</Box>
							<Box>
							<IconButton aria-label="add to favorites">
								<FavoriteBorderIcon />
							</IconButton>
							</Box>
							<ShareAdvert Url={ "http://localhost:3000/username/desc_anuncio"}/>
						</CardActions>
						</Card>
					</Grid> */}
				</Grid>
			
			</Container>
		</React.Fragment>
	

	)
};

export default AdvertsPage;
