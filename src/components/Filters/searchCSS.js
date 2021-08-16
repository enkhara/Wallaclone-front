import { makeStyles } from '@material-ui/core/styles';
 
export const useStyles = makeStyles((theme) => ({
   
    heading: {
      fontSize: theme.typography.pxToRem(15),
      fontWeight: theme.typography.fontWeightRegular,
    },
}));