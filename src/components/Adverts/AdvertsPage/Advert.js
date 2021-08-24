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
  Avatar,
  IconButton,
} from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getUserFav,addFavorites,deleteFavorites } from '../../../api/user';
import { getUser, getIsLogged } from '../../../store/selectors';
import { setFavoritesUser } from '../../../store/actions';
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
                  {isLogged &&
              (fav ? (
                <IconButton
                  className={classes.favoriteIcon}
                  color="secondary"
                  onClick={handleFavored}
                >
                  <FavoriteBorderIcon style={{ fontSize: '2rem' }} />
                </IconButton>
              ) : (
                !fav && (
                  <IconButton
                    className={classes.favoriteIcon}
                    onClick={handleFavored}
                    
                  >
                    <FavoriteBorderIcon style={{ fontSize: '2rem' }} />
                  </IconButton>
                )
              ))}
           
                </Typography>
                <Typography component="p">{name}</Typography>
                <Typography component="p">{tags.join(' - ')}</Typography>
                <Typography component="p">{transaction}</Typography>
                <Typography component="p">{desc}</Typography>
              </CardContent>
            </CardActionArea>

            <CardActions className={classes.cardActions}>
              <Box className={classes.author}>
                <Link
                  to={`/${userId.username}/adverts`}
                  style={{ textDecoration: 'none' }}
                >
                  <Avatar />
                </Link>
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

              <ShareAdvert
                Url={`${process.env.REACT_FRONT_LOCALHOST}adverts/${name}/${_id}`}
              />
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
  sold: T.bool,
};

export default Advert;
