import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	
	title: {
		flexGrow: 1,
	},
	priceAdvert: {
		fontWeight: 700,
    	fontSize: '1.50rem',
    	margin: '20px 0 2px',
	},
	cardContent:{
		height:"200px"
	},
	 
	card: {
		width:'auto',
		padding: '6px'
		  
	},
	media: {
	  	height: 200,
		borderRadius: 3
	},

	cardActions: {
	  	display: 'flex',
    	alignItems: 'center',
    	justifyContent: 'flex-end',

	},
	
 

	 

		
  }));