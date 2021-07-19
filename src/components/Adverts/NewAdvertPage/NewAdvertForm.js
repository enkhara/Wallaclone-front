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
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import { FormLabel, FormControl } from '@material-ui/core';
import { RadioGroup } from '@material-ui/core';

import SelectTags from '../SelectTags';

function NewAdvertForm({ onSubmit }) {
	const [advert, setAdvert] = React.useState({
		advertName: '',
		desc: '',
		price: 0,
		sale: true,
		tags: [],
	});

	const handleChange = (event) => {
		setAdvert((oldAdvert) => ({
			...oldAdvert,
			[event.target.name]:
				event.target.type === 'checkbox'
					? event.target.checked
					: event.target.value,
		}));
	};

	const handleSubmit = (event) => {
		event.preventDefault();

		let newAdvert = new FormData();
		newAdvert.append('name', advert.advertName);
		newAdvert.append('price', advert.price);
		newAdvert.append('sale', advert.sale);
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
						padding: 30,
						height: '500px',
						margin: '100px auto',
						width: 350,
					}}
				>
					<Grid align="center">
						<Avatar style={{ backgroundColor: '#1dba849e' }}>
							<LockOutlinedIcon />
						</Avatar>
						<h2>Create new advert</h2>
					</Grid>
					<TextField
						label="advertName"
						placeholder="Enter product name"
						fullWidth
						required
						name="advertName"
						value={advert.advertName}
						onChange={handleChange}
					/>
					<TextField
						label="image"
						placeholder="Select image"
						type="file"
						fullWidth
						name="image"
						value={advert.image}
						onChange={handleChange}
					/>
					<TextField
						label="desc"
						placeholder="Enter description"
						type="text"
						fullWidth
						required
						name="desc"
						value={advert.desc}
						onChange={handleChange}
					/>
					<FormControl component="fieldset">
						<FormLabel component="legend">Transaction</FormLabel>
						<RadioGroup
							aria-label="transaction"
							name="transaction1"
							value={advert.sale}
							onChange={handleChange}
						>
							<FormControlLabel value="Sell" control={<Radio />} label="Sell" />
							<FormControlLabel
								value="Wanted"
								control={<Radio />}
								label="Wanted"
							/>
						</RadioGroup>
					</FormControl>
					<SelectTags
						multiple
						name="tags"
						value={advert.tags}
						onChange={handleChange}
					/>
					<Button
						type="submit"
						style={{ margin: '30px 0' }}
						color="primary"
						fullWidth
						variant="contained"
						disabled={
							!advert.advertName || !advert.price || advert.tags.length === 0
						}
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
