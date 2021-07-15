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
                	<AccountCircle className={classes.iconLogin}/>
					{/* STYLE COMPONENT */}
					<div>
						<Link to={`./login`} style={{color:'#fff', marginRight:'5px'}}> 
								Login
						</Link>
						<Link to={`./register`} style={{color:'#fff'}}>
							Register
						</Link>

					</div>
				</Toolbar>
			</AppBar>
    	</header>
	);
};


export default Header;
