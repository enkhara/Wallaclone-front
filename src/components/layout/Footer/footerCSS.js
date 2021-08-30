import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	footer: {
		display:'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        bottom:'0',
        backgroundImage:'linear-gradient(to top, #dfe9f3 0%, white 100%)',
        padding:'0.5rem'
	},
    icons: {
        fontSize:'1.6rem',
        marginTop: '0.5rem',
        color:'#42aff8',
        '&:nth-of-type(2)': {
            marginLeft:'1.5rem',
            marginRight:'1.5rem',
        }
    },
    copyright: {
        fontSize:'0.7rem',
        fontWeight:'700',
        letterSpacing:'0.1rem',
        color:'#42aff8',
        [theme.breakpoints.up('sm')]: {
            fontSize: '0.9rem',
        },
      
    }
	
}));