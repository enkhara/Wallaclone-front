import { makeStyles } from '@material-ui/core/styles';
 
export const useStyles = makeStyles((theme) => ({
    containerSearch:{
        margin:0
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
}));