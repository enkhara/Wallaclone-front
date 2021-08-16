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
	blogsContainer: {
	  	paddingTop: theme.spacing(15)
	},
	card: {
		width:'auto',
		padding: '6px'
		  
	},
	media: {
	  	height: 200,
		borderRadius: 3
	},
	mediaDetailAdvert: {
		height: 340,
	  	borderRadius: 3,
		marginTop:'1rem',
		marginBottom:'1rem',
  	},
	cardActions: {
	  	display: 'flex',
    	alignItems: 'center',
    	justifyContent: 'flex-end',

	},
	containerNewAdvert:{
		display:'flex', 
		justifyContent:'center', 
		alignItems:'center', 
		marginTop:'1px', 
		backgroundColor:'#fff', 
		color:'rgb(2,0,36)', 
		padding:'10px',
		cursor:'pointer',
		textDecoration:'none', 
		marginRight:'50px',
		fontSize: '1.1rem'
	},
	buttonNewAdvert:{
		marginRight:'5px'
	},
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