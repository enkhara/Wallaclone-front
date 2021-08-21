import React, { useState} from 'react';
import T from 'prop-types';
import {
	Grid,
	Paper,
	Avatar,
	TextField,
	Button,
	Radio,
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
import { CheckboxGroup } from '../../shared';
import { InputFile } from '../../shared';
import { useTranslation } from 'react-i18next';
import { useDispatch } from 'react-redux';
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

const imgStyle = {
	border: '1px solid #ddd',
	borderRadius: '4px',
	padding: '5px',
	width: '200px',
};
function EditAdvertForm({
	name,
	transaction,
	desc,
	price,
	tags,
	image,
	reserved,
	sold, 
	updatedAt,
	createdAt,
	userId,
	_id,
	onSubmit })
{
	const [t] = useTranslation('global');
	const classes = useStyles();
	const dispatch = useDispatch();
	const [advertEdit, setAdvertEdit] = React.useState({
		nameNew: name,
		descNew: desc,
		priceNew: price,
		transactionNew: transaction,
		tagsNew: tags,
		reservedNew: reserved,
		soldNew: sold,
		imageNew: image, 
	  });
	
	const { nameNew, descNew, priceNew, transactionNew, tagsNew, soldNew, reservedNew, imageNew} = advertEdit;
    const [newImage, setNewImage] = useState(image);
    
	const [stateReserved, setStateReserved] = React.useState({
	 	reservedNew: reserved
	 });

	const [stateSold, setStateSold] = React.useState({
		soldNew: sold
	});

    // Obtengo los tags del backend para pintarlos en el select multiple 
    const [listaTags, setListaTags] = React.useState([]);
  
	React.useEffect(() => {
		// Obtenemos los tags del backend para mostrarlos
		getAllTags().then(setListaTags);
		dispatch(tagsLoadedAction());
	    }, []);
	console.log('_id a actualizar: ', _id);
	//console.log('imagen', image ? `${URLIMG}images/adverts/${image}` : placeholder);
	//console.log('tags', tags);
	//console.log('listaTags', listaTags);

	//console.log('advert', advert)
	//  const handleLoad = (image) => {
	//  	console.log('estoy en handleLoad', image);
	//  	setImagen(image);
	//  	//loadSrcFromFile(image);
	// }
	
	const handleToggleReserved = ({ target }) => {
		setStateReserved(s => ({ ...s, [target.name]: !s[target.name] }));
	};

	const handleToggleSold = ({ target }) => {
		setStateSold(s => ({ ...s, [target.name]: !s[target.name] }));
	};

	const selectedHandler = event => {
		console.log('imagen seleccionada', event.target.files[0]);
		setNewImage(event.target.files[0]);
	}

	const handleChange = (event) => {
		console.log('entro en ', event.target.name);
		console.log('event.target.type ', event.target.type);
		console.log('event.target.value ', event.target.value);
	 	setAdvertEdit((oldAdvert) => ({
	 		...oldAdvert,
	 		[event.target.name]:
	 			event.target.type === 'checked'
	 				? event.target.checked
	 				: event.target.value,
	 	}));
	 };

	const handleChangeImage = (event) => {
		//console.log('1 image', image);
		//const file = image || event.target.files[0];
		const file = event.target.files[0];
		if (file) {
			setNewImage(file);
		// } else {
		// 	setNewImage([]);
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		let updateAdvert = new FormData();
		console.log('_id', _id);
		updateAdvert.append('_id', _id);
		updateAdvert.append('userId', userId);
		updateAdvert.append('name', advertEdit.nameNew);
		updateAdvert.append('desc', advertEdit.descNew);
		updateAdvert.append('price', advertEdit.priceNew);
		updateAdvert.append('transaction', advertEdit.transactionNew);
		updateAdvert.append('sold', advertEdit.soldNew);
		updateAdvert.append('reserved', advertEdit.reservedNew);
		updateAdvert.append('tags', advertEdit.tagsNew);
		//advertEdit.tagsNew.forEach((tag) => updateAdvert.append('tags[]', tag));
		if (newImage) {
			updateAdvert.append('image', newImage);
		}
		else {
			// dejamos la imagen que tenia el anuncio cargada
			updateAdvert.append('image', image);
		}
			
		onSubmit(updateAdvert);
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
							<p>
					</p>
					<img src={image ? `${URLIMG}images/adverts/${image}` : placeholder} style={imgStyle}></img>
				
						
  				<FormLabel component="legend">{t('adverts.Change image')}</FormLabel>
					<InputFile name="imageNew"
						placeholder={t('adverts.Change image')}
						src = {image ? `${URLIMG}images/adverts/${image}` : placeholder}
						onChange={handleChangeImage}
					/>

					 <FormLabel component="legend">{t('adverts.Change tags')}</FormLabel>
					 
					<div>
						{listaTags.map((option) => (
							<label key={option}> 
								<GreenCheckbox
									name="tagsNew"
									type="checkbox"
									key={option}
									value={option}
									defaultChecked={tags.includes(option)}
									onChange={handleChange}
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
							!nameNew || !transactionNew || !priceNew || tagsNew.length === 0
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
