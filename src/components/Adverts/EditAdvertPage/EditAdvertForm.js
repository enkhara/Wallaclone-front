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
import { FormLabel, FormControl } from '@material-ui/core';
import { RadioGroup } from '@material-ui/core';
import { cyan } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';
import placeholder from '../../../assets/images/placeholder.png';
import UpdateIcon from '@material-ui/icons/Update';
import { InputFile, GoBackButton} from '../../shared';
import { useTranslation } from 'react-i18next';
import { useDispatch} from 'react-redux';
import { getAllTags } from '../../../api/adverts';
import { tagsLoadedAction } from '../../../store/actions';
import ShareAdvert from '../shareAdvert';
import '../NewAndEditAdvert.css';

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
			<Paper
				elevation={10}
				className="container_paper"	
			>
				<form encType="multipart/form-data" onSubmit={handleSubmit}>
					<Grid align="center">
						<Avatar style={{ backgroundColor: '#62aae6f4' }}>
							<UpdateIcon/>
						</Avatar>
						<h2>{t('adverts.Edit Advert')}</h2>
					</Grid>
					<p>{t('adverts.Advert Name')}*</p>
					<TextField
						placeholder={t('adverts.Change product name')}
						fullWidth
						required
						name="nameNew"
						defaultValue={name}
						onChange={handleChange}
						autoFocus={true}
					/>
					<p>{t('adverts.Description')}*</p>
					<textarea
						placeholder={t('adverts.Change description')}
						required
						name="descNew"
						defaultValue={desc}
						onChange={handleChange}
					/>
					 <div id="price_buy">
						 <section>
						 	<p>{t('adverts.price')}*</p>
							<TextField
								placeholder={t('adverts.price')}
								required
								type="number"
								name="priceNew"
								variant="outlined"
								defaultValue={price}
								onChange={handleChange}
								 
							/>
						 </section>
						 <section id="transaction">
							<p>{t('adverts.Transaction Type')}*</p>
							<FormControl component="fieldset">
								<RadioGroup
									aria-label="transaction"
									name="transactionNew"
									required
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
              			</section>
					</div>
					<p>{t('adverts.Change tags')}*</p>
          			<section>
						{listaTags.map((option) => (
							<label key={option}
								className="edit_tags"
							> 
								<GreenCheckbox
									name="tagsNews"
									type="checkbox"
									key={option}
									value={option}
									defaultChecked={tagsNews.includes(option)}
									onChange={handleChangeTags}
									style={{marginLeft:'0px',paddingLeft:'0px'}}
								/>
								{option}
							</label>
						))}
					 

          			</section>
					
					<section>
						<p>{t('adverts.Advert Actual Image')} </p>
						<CardMedia 
							className="mediaEditAdvert"
							image={urlImage} 
						/>
						<p>{t('adverts.Change image')}</p>
						<InputFile name = "imageNew"
							placeholder = {t('adverts.Change image')}
							src = {placeholder}
							onChange = {handleChangeImage}
						/>

					</section>			
														
				 	<p>{t('adverts.Change status adverts')}</p>
						{Object.keys(stateReserved).map(key => (
							<FormControlLabel
								control={<GreenCheckbox
								type="checkbox"
								label='Reservado'
								onChange={handleToggleReserved}
								key={1}
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
									key={2}
									name={key}
									checked={stateSold[key]}
								/>}
								label={t('adverts.Sold')}
							/>
						))}
					<input
						type="submit"
						value={t('adverts.Update Advert')}
						color="primary"
						className="new_advert_button"
						disabled={
							!nameNew || !transactionNew || !priceNew || tagsNews.length === 0
						}
					/>
				</form>
					<GoBackButton
                  		styleclassName={'neworedit'}
						  >
                  	{t('adverts.Cancel')}
                	</GoBackButton>
					<div className="socialDetailAdvert">
						<ShareAdvert
							Url={`${process.env.REACT_APP_FRONT_LOCALHOST}adverts/${name}/${_id}`}
							/>
					</div>
			</Paper>
		</Grid>
	);
}

EditAdvertForm.propTypes = {
	onSubmit: T.func.isRequired,
};

export default EditAdvertForm;
