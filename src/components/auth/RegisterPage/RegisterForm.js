import React from 'react';
import T from 'prop-types';
import {
	Grid,
	Paper,
	Avatar,
	TextField,
	Button,
	Typography,
	Link,
} from '@material-ui/core';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';

const RegisterForm = ({ onSubmit }) => {
	const [credentials, setCredentials] = React.useState({
		username: '',
		email: '',
		password: '',
	});

	const { username, email, password } = credentials;
	console.log(credentials);

	const handleChange = (ev) => {
		setCredentials((oldCredentials) => ({
			...oldCredentials,
			[ev.target.name]: ev.target.value,
		}));
	};

	const handleSubmit = (ev) => {
		ev.preventDefault();
		onSubmit(credentials);
		console.log(credentials);
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
						<h2>Register</h2>
					</Grid>
					<TextField
						label="Username"
						placeholder="Enter username"
						fullWidth
						required
						name="username"
						value={username}
						onChange={handleChange}
					/>
					<TextField
						type="email"
						label="Email"
						placeholder="Enter email"
						fullWidth
						required
						name="email"
						value={email}
						onChange={handleChange}
					/>
					<TextField
						label="Password"
						placeholder="Enter password"
						type="password"
						fullWidth
						required
						name="password"
						value={password}
						onChange={handleChange}
					/>

					<Button
						type="submit"
						style={{ margin: '30px 0' }}
						color="primary"
						fullWidth
						variant="contained"
						disabled={!username || !password}
					>
						Register
					</Button>
					<Typography>
						Do you have an account?
						<Link href="/login"> Sign In</Link>
					</Typography>
				</Paper>
			</form>
		</Grid>
	);
};

RegisterForm.propTypes = {
	onSubmit: T.func.isRequired,
};

export default RegisterForm;
