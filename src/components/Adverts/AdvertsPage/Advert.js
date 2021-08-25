import React from 'react';
import T from 'prop-types';
import placeholder from '../../../assets/images/placeholder.png';
import { advert } from '../propTypes';
import { formatDistanceToNow } from 'date-fns';
import ShareAdvert from '../shareAdvert';
import { Link, NavLink } from 'react-router-dom';
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
  Avatar,
  IconButton,
} from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import classNames from 'classnames';
import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getUserFav,addFavorites,deleteFavorites } from '../../../api/user';
import { getUser, getIsLogged } from '../../../store/selectors';
import { setFavoritesUser } from '../../../store/actions';
import { useTranslation } from 'react-i18next';
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
  createdAt,
}) => {
  const classes = useStyles();
  const [t] = useTranslation('global');
  const history = useHistory();
  const user = useSelector(getUser);
  const isLogged = useSelector(getIsLogged);
  const dispatch = useDispatch();
  const [fav, setFav] = React.useState(false);


  
  React.useEffect(() => {
    if (user && user._id) {
      getUserFav(user._id).then((r) => {
        const favorites = r.result.ads_favs;
        dispatch(setFavoritesUser(favorites));
        setFav(favorites.includes(_id));
      });
    }
  }, [dispatch]);

  const handleFavored = async (e) => {
    e.preventDefault();
    setFav(!fav);

    if (!fav) {
      await addFavorites(user._id, _id);
      const favorites = user.ads_favs.push(_id);
      dispatch(setFavoritesUser(favorites));
    } else {
      const favorites = user.ads_favs._id;
      favorites && favorites.splice(favorites.indexOf(_id), 1);
      await deleteFavorites(user._id, _id);
    }
  };

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
                <section className={classes.container_price_favorite}>
                  {isLogged &&
                      <IconButton
                      className={fav ? classNames(classes.favoriteIconSel) : classNames(classes.favoriteIcon)}
                      onClick={handleFavored}
                      >
                    <FavoriteBorderIcon style={{ fontSize: '2rem' }} />
                    </IconButton>
                  }
               
                  <p className={classes.priceAdvert}>
                    {`${price} €`}
                  </p>

                </section>
                 
                <h4 className={classes.cardNameAdvert}>{name}</h4>
                <p className={classes.descAdvert}>{desc}</p>
                <div className={classes.tagAndDescDetailAdvert}>
                  <p>
                    <span 
                      className={ 
                        transaction ==='wanted' 
                        ? classNames(classes.wanted) 
                        : classNames(classes.sale)}
                    >
                      {transaction}
                      
                    </span>
                  </p>
                  <p>
                    <span className={classes.spanDetailAdvert}>
                      {tags.join(' - ')}
                    </span>
                  </p>
                
				        </div>
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
              <ShareAdvert
                Url={`${process.env.REACT_APP_FRONT_LOCALHOST}adverts/${name}/${_id}`}
              />
            </CardActions>
          </Card>
        </NavLink>
      </article>
    </Grid>
  );
};

Advert.prototype = {
  ...advert,
  image: T.string,
  reserved: T.bool,
  sold: T.bool,
};

export default Advert;
