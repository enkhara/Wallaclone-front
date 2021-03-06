import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
  containerGrid:{
    maxWidth:'450px',
  },
  container_card:{
    transition: 'transform .3s',
    '&:hover':{
      transform:'translateY(5px)',
      boxShadow:'2px 2px 26px 0px rgba(0,0,0,0.3)',
    }
  },
  container_price_favorite:{
    display:'flex', 
    flexDirection:'row-reverse',
    alignItems:'center', 
    justifyContent:'space-between',
    margin:'0px',
    color: '#fff',

  },
  priceAdvert: {
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    background: 'var(--color-principal)',
    fontSize: '1.2rem',
    margin: 0,
    color: '#fff',
    width:'30%',
    height:'2rem',
    borderRadius: '5px',
    
  },
  sale:{
    display:'flex',
    justifyContent:'center',
    alignItems:'center',
    fontSize: '1rem',
    margin: '0',
    color: 'white',
    width:'25%',
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
    width:'40%',
    height:'2rem',
    borderRadius: '5px',
    background: 'rgba(175, 11, 33, 0.89)',
  },
  
  cardNameAdvert: {
    display:'flex',
    justifyContent:'flex-start',
    alignItems:'flex-start',
    fontSize: '1.4rem',
    width:'100%',
    padding:'0.4rem',
    paddingLeft:'0px',
    textTransform: 'uppercase',
    marginTop:'0.5rem',
    marginBottom:'0px'
    
  },
  descAdvert:{
    
    fontSize: '1rem',
    height:'auto',
    width:'auto'

  },
  spanDetailAdvert:{
		color: '#b2b3b4',
		marginRight: '1rem',
		fontWeight: '800',
	},
  tagAndDescDetailAdvert:{
		borderBottom: '1px #ECEFF1 solid',
		borderTop: '1px #ECEFF1 solid',
		paddingTop:'0.1rem',
		paddingBottom:'0.1rem',
	
	},
  cardContent: {
    padding:'0.5rem',
    paddingTop:'0.5rem',
    height:'auto',
    width:'auto'
    
  },
  
  card: {
    padding: '6px',
    height: 'auto',
    
  },
  media: {
    height:'250px',
    borderRadius: '3px',
    width: '100%',
     
    '& img':{
      objectFit: 'cover',
      height:'250px',
      width: '100%',

    }
       
  },

  cardActions: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  author: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 0,
    margin: 0,
  },

  favoriteIcon: {
    marginRight: '5px',
  },

  favoriteIconSel: {
    marginRight: '5px',
    color:'red',
  },
}));
