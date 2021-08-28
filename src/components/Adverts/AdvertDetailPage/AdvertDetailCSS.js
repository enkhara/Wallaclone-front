import { makeStyles } from '@material-ui/core/styles';
 
export const useStyles = makeStyles((theme) => ({
	gridDetailAdvert:{
		height: 'auto',
		margin: '40px auto',
		width: '600px',
	},
	
	cardDetailAdvert:{
		padding: 20,
		height: 'auto'
	},
	mediaDetailAdvert: {
		height: 340,
	  	borderRadius: 3,
		marginTop:'1rem',
		marginBottom:'1rem',
  	},
	author: {
		display: "flex",
		alignItems:'center',
		justifyContent:'center',
		padding:0,
		margin:0 
	},
	headerDetailAdvert:{
		display: "flex",
		justifyContent:'space-between',
		padding:0,
		margin:0
	  },
	priceDetailAdvert: {
		display:'flex',
		justifyContent:'center',
		alignItems:'center',
		background: 'var(--color-principal)',
		fontSize: '1.3rem',
		margin: 0,
		color: '#fff',
		width:'40%',
		height:'2rem',
		borderRadius: '5px',
    	
	},
	nameDetailAdvert:{
		display:'flex',
		justifyContent:'flex-start',
		alignItems:'flex-start',
		fontSize: '1.5rem',
		width:'100%',
		padding:'0.4rem',
		paddingLeft:'0px',
		textTransform: 'uppercase',
		marginTop:'0.5rem',
		marginBottom:'0px',
		fontWeight:800
	},
	 
	socialDetailAdvert :{
		width: '100%',
		height: '50px',
		display:'flex',
		justifyContent:'center',
		alignItems:'center',
		paddingTop:'4rem',
		paddingBottom:'1rem',
	},
	descAdvert:{
		[theme.breakpoints.between('xs','sm')]:{
			fontSize: '0.9rem',
		},
		fontSize: '1.1rem',
		height:'auto',
		width:'auto'
	
	},
	updateAndDeleteDetailAdvert :{
		width:'100%',
		display:'flex',
		justifyContent:'center',
		alignItems:'center',
		marginTop:'1.5rem',
	},
	favoriteIcon: {
		marginRight: '5px',
		transition: 'all 600ms',
		"&:hover":{
			backgroundColor:'#fa5969'
		}
	},

	favoriteIconSel: {
		marginRight: '5px',
		transition: 'all 600ms',
		"&:hover":{
			backgroundColor:'#fa5969'
		},
		color: 'red', 
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
	sale:{
		display:'flex',
		justifyContent:'center',
		alignItems:'center',
		fontSize: '1rem',
		margin: '0',
		color: 'white',
		width:'20%',
		height:'2rem',
		borderRadius: '5px',
		background: 'rgba(2, 136, 31, 0.931)',
	  },
	wanted:{
		display:'flex',
		justifyContent:'center',
		alignItems:'center',
		fontSize: '1rem',
		margin: '0',
		color: 'white',
		width:'20%',
		height:'2rem',
		borderRadius: '5px',
		background: 'rgba(175, 11, 33, 0.89)',
	  },
	tagsAdvert:{
		color: '#b2b3b4',
		marginRight: '1rem',
		fontWeight: '800',
	 
	},
	containerGoBack:{
		width:'100%', 
		marginTop:'1rem',
	},
	  
	
		
  }));