import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { useStyles } from '../../shared/useStyles';
import { useSelector } from 'react-redux';
import { getIsLogged } from '../../../store/selectors';
import MenuLoginRegister from './MenuLoginRegister';
import Logout from './Logout';
import { AuthButton } from '../../auth/index';

// const Header = () => {
// 	const isLogged = useSelector( getIsLogged );
// 	const classes = useStyles();
// 	return (
// 		<header className={classes.root}>
// 			<AppBar position="static">
// 				<Toolbar>
// 					<Typography variant="h6" className={classes.title}>
// 						Wallaclone
// 					</Typography>
// 					{ !isLogged
// 					?
// 						<MenuLoginRegister/>
// 					:
// 						<Logout/>

// 					}
// 				</Toolbar>
// 			</AppBar>
//     	</header>
// 	);
// };

const Header = () => {
	const isLogged = useSelector(getIsLogged);
	const classes = useStyles();
	return (
		<header className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6" className={classes.title}>
						Wallaclone
					</Typography>
					<AuthButton />
				</Toolbar>
			</AppBar>
		</header>
	);
};

export default Header;
