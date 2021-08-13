import React from 'react';
import T from 'prop-types';
import Container from '@material-ui/core/Container';
import ConfirmationButton from '../../shared/ConfirmationButton';
import placeholder from '../../../assets/images/placeholder.png';
import { advert } from '../propTypes';
import { formatDistanceToNow, format } from 'date-fns';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from '@material-ui/icons/Delete';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import CreateIcon from '@material-ui/icons/Create';
import CardContent from '@material-ui/core/CardContent';
import Avatar from '@material-ui/core/Avatar';
import Box from '@material-ui/core/Box';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import ChatIcon from '@material-ui/icons/Chat';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';
import { useStyles } from '../../shared/useStyles';
import ShareAdvert from '../shareAdvert';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

import { conversationLoadAction } from '../../../store/actions';
import { useDispatch } from 'react-redux';

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

	const handleChat = async (e) => {
		e.preventDefault();

		console.log(userId._id);
		console.log(_id);
		const conversation = await dispatch(
			conversationLoadAction(userId._id, _id)
		);
		if (conversation.length !== 0) {
			console.log('existe');
		} else {
			const newConversation = {
				advertisementId: _id,
				members: [userId._id, userId],
			};
			dispatch();
		}
		//datos id anuncio id usuario propietario
		//comprobar si existe la conversacion
		//si no crearla
		//redirigir a chat
		//cargar la conversación en currentChat
	};

	return (
		<Grid
			item
			xs={12}
			sm={12}
			md={12}
			elevation={10}
			style={{
				height: '830px',
				margin: '40px auto',
				width: '600px',
			}}
		>
			<Card
				style={{
					padding: 20,
					height: '810px',
				}}
			>
				<CardActions className={classes.headerDetail}>
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
						{/* <Link to={`/chat/${_id}`} style={{ textDecoration: 'none' }}> */}
						<IconButton className={classes.chatIcon} onClick={handleChat}>
							<ChatIcon style={{ fontSize: '2rem' }} />
						</IconButton>
						{/* </Link> */}
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
							style={{
								color: '#b2b3b4',
								marginRight: '1rem',
								fontWeight: '700',
							}}
						>
							{t('adverts.Tags')}
						</span>
						{tags.join(' - ')}
					</Typography>
					<Typography component="p">
						<span
							style={{
								color: '#b2b3b4',
								marginRight: '1rem',
								fontWeight: '700',
							}}
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
