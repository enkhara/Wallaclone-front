import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	principalGrid:{
		display:'flex', 
		justifyContent:'center', 
		alignItems:'flex-start',
	},
    
	containerAdvertList:{
		display:'flex', 
		flexDirection:'column', 
		alignItems:'center', 
		marginTop:'3rem'
	}

}));