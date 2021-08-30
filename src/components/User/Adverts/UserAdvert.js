import React, { useEffect, useState } from 'react';
import T from 'prop-types';
import placeholder from '../../../assets/images/placeholder.png';
import { format } from 'date-fns';
import { Link, NavLink } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { useStyles } from './userAdvertCSS';
import CreateIcon from '@material-ui/icons/Create';
import DeleteIcon from '@material-ui/icons/Delete';
import BookmarkBorderIcon from '@material-ui/icons/BookmarkBorder';
//import BookmarkIcon from '@material-ui/icons/Bookmark';
import ShoppingCartIcon from '@material-ui/icons/ShoppingCart';
// import RemoveShoppingCartIcon from '@material-ui/icons/RemoveShoppingCart';
// import ToggleIcon from "material-ui-toggle-icon";

import {
  Grid,
  Paper,
  ButtonBase, 
  Typography,
  IconButton,
  Button, 
} from '@material-ui/core';
import Tooltip from '@material-ui/core/Tooltip';
import Swal from 'sweetalert2';

//import { useHistory } from 'react-router';
import { useDispatch, useSelector } from 'react-redux';
import {
	advertDeletedAction,
	advertsLoadAction,
	advertUpdateReservedAction,
	advertUpdateSoldAction
} from '../../../store/actions';
import { getAdvertDetail, getAdverts } from '../../../store/selectors';

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
  favs
}) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const advert = useSelector((state) => getAdvertDetail(state, _id));
  //const adverts = useSelector(getAdverts);
  const [t] = useTranslation('global');
  const [statusReserved, setStatusReserved] = useState(reserved);
  const [statusSold, setStatusSold] = useState(sold);

  useEffect(() => {
    console.log('entro en useEfect de reserved UserAdvert')
    //dispatch(advertsLoadAction());
   // getAdvertDetail(state.adverts.data, _id);
    // seteamos el estado con los datos almacenados en redux (actualizados)
    setStatusReserved(reserved);
  }, [reserved]);

  useEffect(() => {
    console.log('entro en useEfect de sold UserAdvert')
    setStatusSold(sold);
  }, [sold]);

   const handleDelete = () => {
    
		const title = t('adverts.Are you sure?');
		Swal.fire({
			title: title,
			text: t('adverts.You will not be able to reverse this !'),
			icon: 'warning',
			showCancelButton: true,
			confirmButtonColor: '#3085d6',
			cancelButtonColor: '#d33',
			confirmButtonText: t('adverts.Yes, delete it!'),
		}).then((result) => {
			if (result.isConfirmed) {
				dispatch(advertDeletedAction(_id));
				Swal.fire(t('adverts.Deleted!'), t('adverts.Your advert has been deleted.'), 'success');
			}
		});
	};
  
  const handleReserved = async (_id, reserved) => {
    console.log('entro en handleReserved de UserAdvert _id', _id);
    console.log('entro en handleReserved de UserAdvert reserved', reserved, !reserved);
    // le pasamos el dato negado
		await dispatch(advertUpdateReservedAction(_id, !reserved));
	}


  const handleSold = async (_id, sold) => {
    console.log('entro en handleSold de UserAdvert');
		await dispatch(advertUpdateSoldAction(_id, !sold));
  }
  

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container spacing={2} >
          <Grid item>
          <NavLink to={`/adverts/${name.replace(/\/+/g,'-')}/${_id}`} style={{ textDecoration: 'none' }}>
            <ButtonBase className={classes.image}>
              <img className={classes.img}
                alt="Imagen del anuncio"
                src={image
                     ? `${process.env.REACT_APP_API_BASE_URL}images/adverts/${image}`
                     : placeholder } 
                  />
              </ButtonBase>
            </NavLink>
          </Grid>
          <Grid item xs={8} sm container>
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
            <Grid item >
              <Typography variant="subtitle2" >
                {t('userzone.Status')}
                </Typography> 
                <Typography variant="body2" >
                  {statusReserved ?  t('userzone.Reserved') : t('userzone.Not Reserved')}
                </Typography> 
                <Typography variant="body2" >
                  {statusSold ? t('userzone.Sold') : t('userzone.Not Sold')}
                </Typography> 
               </Grid> 
            
            {!favs && <div className={classes.root}>
              
              <Tooltip title="Editar" placement="top" arrow>
                <IconButton aria-label="create" color="primary">
                  <Link className={classes.containerNewAdvert}
                    to={`/adverts/edit/${_id}`}
                  >
                    <CreateIcon />
                  </Link>
                </IconButton>
              </Tooltip>
              <Tooltip title="Eliminar" placement="top" arrow>
                <IconButton aria-label="delete" color="primary" type="submit">
                  <DeleteIcon onClick={()=>handleDelete()} /> 
                </IconButton>
                </Tooltip>
               
              <Tooltip title={statusReserved ? t('userzone.Mark as un reserved') : t('userzone.Mark as reserved')} placement="top" arrow>
                <IconButton id="reserved" color="primary" aria-label="add an alarm"
                   onClick={() => handleReserved(_id, reserved)}>   
                <BookmarkBorderIcon />
                </IconButton>
              </Tooltip>

              <Tooltip title={statusSold ? t('userzone.Mark as unsold') : t('userzone.Mark as sold')} placement="top" arrow>
                <IconButton id="sold" color="primary" aria-label="add an alarm"
                    onClick={() => handleSold(_id, sold)} >
                  <ShoppingCartIcon />
                </IconButton>
              </Tooltip>
          
            </div>}
             
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