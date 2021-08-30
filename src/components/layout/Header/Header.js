import React from 'react';
import { Link } from 'react-router-dom';
import Navbar from './Navbar';
import ResponsiveMenu from './ResponsiveMenu';
import LenguageMenu from './LenguageMenu';
import {
	AppBar,
	Toolbar,
	Typography,
	useMediaQuery,
	useTheme,
} from '@material-ui/core';

const Header = () => {
	const theme = useTheme();
	const isMatch = useMediaQuery(theme.breakpoints.down('md'));

	return (
		<header>
			<section
				style={{
					display: 'flex',
					alignItems: 'center',
					justifyContent: 'space-between',
					margin: '0px',
					marginTop: '0.5rem',
				}}
			>
				<Typography variant="h6">
					<Link to="/" style={{ textDecoration: 'none' }}>
						<div style={{ display: 'flex', alignItems: 'center' }}>
							<img src="/logo_wallaclone2.png" alt="Wallaclone app" />
							<h1
								style={{
									display: 'inline',
									margin: 'auto',
									color: 'rgb(16,182,189)',
								}}
							>
								Wallaclone
							</h1>
						</div>
					</Link>
				</Typography>

				<LenguageMenu />
			</section>

			<AppBar
				position="static"
				style={{ background: 'var(--color-principal)' }}
			>
				<Toolbar>{isMatch ? <ResponsiveMenu /> : <Navbar />}</Toolbar>
			</AppBar>
		</header>
	);
};

export default Header;
