import { makeStyles } from '@material-ui/core/styles';
import { BorderBottom } from '@material-ui/icons';

export const useStyles = makeStyles((theme) => ({

	navBar: {
		flexGrow: 1,
		backgroundColor: 'rgb(2,0,36)',
		background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(16,182,189,0.5046393557422969) 35%, rgba(5,128,226,0.7203256302521008) 100%)',
	},
	title: {
		flexGrow: 1,
	},
	priceAdvert: {
		fontWeight: 700,
    	fontSize: '1.50rem',
    	margin: '20px 0 2px',
	},
	cardContent:{
		height:"160px"
	},
	blogsContainer: {
	  	paddingTop: theme.spacing(15)
	},
	card: {
	  	maxWidth: "100%",
		padding: '6px',
		  
	},
	media: {
	  	height: 210,
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
	tagDetailAdvert:{
		width: '100%',
		height: '50px',
		display:'flex',
		justifyContent:'space-between',
		alignItems:'center',
		borderBottom: '1px #ECEFF1 solid',
		borderTop: '1px #ECEFF1 solid',
		paddingTop:'2rem',
		paddingBottom:'2rem',
	
	}
		
  }));