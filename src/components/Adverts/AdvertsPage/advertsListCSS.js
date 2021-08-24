import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	principalGrid:{
		display:'flex', 
		justifyContent:'center', 
		alignItems:'center'
	},
    formControl: {
		minWidth: 130,
		marginBottom:'0.5rem',
		marginTop:'0.5rem',
		 
	},
	selectControl: {
		fontSize:'1.2rem', 
		fontWeight:'700',
		paddingLeft:'0.5rem',
		
	},
	containerAdvertList:{
		display:'flex', 
		flexDirection:'column', 
		alignItems:'flex-end', 
		marginTop:'2rem'
	}

}));