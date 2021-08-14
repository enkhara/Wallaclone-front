import React from 'react';
import { useHistory } from 'react-router';
import T from 'prop-types';
import ConfirmationButton from '../../shared/ConfirmationButton';
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
} from '../../../store/actions';
import { useDispatch, useSelector } from 'react-redux';
import { getUser } from '../../../store/selectors';

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
	console.log('usuario', user);

	const history = useHistory();

	const handleChat = async (e) => {
		e.preventDefault();
		const conversation = await dispatch(
			conversationLoadAction(userId._id, _id)
		);

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

	return (
		<Grid
			item
			xs={12}
			sm={12}
			md={12}
			elevation={10}
			className={classes.gridDetailAdvert}
		>
			<Card
				 className={classes.cardDetailAdvert}
			>
				<CardActions className={classes.headerDetailAdvert}>
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
							</Typography>
						</Box>
					</Box>
					<Box>
						<IconButton className={classes.favoriteIcon}>
							<FavoriteBorderIcon style={{ fontSize: '2rem' }} />
						</IconButton>
						 
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
						<span
							className={classes.spanDetailAdvert}
						>
							{t('adverts.Tags')}
						</span>
						{tags.join(' - ')}
					</Typography>
					<Typography component="p">
						<span
							className={classes.spanDetailAdvert}
						>
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
						to={`/advert/edit/${_id}`}
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
					<ConfirmationButton
						variant="contained"
						color="secondary"
						confirmation={t('adverts.Confirm advert deletion')}
						onConfirm={onDelete}
						startIcon={<DeleteIcon />}
					>
						{t('adverts.Delete')}
					</ConfirmationButton>
				</Box>

				<Box className={classes.socialDetailAdvert}>
					<ShareAdvert Url={'http://localhost:3000/username/desc_anuncio'} />
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
