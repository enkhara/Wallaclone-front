import React from 'react';
import T from 'prop-types';
import placeholder from '../../../assets/images/placeholder.png';
//import { advert } from '../propTypes';
import { formatDistanceToNow } from 'date-fns';
import { Link, NavLink } from 'react-router-dom';
import { useStyles } from './userAdvertCSS';

import {
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardMedia,
  CardContent,
  Typography,
  Box,
  Avatar,
  IconButton,
} from '@material-ui/core';


import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, getIsLogged } from '../../../store/selectors';

const UserAdvert = ({
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
  createdAt,
  updatedAt,
}) => {
  const classes = useStyles();
  const history = useHistory();
  const user = useSelector(getUser);
  const isLogged = useSelector(getIsLogged);
  const dispatch = useDispatch();
 

  return (
    <Grid item xs={12} sm={6} lg={4} className={classes.containerGrid}>
      <article className={classes.container_card}>
        <NavLink to={`/adverts/${name}/${_id}`} style={{ textDecoration: 'none' }}>
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
                          <Typography
                    variant="subtitle2"
                    color="textSecondary"
                    component="p"
                  >
                    {formatDistanceToNow(new Date(createdAt))}
                              </Typography>
                              <Typography
                    variant="subtitle2"
                    color="textSecondary"
                    component="p"
                  >
                    {formatDistanceToNow(new Date(updatedAt))}
                    </Typography>
                <Typography component="p" className={classes.priceAdvert}>
                  {`${price} €`}
                </Typography>
                <Typography component="p">{name}</Typography>
                              
                {/* <Typography component="p">{tags.join(' - ')}</Typography> */}
                <Typography component="p">{transaction}</Typography>
                {/* <Typography component="p">{desc}</Typography> */}
              </CardContent>
            </CardActionArea>

            <CardActions className={classes.cardActions}>
              <NavLink
                to={{
                  pathname: `/${userId.username}/adverts`,
                  state: { userId: `${userId._id}`},
                }}
                style={{ textDecoration: 'none' }}
               >
              <Box className={classes.author}>
                
                  <Avatar />
                
                <Box ml={2}>
                  <Typography variant="subtitle2" component="p">
                    {userId.username}
                    </Typography>
                    
                  <Typography
                    variant="subtitle2"
                    color="textSecondary"
                    component="p"
                  >
                    {formatDistanceToNow(new Date(createdAt))}
                    </Typography>
                  
                  </Box>          
              </Box>
            </NavLink>
          
           </CardActions>
          </Card>
        </NavLink>
      </article>
    </Grid>
  );
};

UserAdvert.prototype = {
  name: T.string.isRequired,
  transaction: T.string.isRequired,
  price: T.number.isRequired,
  desc: T.string.isRequired,
  tags: T.arrayOf(T.string.isRequired).isRequired,  
  image: T.string,
  reserved: T.bool,
  sold: T.bool,
};

export default UserAdvert;