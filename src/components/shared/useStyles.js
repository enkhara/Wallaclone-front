import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({

	navBar: {
		flexGrow: 1,
		backgroundColor: "#fff",

	},
	title: {
		flexGrow: 1,
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