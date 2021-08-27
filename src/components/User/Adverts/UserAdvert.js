import React, { useState } from 'react';
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
import ToggleIcon from "material-ui-toggle-icon";
//import IconButton from "@material-ui/core/IconButton";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import {
  Grid,
  Paper,
  ButtonBase, 
  Typography,
  IconButton,
  Button,
} from '@material-ui/core';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';


import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, getIsLogged } from '../../../store/selectors';

// const useStyles = makeStyles(theme => ({
//   iconHover: {
//     '&:hover': {
//       border: '2px solid green',
//     }
//   },

//   floatBtn: {
//     marginRight: theme.spacing(1),
//   },
// }));
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
  onDelete,
}) => {
  const classes = useStyles();
  const history = useHistory();
  const user = useSelector(getUser);
  const isLogged = useSelector(getIsLogged);
  const dispatch = useDispatch();

  const [t] = useTranslation('global');

  const [stateSold, setStateSold] = useState({ on: false });
  const [stateReserved, setStateReserved] = useState({ on: false });

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
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="h6">
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
              <Link className={classes.containerNewAdvert}
						          to={`/adverts/edit/${_id}`}
					      > 
                  <CreateIcon />
                </Link>
              </IconButton>

              <IconButton  aria-label="delete" color="primary">
                <DeleteIcon onClick={onDelete} />
              </IconButton>

              {/* {reserved ? (<IconButton color="primary" aria-label="add an alarm">
                <BookmarkIcon />
              </IconButton>)
                :
                (<IconButton color="primary" aria-label="add an alarm">
                <BookmarkBorderIcon />
                </IconButton>)} */}
              
                <IconButton color="primary" aria-label="add an alarm"
                        onClick={() => setStateReserved((stateReserved) => ({ on: !stateReserved.on }))}>
              <ToggleIcon
                on={stateReserved.on}
                onIcon={<BookmarkIcon />}
                offIcon={<BookmarkBorderIcon />}
              />
              </IconButton>
              
              {/* <IconButton color="primary" aria-label="add to shopping cart">
                <ShoppingCartIcon />
              </IconButton> */}
            
              {/* <Button onClick={() => handleToggleSold()}>{sold ? 'VENDIDO' : 'NO VENDIDO'}</Button> */}
              <IconButton color="primary" aria-label="add an alarm"
                        onClick={() => setStateSold((stateSold) => ({ on: !stateSold.on }))}>
              <ToggleIcon
                on={stateSold.on}
                onIcon={<ShoppingCartIcon />}
                offIcon={<RemoveShoppingCartIcon />}
              />
              </IconButton>
          
            </div>
          </Grid>
        </Grid>
      </Paper>
    </div>
  );
}

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