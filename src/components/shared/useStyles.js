import { makeStyles } from '@material-ui/core/styles';
 

export const useStyles = makeStyles((theme) => ({

	

	author: {
		display: "flex",
		alignItems:'center',
		justifyContent:'center',
		padding:0,
		margin:0 
	},
	headerDetail :{
		display: "flex",
		justifyContent:'space-between',
		padding:0,
		margin:0
	  },
	priceDetailAdvert: {
		fontWeight: 700,
    	fontSize: '1.75rem',
    	
	},
	nameDetailAdvert:{
		fontWeight: 400,
    	fontSize: '1.6rem',
		letterSpacing:'1.5px',
		marginBottom:'0.7rem'
	},
	tagAndDescDetailAdvert:{
		width: '100%',
		height: '50px',
		display:'flex',
		justifyContent:'space-between',
		alignItems:'center',
		borderBottom: '1px #ECEFF1 solid',
		borderTop: '1px #ECEFF1 solid',
		paddingTop:'2rem',
		paddingBottom:'2rem',
	
	},
	socialDetailAdvert :{
		width: '100%',
		height: '50px',
		display:'flex',
		justifyContent:'center',
		alignItems:'center',
		paddingTop:'3.5rem',
		
	
	},
	
	updateAndDeleteDetailAdvert :{
		width: '100%',
		height: '50px',
		display:'flex',
		justifyContent:'space-evenly',
		alignItems:'center',
		paddingTop:'2rem',

		
	
	},
	favoriteIcon: {
		marginRight: '5px',
		transition: 'all 600ms',
		"&:hover":{
			backgroundColor:'#fa5969'
		}
	},
	chatIcon: {
		transition: 'all 600ms',
		padding:'0',
		height:'56px',
		width:'56px',
		"&:hover":{
			backgroundColor:'#13C1AC'
		}
	},
	textArea: {
		'& .MuiTextField-root': {
			margin: theme.spacing(1),
			width: '25ch',
		  },
	},
		
  }));