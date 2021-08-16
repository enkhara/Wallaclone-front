import React, { useState } from 'react';
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
import { getAllTags } from '../../../api/adverts';

import AddIcon from '@material-ui/icons/Add';
//import SelectTags from '../SelectTags';
import { CheckboxGroup } from '../../shared';
import { InputFile } from '../../shared';
import { useTranslation } from 'react-i18next';
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
	//const { name, desc, price, transaction, tags, sold, reserved, image } = advert;
	const [t] = useTranslation('global');
	const classes = useStyles();
	
	const [advertNew, setAdvertNew] = useState('')
	const [value, setValue] = useState('');
	const [newImage, setNewImage] = useState(image);
	const [file, setFile] = useState(null);
 	// Obtengo los tags del backend para mostrarlos 
 	const [listaTags, setListaTags] = React.useState([]);
  
 	React.useEffect(() => {
		 getAllTags().then(setListaTags);
	  }, []);
	
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
		setFile(event.target.files[0]);
	}

	const handleChange = (event) => {
		console.log('entro en ', event.target.name);
		console.log('event.target.type ', event.target.type);
	 	setAdvertNew((oldAdvert) => ({
	 		...oldAdvert,
	 		[event.target.name]:
	 			event.target.type === 'checked'
	 				? event.target.checked
	 				: event.target.value,
	 	}));
	 };

	const handleChangeImage = (event, image) => {
		console.log('1', image);
		const file = image || event.target.files[0];
		if (file) {
			setNewImage(file);
		} else {
			setNewImage([]);
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		let updateAdvert = new FormData();

		updateAdvert.append('name', name);
		updateAdvert.append('desc', desc);
		updateAdvert.append('price', price);
		updateAdvert.append('transaction', transaction);
		updateAdvert.append('sold', sold);
		updateAdvert.append('reserved', reserved);
		updateAdvert.tags.forEach((tag) => updateAdvert.append('tags[]', tag));
		if (newImage) {
			updateAdvert.append('image', newImage);
		}
		else {
			// dejamos la imagen que tenia el anuncio cargada
			updateAdvert.append('image', image);
		}
			
		onSubmit(updateAdvert);
		setFile(null);
	};

	return (
		<Grid>
			<form onSubmit={handleSubmit}>
				<Paper
					elevation={10}
					style={{
						padding: '30px',
						height: '800px',
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
						//value={value}
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
						//value={value}
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
					
					<FormLabel component="legend">{t('adverts.Change image')}</FormLabel>
					<InputFile name="image"
						placeholder={t('adverts.Change image')}
						value={image ? `${URLIMG}images/adverts/${image}` : placeholder}
						src = {image ? `${URLIMG}images/adverts/${image}` : placeholder}
						//onChange={handleChangeImage(e,image)}
  
						//onLoad={handleLoad}
						onChange={handleChangeImage}

					/>
					<input
						id="fileinput"
						onChange={selectedHandler}
						className="form-control"
						type="file" />
					<img src= {image ? `${URLIMG}images/adverts/${image}` : placeholder} ></img>
					
					{/* <SelectTags
						multiple
						name="tags"
						//value={tags}
						//onChange={handleChange}
					/>  */}
					{/* <CheckboxGroup
						multiple
						name="tags"
						Value={tags}
						onChange={handleChange}
					/>  */}
					{/* <CheckboxGroup
      					multiple={true}
        				name="tags"
        				value={tags}
        				onChange = {handleChange}
					>
						{
          				listaTags.map(tag => (
          					<option key={tag} value={tag} > {tag} </option>
          				))
        			}
					  </CheckboxGroup> */}
        			
        
      				
					 <FormControlLabel
						control={<GreenCheckbox
									checked={reserved ? true : false }
					    			onChange={handleChange}
									name="reserved" />}
        				label= {t('adverts.Reserved')}
					/>
					<FormControlLabel
						control={<GreenCheckbox
									checked={sold ? true : false }
									onChange={handleChange}
									name="sold" />}
        				label= {t('adverts.Sold')}
      				/> 
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
