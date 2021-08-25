import React, { useState, useEffect } from 'react';
import T from 'prop-types';
import {
	Grid,
	Paper,
	Avatar,
	TextField,
	Button,
	Radio,
	CardMedia,
} from '@material-ui/core';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { useStyles } from '../../shared/useStyles';
import { FormLabel, FormControl } from '@material-ui/core';
import { RadioGroup } from '@material-ui/core';
import { cyan } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import placeholder from '../../../assets/images/placeholder.png';

import AddIcon from '@material-ui/icons/Add';
import { InputFile } from '../../shared';
import { useTranslation } from 'react-i18next';
import { useDispatch} from 'react-redux';
import { getAllTags } from '../../../api/adverts';
import { tagsLoadedAction } from '../../../store/actions';

const URLIMG = process.env.REACT_APP_API_BASE_URL;

const GreenCheckbox = withStyles({
	root: {
	  color: cyan[400],
	  '&$checked': {
		color: cyan[600],
	  },
	},
	checked: {},
})((props) => <Checkbox color="default" {...props} />);
function EditAdvertForm({
	name,
	transaction,
	desc,
	price,
	tags,
	image,
	reserved,
	sold,
	_id,
	onSubmit }) {
	const [t] = useTranslation('global');
	const classes = useStyles();
	const dispatch = useDispatch();
	const [advertEdit, setAdvertEdit] = React.useState({
		nameNew: name,
		descNew: desc,
		priceNew: price,
		transactionNew: transaction,
		tagsNew: [tags],
		reservedNew: reserved,
		soldNew: sold,
		imageNew: image,
	});
	
	const { nameNew, descNew, priceNew, transactionNew, tagsNew } = advertEdit;
	const [newImage, setNewImage] = useState();

	const urlImage = `${URLIMG}images/adverts/${image}`;

	const [stateReserved, setStateReserved] = React.useState({ reservedNew: reserved });
	const [stateSold, setStateSold] = React.useState({ soldNew: sold });
	
	// Obtengo los tags del backend para pintarlos en el select multiple 
	const [listaTags, setListaTags] = React.useState([]);
	const [tagsNews, setTagsNews] = React.useState(tags);
	//console.log('tagsNews', tagsNews);
	
	useEffect(() => {
		// Obtenemos los tags del backend para mostrarlos
		getAllTags().then(setListaTags);
		dispatch(tagsLoadedAction());
	}, []);
		
	const handleToggleReserved = ({ target }) => {
		setStateReserved(s => ({ ...s, [target.name]: !s[target.name] }));
	};

	const handleToggleSold = ({ target }) => {
		setStateSold(s => ({ ...s, [target.name]: !s[target.name] }));
	};

	const handleChange = (event) => {
		 
	 	setAdvertEdit((oldAdvert) => ({
	 		...oldAdvert,
	 		[event.target.name]:
	 			event.target.type === 'checked'
	 				? event.target.checked
	 				: event.target.value,
	 	}));
	};
	
	const handleChangeTags = (event) => {
		if (event.target.checked) {
			setTagsNews((oldTags) => [...oldTags, event.target.value]);
		} else {
			setTagsNews((oldTags) => oldTags.filter((tag) => tag !== event.target.value));
		}
	};

	const handleChangeImage = (event) => {
		
		const file = event.target.files[0];
		if (file) {
			setNewImage(file);
		}
	};

	const handleSubmit = async (event) => {
		event.preventDefault();

		const updateAdvert = new FormData();
		
		updateAdvert.append('_id', _id);
		updateAdvert.append('name', advertEdit.nameNew);
		updateAdvert.append('desc', advertEdit.descNew);
		updateAdvert.append('price', advertEdit.priceNew);
		updateAdvert.append('transaction', advertEdit.transactionNew);
		updateAdvert.append('sold', stateSold['soldNew']);
		updateAdvert.append('reserved', stateReserved['reservedNew']);
		updateAdvert.append('tags', tagsNews);
		
		if (newImage !== undefined && (newImage !== `${URLIMG}images/adverts/${image}`)) {
			//console.log('entro en imagen cambiada');
			updateAdvert.append('image', newImage);
		}
		
		onSubmit(_id, updateAdvert);
		setNewImage(null);
	};

	return (
		<Grid>
			<form encType="multipart/form-data" onSubmit={handleSubmit}>
				<Paper
					elevation={10}
					style={{
						padding: '30px',
						height: '1000px',
						margin: '50px auto',
						width: '600px',
					}}
				>
					<Grid align="center">
						<Avatar style={{ backgroundColor: '#1dba849e' }}>
							<AddIcon />
						</Avatar>
						<h2>{t('adverts.Edit Advert')}</h2>
					</Grid>
					<TextField
						label={t('adverts.Advert Name')}
						placeholder={t('adverts.Change product name')}
						fullWidth
						required
						name="nameNew"
						defaultValue={name}
						onChange={handleChange}
						autoFocus={true}
					/>
					<TextField className={classes.textArea}
						id="outlined-multiline-flexible"
						label={t('adverts.Description')}
						placeholder={t('adverts.Change description')}
						multiline
						rows={4}
						fullWidth
						required
						name="descNew"
						defaultValue={desc}
						onChange={handleChange}
					/>
					<TextField
						label={t('adverts.price')}
						placeholder={t('adverts.price')}
						fullWidth
						required
						type="number"
						name="priceNew"
						defaultValue={price}
						onChange={handleChange}
						autoFocus={true}
					/>
					<FormControl component="fieldset">
					<FormLabel component="legend">{t('adverts.Transaction Type')}</FormLabel>
						
						<RadioGroup
							aria-label="transaction"
							name="transactionNew"
							defaultValue={transaction}
							onChange={handleChange}
							row
						>
							<FormControlLabel
								value="sale"
								control={<Radio />}
								label={t('adverts.Sell')}							
								/>
							<FormControlLabel
								value="wanted"
								control={<Radio />}
								label={t('adverts.Wanted')}
							/>
						</RadioGroup>
					</FormControl>
									
					<FormLabel
						component="legend"
						placeholder={t('adverts.Advert Actual Image')}
						>{t('adverts.Advert Actual Image')} </FormLabel>
				
						<CardMedia className={classes.mediaEditAdvert} image={urlImage} />
						<FormLabel component="legend">{t('adverts.Change image')}</FormLabel>
						<InputFile name = "imageNew"
								   placeholder = {t('adverts.Change image')}
								   src = {placeholder}
								   onChange = {handleChangeImage}
						/>
						<FormLabel component="legend">{t('adverts.Change tags')}</FormLabel> 
						<div>
							{listaTags.map((option) => (
								<label key={option}> 
									<GreenCheckbox
										name="tagsNews"
										type="checkbox"
										key={option}
										value={option}
										defaultChecked={tagsNews.includes(option)}
										onChange={handleChangeTags}
									/>
									{option}
								</label>
							))}
						</div>
					
				 		<FormLabel component="legend">{t('adverts.Change status adverts')}</FormLabel>
						{Object.keys(stateReserved).map(key => (
									<FormControlLabel
										control={<GreenCheckbox
											type="checkbox"
											label='Reservado'
											onChange={handleToggleReserved}
											key={key}
											name={key}
											checked={stateReserved[key]}
										/>}
										label= {t('adverts.Reserved')}
									/>
								))}
					
					
						{Object.keys(stateSold).map(key => (
							<FormControlLabel
								control={<GreenCheckbox
									type="checkbox"
									onChange={handleToggleSold}
									key={key}
									name={key}
									checked={stateSold[key]}
								/>}
								label={t('adverts.Sold')}
							/>
						))}
						
					<Button
						type="submit"
						style={{ margin: '30px 0' }}
						color="primary"
						fullWidth
						variant="contained"
						disabled={
							!nameNew || !transactionNew || !priceNew || tagsNews.length === 0
						}
					>
						{t('adverts.Update Advert')}
					</Button>
				</Paper>
			</form>
		</Grid>
	);
}

EditAdvertForm.propTypes = {
	onSubmit: T.func.isRequired,
};

export default EditAdvertForm;
