import React, { useState, useEffect } from 'react';
import T from 'prop-types';
import placeholder from '../../../assets/images/placeholder.png';
import { advert } from '../propTypes';
import { formatDistanceToNow } from 'date-fns';
import ShareAdvert from '../shareAdvert';
import { NavLink } from 'react-router-dom';
import { useStyles } from './advertCSS';

import {
  Grid,
  Card,
  CardActionArea,
  CardActions,
  CardContent,
  Typography,
  Box,
  Avatar,
} from '@material-ui/core';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import classNames from 'classnames';
//import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import {
  getUser,
  getIsLogged,
  getUserAdvertFavorite,
} from '../../../store/selectors';
import {
  userAddFavoritesAction,
  userDeleteFavoritesAction,
} from '../../../store/actions';
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
  //const history = useHistory();
  const user = useSelector(getUser);
  const isLogged = useSelector(getIsLogged);
  const dispatch = useDispatch();
  const [fav, setFav] = useState(false);

  useEffect(() => {
    if (user) {
      setFav(getUserAdvertFavorite(user, user._id, _id));
    }
  }, [user, fav, _id]);

  const handleFavored = async (e) => {
    e.preventDefault();
    if (!fav) {
      //console.log('añadimos favorito');
      dispatch(userAddFavoritesAction(user._id, _id));
    } else {
      //console.log('borramos favorito');
      dispatch(userDeleteFavoritesAction(user._id, _id));
    }
  };

  return (
    <Grid item xs={12} sm={6} lg={4} className={classes.containerGrid}>
      <article className={classes.container_card}>
        <NavLink
          to={`/adverts/${name.replace(/\/+/g, '-')}/${_id}`}
          style={{ textDecoration: 'none' }}
        >
          <Card className={classes.card}>
            <CardActionArea>
              <img
                src={
                  image
                    ? `${process.env.REACT_APP_API_BASE_URL}images/adverts/${image}`
                    : placeholder
                }
                alt="advert"
                className={classes.media}
              />

              <CardContent className={classes.cardContent}>
                <section className={classes.container_price_favorite}>
                  {isLogged && (
                    <FavoriteBorderIcon
                      className={
                        fav
                          ? classNames(classes.favoriteIconSel)
                          : classNames(classes.favoriteIcon)
                      }
                      onClick={handleFavored}
                      style={{ fontSize: '2rem' }}
                    />
                  )}

                  <p className={classes.priceAdvert}>{`${price} €`}</p>
                </section>

                <h4 className={classes.cardNameAdvert}>{name}</h4>
                <p className={classes.descAdvert}>{desc}</p>
                <div className={classes.tagAndDescDetailAdvert}>
                  <p>
                    <span
                      className={
                        transaction === 'wanted'
                      
                          ? classNames(classes.wanted)
                          : classNames(classes.sale)
                      }
                    >
                      {transaction === 'wanted'? (`${t('adverts.Wanted')}`):(`${t('adverts.Sell')}`)}
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
                  state: { userId: `${userId._id}` },
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
