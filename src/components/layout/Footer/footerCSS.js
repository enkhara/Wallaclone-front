import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	footer: {
		display:'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
	},
    icons: {
        fontSize:'1.8rem',
        marginTop: '1rem',

        '&:nth-of-type(2)': {
            marginLeft:'1rem',
            marginRight:'1rem',
        }
    }
	
}));