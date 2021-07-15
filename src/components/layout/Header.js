import { Link } from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { useStyles } from '../shared/useStyles';

const Header = () => {

	const classes = useStyles();

	return (
		<header className={classes.root}>
			<AppBar position="static">
				<Toolbar>
					<Typography variant="h6" className={classes.title}>
						Wallaclone
					</Typography>
					<div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
                		<AccountCircle className={classes.iconLogin}/>
						<Link 
							to={`./login`} 
							style={{color:'#fff', margin:'7px', textDecoration:'none'}}> 
							Login
						</Link>
						<Link 
							to={`./register`} 
							style={{color:'#fff', textDecoration:'none'}}>
							Register
						</Link>

					</div>
				</Toolbar>
			</AppBar>
    	</header>
	);
};


export default Header;
