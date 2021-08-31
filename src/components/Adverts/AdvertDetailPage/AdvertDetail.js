import React, {useEffect, useState} from 'react';
import { useHistory } from 'react-router';
import T from 'prop-types';
import placeholder from '../../../assets/images/placeholder.png';
import { advert } from '../propTypes';
import { formatDistanceToNow } from 'date-fns';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import ChatIcon from '@material-ui/icons/Chat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { useStyles } from './AdvertDetailCSS';
import classNames from 'classnames';
import ShareAdvert from '../shareAdvert';
import { useTranslation } from 'react-i18next';
import Swal from 'sweetalert2';
import { Link, NavLink } from 'react-router-dom';

import { GoBackButton } from '../../shared';
//import { addFavorites, deleteFavorites, getUserFav } from '../../../api/user';
import {
	Grid,
	Button,
	Card, 
	IconButton,
	CardActions,
	Typography,
	Avatar,
	Box,
} from '@material-ui/core';
import {
	conversationLoadAction,
	conversationCreatedAction,
	userAddFavoritesAction,
	userDeleteFavoritesAction, 
	
} from '../../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, getIsLogged, getUserAdvertFavorite } from '../../../store/selectors';
function AdvertDetail({
	name,
	transaction,
	desc,
	price,
	tags,
	image,
	updatedAt,
	createdAt,
	userId,
	onDelete,
	onEdit,
	_id,
}) {
	const [t] = useTranslation('global');
	const classes = useStyles();
	const URLIMG = process.env.REACT_APP_API_BASE_URL;
	const dispatch = useDispatch();
	const user = useSelector(getUser);
	const isLogged = useSelector(getIsLogged);
	const history = useHistory();
	const [fav, setFav] = useState(false);

	useEffect(() => {
		if (user) {
			//console.log('estoy en el efecto')
			setFav(getUserAdvertFavorite(user, user._id, _id));
		}
	}, [user, fav, _id]);

	
	const handleChat = async (e) => {
		e.preventDefault();
		const conversation = await dispatch(
			conversationLoadAction(userId._id, _id)
		);
		//console.log('userId', userId._id, _id);
		if (userId._id === user._id) {
			Swal.fire(t('adverts.This advert is yours!'));
			//console.log('el anuncio es tuyo');
			return;
		}

		if (conversation.length === 0) {
			const newConversation = {
				advertisementId: _id,
				senderId: userId._id,
				receiverId: user._id,
			};
			dispatch(conversationCreatedAction(newConversation));
		}
		history.push('/user/chat');
	};

	const handleFavored = async (e) => {
		e.preventDefault();
		if (!fav) {
			//console.log('añadimos favorito')
			dispatch(userAddFavoritesAction(user._id, _id));
		}
		else {
			//console.log('borramos favorito')
			dispatch(userDeleteFavoritesAction(user._id, _id));
		}
	};

	return (
		<Grid
			item
			xs={12}
			sm={12}
			md={12}
			elevation={10}
			className={classes.gridDetailAdvert}
		>
			<Card className={classes.cardDetailAdvert}>
				<CardActions className={classes.headerDetailAdvert}>
					<NavLink
						to={{
							pathname: `/${userId.username}/adverts`,
							// state: { userId: `${userId._id}`},
						}}
						style={{ textDecoration: 'none' }}
					>
						<Box className={classes.author}>
							<Avatar />
							<Box ml={2}>
								<Typography variant="subtitle2" component="p">
									{userId.username ? userId.username : 'Desconocido'}
								</Typography>
								<Typography
									variant="subtitle2"
									color="textSecondary"
									component="p"
								>
									{formatDistanceToNow(new Date(createdAt))}
									{/* <span>  </span>
									Ult. Actualización {formatDistanceToNow(new Date(updatedAt))} */}
								</Typography>
							</Box>
						</Box>
					</NavLink>
					<Box>
						{isLogged ? (
							<IconButton
								className={
									fav
										? classNames(classes.favoriteIconSel)
										: classNames(classes.favoriteIcon)
								}
								onClick={handleFavored}
							>
								<FavoriteBorderIcon style={{ fontSize: '2rem' }} />
							</IconButton>
						) : (
							<IconButton
								className={classes.favoriteIcon}
								onClick={() => history.push('/login')}
							>
								<FavoriteBorderIcon
									style={{ fontSize: '2rem' }}
									// color="primary"
								/>
							</IconButton>
						)}

						<IconButton className={classes.chatIcon} onClick={handleChat}>
							<ChatIcon style={{ fontSize: '2rem' }} />
						</IconButton>
					</Box>
				</CardActions>
				<img
					className={classes.mediaDetailAdvert}
					alt="advert pic"
					src={image ? `${URLIMG}images/adverts/${image}` : placeholder}
				/>

				<Typography component="p" className={classes.priceDetailAdvert}>
					{`${price} €`}
				</Typography>
				<Typography component="h2" className={classes.nameDetailAdvert}>
					{name}
				</Typography>

				<Typography component="p" className={classes.descAdvert}>
					{desc}
				</Typography>

				<div>
					<p>
						<span
							className={
								transaction === 'wanted'
									? classNames(classes.wanted)
									: classNames(classes.sale)
							}
						>
							{/* {transaction} */}
							{transaction === 'wanted'? (`${t('adverts.Wanted')}`):(`${t('adverts.Sell')}`)}

						</span>
					</p>
					<p>
						<span className={classes.tagsAdvert}>{tags.join(' - ')}</span>
					</p>
				</div>
				<Box className={classes.updateAndDeleteDetailAdvert}>
					<Link to={`/adverts/edit/${_id}`}>
						<Button
							variant="contained"
							color="primary"
							onClick={onEdit}
							startIcon={<CreateIcon />}
						>
							{t('adverts.Update')}
						</Button>
					</Link>
					<Button
						variant="contained"
						color="secondary"
						onClick={onDelete}
						style={{ marginLeft: '0.7rem' }}
						startIcon={<DeleteIcon />}
					>
						{t('adverts.Delete')}
					</Button>
				</Box>

				<Box className={classes.socialDetailAdvert}>
					<ShareAdvert
						Url={`${process.env.REACT_APP_FRONT_LOCALHOST}adverts/${name}/${_id}`}
					/>
				</Box>
			</Card>
			<div className={classes.containerGoBack}>
				<GoBackButton styleclassName={'goBack'}>
					{t('page404.GO BACK')}
				</GoBackButton>
			</div>
		</Grid>
	);
}

AdvertDetail.propTypes = {
	...advert,
	image: T.string,
	onDelete: T.func.isRequired,
	onEdit: T.func.isRequired,
};

AdvertDetail.defaultProps = {
	image: null,
};

export default AdvertDetail;
