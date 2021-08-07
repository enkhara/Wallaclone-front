import React from 'react';
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
import { FormLabel, FormControl } from '@material-ui/core';
import { RadioGroup } from '@material-ui/core';
import { green } from '@material-ui/core/colors';
import { withStyles } from '@material-ui/core/styles';
import Checkbox from '@material-ui/core/Checkbox';

import AddIcon from '@material-ui/icons/Add';
import SelectTags from '../SelectTags';
import { InputFile } from '../../shared';

const GreenCheckbox = withStyles({
	root: {
	  color: green[400],
	  '&$checked': {
		color: green[600],
	  },
	},
	checked: {},
})((props) => <Checkbox color="default" {...props} />);
  
function EditAdvertForm({ onSubmit }) {
	const [advert, setAdvert] = React.useState({
		name: '',
		desc: '',
		price: 0,
		transaction: '',
		tags: [],
		sold: '',
		reserved: '',
	});

	const { name, desc, price, transaction, tags, sold, reserved} = advert;

	const handleChange = (event) => {
		setAdvert((oldAdvert) => ({
			...oldAdvert,
			[event.target.name]:
				event.target.type === 'checked'
					? event.target.checked
					: event.target.value,
		}));
	};

	const [image, setImage] = React.useState('');

	const handleChangeImage = (event) => {
		if (event.target.files[0]) {
			setImage(event.target.files[0]);
		} else {
			setImage([]);
		}
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		let newAdvert = new FormData();
		newAdvert.append('name', advert.name);
		newAdvert.append('desc', advert.desc);
		newAdvert.append('price', advert.price);
		newAdvert.append('transaction', advert.transaction);
		newAdvert.append('sold', advert.sold);
		newAdvert.append('reserved', advert.reserved);
		advert.tags.forEach((tag) => newAdvert.append('tags[]', tag));
		if (image) {
			newAdvert.append('image', image);
		}

		onSubmit(newAdvert);
	};

	return (
		<Grid>
			<form onSubmit={handleSubmit}>
				<Paper
					elevation={10}
					style={{
						padding: '30px',
						height: '500px',
						margin: '50px auto',
						width: '500px',
					}}
				>
					<Grid align="center">
						<Avatar style={{ backgroundColor: '#1dba849e' }}>
							<AddIcon />
						</Avatar>
						<h2>Edit advert</h2>
					</Grid>
					<TextField
						label="advertName"
						placeholder="Product name"
						fullWidth
						required
						name="name"
						value={name}
						onChange={handleChange}
						autoFocus={true}
					/>
					<TextField
						label="price"
						placeholder="Price"
						fullWidth
						required
						type="number"
						name="price"
						value={price}
						onChange={handleChange}
						autoFocus={true}
					/>
					{/* <TextField
						label="image"
						placeholder="Change image"
						type="file"
						fullWidth
						name="image"
						onChange={handleChangeImage}
					/> */}
					<InputFile name="image"
						placeholder="Change image"
						onChange={handleChangeImage} />
					<TextField
						label="desc"
						placeholder="Edit description"
						type="text"
						fullWidth
						required
						name="desc"
						value={desc}
						onChange={handleChange}
					/>
					<FormControl component="fieldset">
						<FormLabel component="legend">Transaction</FormLabel>
						<RadioGroup
							aria-label="transaction"
							name="transaction"
							value={transaction}
							onChange={handleChange}
							row
						>
							<FormControlLabel value="sell" control={<Radio />} label="Sell" />
							<FormControlLabel
								value="wanted"
								control={<Radio />}
								label="Wanted"
							/>
						</RadioGroup>

					</FormControl>
					<SelectTags
						multiple
						name="tags"
						value={tags}
						onChange={handleChange}
					/>
					 <FormControlLabel
						control={<GreenCheckbox
							checked={reserved}
							onChange={handleChange}
							name="reserved" />}
        				label="Reserved"
					/>
					<FormControlLabel
						control={<GreenCheckbox
							checked={sold}
							onChange={handleChange}
							name="sold" />}
        				label="Sold"
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
						Edit Advert
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
