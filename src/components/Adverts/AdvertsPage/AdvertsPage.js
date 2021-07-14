import React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
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
import AccountCircle from '@material-ui/icons/AccountCircle';





const AdvertsPage = () => {
	// return <Layout />;
	const classes = useStyles();
	return(
		<React.Fragment>
						
			<div className={classes.root}>
				<AppBar position="static">
					<Toolbar>
						<Typography variant="h6" className={classes.title}>
							Wallaclone
						</Typography>
                		<AccountCircle className={classes.iconLogin}/>
						{/* STYLE COMPONENT */}
						<Link to={`./login`} style={{color:'#fff', marginRight:'5px'}}> 
                    		Login
           				 </Link>
						<Link to={`./register`} style={{color:'#fff'}}>
                    		Register
           				</Link>
					</Toolbar>
				</AppBar>
    		</div>
			<Container maxWidth="lg" className={classes.blogsContainer}>

			<Grid container spacing={3}>
				<Grid item xs={12} sm={6} md={4}>
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
					</CardActions>
					</Card>
				</Grid>
				</Grid>
			
			</Container>
		</React.Fragment>
	

	)
};

export default AdvertsPage;
