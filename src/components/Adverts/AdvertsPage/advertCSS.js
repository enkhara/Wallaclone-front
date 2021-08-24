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

  priceAdvert: {
    display: 'flex',
    justifyContent: 'space-between',
    fontWeight: 700,
    fontSize: '1.50rem',
    margin: '20px 0 2px',
  },
  cardContent: {
    height: '200px',
  },

  card: {
    width: 'auto',
    padding: '6px',
  },
  media: {
    height: 200,
    borderRadius: 3,
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
}));
