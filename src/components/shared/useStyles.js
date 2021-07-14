import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({

	menuButton: {
		marginRight: theme.spacing(2),
	},
	title: {
		flexGrow: 1,
	},
	
	iconLogin:{
		fontSize:'2rem'

	},

	blogsContainer: {
	  paddingTop: theme.spacing(3)
	},

	card: {
	  maxWidth: "100%",
	},
	media: {
	  height: 240
	},
	cardActions: {
	  display: "flex",
	  margin: "0 10px",
	  justifyContent: "space-between"
	},
	author: {
	  display: "flex"
	}
  }));