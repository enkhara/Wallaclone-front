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
import { useSelector, useDispatch } from 'react-redux';
//import { getTags } from '../../../store/selectors';
import { getAllTags } from '../../../api/adverts';
import { tagsLoadedAction } from '../../../store/actions';
import { ToggleButton } from '@material-ui/lab';
import  CheckIcon from '@material-ui/icons/Check';
	
import SelectTags from '../SelectTags';

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
	const [advertEdit, setAdvertEdit] = React.useState({
		nameNew: name,
		descNew: desc,
		priceNew: price,
		transactionNew: transaction,
		tagsNew: tags,
		reservedNew: reserved,
		soldNew: sold,
	  });
	
	const { nameNew, descNew, priceNew, transactionNew, tagsNew, soldNew, reservedNew } = advertEdit;
	const [t] = useTranslation('global');
	const classes = useStyles();
	const dispatch = useDispatch();
	
	//const [advertNew, setAdvertNew] = useState('')
	//const [value, setValue] = useState('');
	const [newImage, setNewImage] = useState(image);
	const [selected, setSelected] = React.useState(false);
	//const [file, setFile] = useState(null);
 	
	  // Obtengo los tags del backend para pintarlos en el select multiple 
	  const [listaTags, setListaTags] = React.useState([]);
  
	  React.useEffect(() => {
		  getAllTags().then(setListaTags);
		  console.log('listatags', listaTags)
		  dispatch(tagsLoadedAction());
	  }, []);

	// Obtengo los tags del backend para mostrarlos
	// const listaTags = useSelector(getTags);
 	//const [listaTags, setListaTags] = React.useState([]);
  
 	// React.useEffect(() => {
	// 	 getAllTags().then(setListaTags);
	//   }, []);
	
// 	  React.useEffect(() => {
// 		// despachamos la accion de carga de tags 
// 		dispatch(tagsLoadedAction());
//   }, []);
	
	
	console.log('imagen', image ? `${URLIMG}images/adverts/${image}` : placeholder);
	console.log('tags', tags);

	//console.log('advert', advert)
	//  const handleLoad = (image) => {
	//  	console.log('estoy en handleLoad', image);
	//  	setImagen(image);
	//  	//loadSrcFromFile(image);
	// }
	
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

	const handleChangeImage = (event, image) => {
		console.log('1 image', image);
		const file = image || event.target.files[0];
		if (file) {
			setNewImage(file);
		// } else {
		// 	setNewImage([]);
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		let updateAdvert = new FormData();

		updateAdvert.append('name', nameNew);
		updateAdvert.append('desc', descNew);
		updateAdvert.append('price', priceNew);
		updateAdvert.append('transaction', transactionNew);
		updateAdvert.append('sold', soldNew);
		updateAdvert.append('reserved', reservedNew);
		updateAdvert.tags.forEach((tag) => updateAdvert.append('tags[]', tag));
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
			<form onSubmit={handleSubmit}>
				<Paper
					elevation={10}
					style={{
						padding: '30px',
						height: '850px',
						margin: '50px auto',
						width: '500px',
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
						name="name"
						defaultValue={name}
						//value={nameNew}
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
						name="desc"
						defaultValue={desc}
						//value={descNew}
						onChange={handleChange}
					/>
					<TextField
						label={t('adverts.price')}
						placeholder={t('adverts.price')}
						fullWidth
						required
						type="number"
						name="price"
						defaultValue={price}
						//value={value}
						onChange={handleChange}
						autoFocus={true}
					/>
					<FormControl component="fieldset">
					<FormLabel component="legend">{t('adverts.Transaction Type')}</FormLabel>
						
						<RadioGroup
							aria-label="transaction"
							name="transaction"
							defaultValue={transaction}
							onChange={handleChange}
							row
						>
							<FormControlLabel
								value="sell"
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
										
					{/* <input
						id="fileinput"
						onChange={selectedHandler}
						className="form-control"
						type="file" /> */}
						<FormLabel
						component="legend"
						placeholder={t('adverts.Advert Actual Image')}
						>{t('adverts.Advert Actual Image')} </FormLabel>
							<p>
					</p>
					<img src={image ? `${URLIMG}images/adverts/${image}` : placeholder} style={imgStyle}></img>
				
						
  				<FormLabel component="legend">{t('adverts.Change image')}</FormLabel>
					<InputFile name="image"
						placeholder={t('adverts.Change image')}
						//value={image ? `${URLIMG}images/adverts/${image}` : placeholder}
						src = {image ? `${URLIMG}images/adverts/${image}` : placeholder}
						//onChange={handleChangeImage(e,image)}
  						//onLoad={handleLoad}
						onChange={handleChangeImage}
					/>

					 <FormLabel component="legend">{t('adverts.Change tags')}</FormLabel>
					 {/* <SelectTags
						multiple
						name="tags"
						//value={tags}
						onChange={handleChange}
					/>   */}
					{/* <CheckboxGroup
						multiple
						name="tags"
						Value={tags}
						onChange={handleChange}
					/>   */}
					{/* <CheckboxGroup
      					multiple={true}
        				name="tags"
        				value={tags}
						//checked={listaTags.includes(tags)}
        				onChange = {handleChange}
					>
					
					  </CheckboxGroup>  */}
					
					  <ToggleButton
						value={reserved}
  						selected={selected}
  						onChange={() => { setSelected(!selected); }}
						>
  							<CheckIcon />
					</ToggleButton>
					
						<ToggleButton
						value={sold}
  						selected={selected}
  						onChange={() => { setSelected(!selected); }}
						>
  							<CheckIcon />
					</ToggleButton>
					
					  {/* {reserved ? (
            <button
              
              //onClick={() => updateStatus(false)}
            >
              Reservado
            </button>
          ) : (
            <button
              
              //onClick={() => updateStatus(true)}
            >
              No Reservado
            </button>
          )}

		  {sold ? (
            <button
              
             // onClick={() => updateStatus(false)}
            >
              Vendido
            </button>
          ) : (
            <button
              
             // onClick={() => updateStatus(true)}
            >
              No Vendido
            </button>
          )}		 */}
					 {/* <FormControlLabel
						control={<GreenCheckbox
									
							checked={reserved} 
					    			onChange={handleChange}
									name="reserved" />}
        				label= {t('adverts.Reserved')}
					/>
					<FormControlLabel
						control={<GreenCheckbox
									checked={sold} 
									onChange={handleChange}
									name="sold" />}
        				label= {t('adverts.Sold')}
					/> */}
					
					<Button
						type="submit"
						style={{ margin: '30px 0' }}
						color="primary"
						fullWidth
						variant="contained"
						disabled={
							!name || !transaction || !price || tags.length === 0
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
