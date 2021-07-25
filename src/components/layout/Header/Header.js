import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import { useStyles } from '../../shared/useStyles';
import { useSelector } from 'react-redux';
import { getIsLogged } from '../../../store/selectors';
import MenuLoginRegister from './MenuLoginRegister';
import ButtonNewAdvert from './ButtonNewAdvert';
import Logout from './Logout';

const Header = () => {
	const isLogged = useSelector(getIsLogged);
	const classes = useStyles();

	return (
		<header>
			<AppBar position="static" className={classes.navBar}>
				<Toolbar>
					<Typography variant="h6" className={classes.title}>
						<Link href="/" color="inherit">
							Wallaclone
						</Link>
					</Typography>
					{!isLogged ? (
						<MenuLoginRegister />
					) : (
						<React.Fragment>
							<ButtonNewAdvert />
							<Logout />
						</React.Fragment>
					)}
				</Toolbar>
			</AppBar>
		</header>
	);
};

export default Header;
