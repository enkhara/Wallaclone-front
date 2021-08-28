export const useStyles = makeStyles((theme) => ({
	detailContainer:{
		marginTop:'1rem',
		marginBottom:'1rem',
		width: '100%',
		height: 'auto',
		display: 'flex',
		flexDirection:'column',
		[theme.breakpoints.up('sm')]:{
			backgroundColor:'yellow',
			height: '405px',
			width:'100%',
		},
	},
	imageContainer:{
		height: 'auto',
		[theme.breakpoints.up('sm')]:{
			 width:'50%',
			display: 'flex',
			alignItems: 'center',
			justifyContent: 'flex-start',
			height: '405px',
		},
	},

	detailHeader:{
		display: 'flex',
		alignItems: 'center',
		justifyContent: 'space-between', 
		width: '100%',
	},
	avatar:{
		display:'flex',
		width:'170px',
		
		alignItems:'center',
		justifyContent:'space-around'
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
	cardContent: {
		width:'50%',
		height: 'auto',
		padding:'0.5rem',
		paddingTop:'0.5rem',
	},
	priceAdvert: {
		display:'flex',
		justifyContent:'center',
		alignItems:'center',
		background: 'var(--color-principal)',
		fontSize: '1.2rem',
		margin: 0,
		color: '#fff',
		width:'50%',
		height:'2rem',
		borderRadius: '5px',
	},
	cardNameAdvert: {
		display:'flex',
		justifyContent:'flex-start',
		alignItems:'flex-start',
		fontSize: '1.5rem',
		width:'100%',
		padding:'0.4rem',
		paddingLeft:'0px',
		textTransform: 'uppercase',
		marginTop:'1rem',
		marginBottom:'0px'
	},
	descAdvert:{
		fontSize: '0.9rem',
		height:'auto',
		width:'auto'
	  },
	tagAndDescDetailAdvert:{
		paddingTop:'0.1rem',
		paddingBottom:'0.1rem',
	
	},
	sale:{
		display:'flex',
		justifyContent:'center',
		alignItems:'center',
		fontSize: '1rem',
		margin: '0',
		color: 'white',
		width:'50%',
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
		width:'50%',
		height:'2rem',
		borderRadius: '5px',
		background: 'rgba(175, 11, 33, 0.89)',
	},
	spanDetailAdvert:{
		color: '#b2b3b4',
		fontWeight: '800',
	
	},
	updateAndDeleteDetailAdvert :{
		width:'100%',
		display:'flex',
		flexDirection:'column',
		alignItems:'flex-start',
		justifyContent:'flex-start',
		marginLeft:'0.5rem',
		height: 'auto',
	},

	buttonsEditDelete:{
		width:'240px',
		display:'flex',
		justifyContent:'space-between'
	},
	social:{
		marginTop:'2.5rem',
		marginBottom:'0.5rem',
	}