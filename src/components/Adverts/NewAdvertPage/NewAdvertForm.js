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
import AddIcon from '@material-ui/icons/Add';
import SelectTags from '../SelectTags';

function NewAdvertForm({ onSubmit }) {
	const [advert, setAdvert] = React.useState({
		advertName: '',
		desc: '',
		price: 0,
		transaction: '',
		tags: [],
	});

	const { advertName, desc, price, transaction, tags, image } = advert;
	console.log(advert);

	const handleChange = (event) => {
		console.log(
			event.target.name,
			'===>',
			event.target.type,
			event.target.checked
		);
		setAdvert((oldAdvert) => ({
			...oldAdvert,
			[event.target.name]:
				event.target.type === 'checked'
					? event.target.checked
					: event.target.value,
		}));
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		let newAdvert = new FormData();
		newAdvert.append('name', advert.advertName);
		newAdvert.append('desc', advert.desc);
		newAdvert.append('price', advert.price);
		newAdvert.append('transaction', advert.transaction);
		newAdvert.append('tags', advert.tags);
		if (advert.image) {
			newAdvert.append('photo', advert.image);
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
						<h2>Create new advert</h2>
					</Grid>
					<TextField
						label="advertName"
						placeholder="Enter product name"
						fullWidth
						required
						name="advertName"
						value={advertName}
						onChange={handleChange}
						autoFocus={true}
					/>
					<TextField
						label="image"
						placeholder="Select image"
						type="file"
						fullWidth
						name="image"
						value={image}
						onChange={handleChange}
					/>
					<TextField
						label="desc"
						placeholder="Enter description"
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
					<Button
						type="submit"
						style={{ margin: '30px 0' }}
						color="primary"
						fullWidth
						variant="contained"
						disabled={!advertName || !transaction || price || tags.length === 0}
					>
						Created Advert
					</Button>
				</Paper>
			</form>
		</Grid>
	);
}

NewAdvertForm.propTypes = {
	onSubmit: T.func.isRequired,
};

export default NewAdvertForm;
