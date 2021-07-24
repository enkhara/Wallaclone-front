import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({

	navBar: {
		flexGrow: 1,
		background: 'rgb(2,0,36)',
		background: 'linear-gradient(90deg, rgba(2,0,36,1) 0%, rgba(16,182,189,0.5046393557422969) 35%, rgba(5,128,226,0.7203256302521008) 100%)',

	},
	title: {
		flexGrow: 1,
	},
	priceAdvert: {
		fontWeight: 500,
    	fontSize: '1.50rem',
    	margin: '20px 0 2px',
	},
	blogsContainer: {
	  	paddingTop: theme.spacing(15)
	},

	card: {
	  	maxWidth: "100%",
	},
	media: {
	  	height: 240
	},
	cardActions: {
	  	display: 'flex',
    	alignItems: 'center',
    	justifyContent: 'flex-end',
	},
	author: {
	  	display: "flex"
	}
  }));