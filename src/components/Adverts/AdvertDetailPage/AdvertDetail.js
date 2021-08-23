import React from 'react';
import { useHistory } from 'react-router';
import T from 'prop-types';
import placeholder from '../../../assets/images/placeholder.png';
import { advert } from '../propTypes';
import { formatDistanceToNow, format } from 'date-fns';
import DeleteIcon from '@material-ui/icons/Delete';
import CreateIcon from '@material-ui/icons/Create';
import ChatIcon from '@material-ui/icons/Chat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { useStyles } from './advertDetailCSS';
import ShareAdvert from '../shareAdvert';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import { addFavorites, deleteFavorites, getUserFav } from '../../../api/user';
import {
	Grid,
	Button,
	Card,
	Paper,
	IconButton,
	CardActionArea,
	CardActions,
	CardMedia,
	CardContent,
	Typography,
	Avatar,
	Box,
} from '@material-ui/core';
import {
	conversationLoadAction,
	conversationCreatedAction,
	setFavoritesUser,
} from '../../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { getUser, getIsLogged } from '../../../store/selectors';
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

	const handleChat = async (e) => {
		e.preventDefault();
		const conversation = await dispatch(
			conversationLoadAction(userId._id, _id)
		);
		//console.log('userId', userId._id, _id);
		if (userId._id === user._id) {
			console.log('el anuncio es tuyo');
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
					<Box className={classes.author}>
						<Link
							to={`/${userId.username}/adverts`}
							style={{ textDecoration: 'none' }}
						>
							<Avatar />
						</Link>
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
					<Box>
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
						{!isLogged && (
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
				<CardMedia
					className={classes.mediaDetailAdvert}
					image={image ? `${URLIMG}images/adverts/${image}` : placeholder}
				/>
				<Typography component="p" className={classes.priceDetailAdvert}>
					{`${price} €`}
				</Typography>
				<Typography component="h2" className={classes.nameDetailAdvert}>
					{name}
				</Typography>
				<Box className={classes.tagAndDescDetailAdvert}>
					<Typography component="p">
						<span className={classes.spanDetailAdvert}>
							{t('adverts.Tags')}
						</span>
						{tags.join(' - ')}
					</Typography>
					<Typography component="p">
						<span className={classes.spanDetailAdvert}>
							{t('adverts.Transaction')}
						</span>
						{transaction}
					</Typography>
				</Box>
				<Box className={classes.tagAndDescDetailAdvert}>
					<Typography component="p" style={{ fontWeight: '500' }}>
						{desc}
					</Typography>
				</Box>
				<Box className={classes.updateAndDeleteDetailAdvert}>
					<Link
						className={classes.containerNewAdvert}
						to={`/adverts/edit/${_id}`}
					>
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
						startIcon={<DeleteIcon />}
					>
						{t('adverts.Delete')}
					</Button>
				</Box>

				<Box className={classes.socialDetailAdvert}>
					<ShareAdvert Url={`http://localhost:3000/adverts/${name}/${_id}`} />
					{/* <ShareAdvert Url={`${process.env.REACT_FRONT_LOCALHOST}adverts/${name}/${_id}`} /> */}
					{/* <ShareAdvert Url={'http://localhost:3000/username/desc_anuncio'} /> */}
				</Box>
			</Card>
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
