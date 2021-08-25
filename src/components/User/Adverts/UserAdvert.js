import React from 'react';
import T from 'prop-types';
import placeholder from '../../../assets/images/placeholder.png';
import { format } from 'date-fns';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useStyles } from './userAdvertCSS';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
import BookmarkIcon from '@material-ui/icons/Bookmark';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';

import {
  Grid,
  Paper,
  ButtonBase, 
  Typography,
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

  const [t] = useTranslation('global');
 
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2} >
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img}
                alt="Imagen del anuncio"
                src={image
                     ? `${process.env.REACT_APP_API_BASE_URL}images/adverts/${image}`
                     : placeholder } 
                  />
            </ButtonBase>
          </Grid>
          <Grid item xs={15} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="title1">
                 <strong>{price} €</strong>
                </Typography>
                <Typography variant="body2" gutterBottom>
                {name}
                </Typography>
                <Typography variant="body2" color="textSecondary">
                {desc.substr(0, 20)+' ...'}
                </Typography>
              </Grid>
             
              <Grid item>
                {/* <Typography variant="body2" style={{ cursor: 'pointer' }}>
                  Remove
                </Typography> */}
              </Grid>
            </Grid>
          
            <Grid item xs>
                <Typography gutterBottom variant="subtitle2">
                  {t('userzone.Published at')}
                </Typography>
                <Typography variant="body2" gutterBottom>
                
                {`${format(new Date(createdAt), 'dd/MM/yyyy')}`}
                </Typography>
                
            </Grid>
            <Grid item xs>
                <Typography gutterBottom variant="subtitle2">
                  {t('userzone.Updated at')}
                </Typography>
                <Typography variant="body2" gutterBottom>
                
                {`${format(new Date(updatedAt), 'dd/MM/yyyy')}`}
                </Typography>
                
            </Grid>
            <div className={classes.root}>
              <IconButton aria-label="create" color="primary">
                <CreateIcon />
              </IconButton>
              <IconButton aria-label="delete" color="primary">
                <DeleteIcon />
              </IconButton>
              <IconButton color="primary" aria-label="add an alarm">
                <BookmarkBorderIcon />
              </IconButton>
              <IconButton color="primary" aria-label="add to shopping cart">
                <ShoppingCartIcon />
              </IconButton>
            </div>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

//   return (
//     <Grid item xs={12} sm={6} lg={4} className={classes.containerGrid}>
//       <article className={classes.container_card}>
//         <NavLink to={`/adverts/${name}/${_id}`} style={{ textDecoration: 'none' }}>
//           <Card className={classes.card}>
//             <CardActionArea>
//               <CardMedia
//                 className={classes.media}
//                 image={
//                   image
//                     ? `${process.env.REACT_APP_API_BASE_URL}images/adverts/${image}`
//                     : placeholder
//                 }
//               />
//               <CardContent className={classes.cardContent}>
//                           <Typography
//                     variant="subtitle2"
//                     color="textSecondary"
//                     component="p"
//                   >
//                     {formatDistanceToNow(new Date(createdAt))}
//                               </Typography>
//                               <Typography
//                     variant="subtitle2"
//                     color="textSecondary"
//                     component="p"
//                   >
//                     {formatDistanceToNow(new Date(updatedAt))}
//                     </Typography>
//                 <Typography component="p" className={classes.priceAdvert}>
//                   {`${price} €`}
//                 </Typography>
//                 <Typography component="p">{name}</Typography>
                              
//                 {/* <Typography component="p">{tags.join(' - ')}</Typography> */}
//                 <Typography component="p">{transaction}</Typography>
//                 {/* <Typography component="p">{desc}</Typography> */}
//               </CardContent>
//             </CardActionArea>

//             <CardActions className={classes.cardActions}>
//               <NavLink
//                 to={{
//                   pathname: `/${userId.username}/adverts`,
//                   state: { userId: `${userId._id}`},
//                 }}
//                 style={{ textDecoration: 'none' }}
//                >
//               <Box className={classes.author}>
                
//                   <Avatar />
                
//                 <Box ml={2}>
//                   <Typography variant="subtitle2" component="p">
//                     {userId.username}
//                     </Typography>
                    
//                   <Typography
//                     variant="subtitle2"
//                     color="textSecondary"
//                     component="p"
//                   >
//                     {formatDistanceToNow(new Date(createdAt))}
//                     </Typography>
                  
//                   </Box>          
//               </Box>
//             </NavLink>
          
//            </CardActions>
//           </Card>
//         </NavLink>
//       </article>
//     </Grid>
//   );
// };

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