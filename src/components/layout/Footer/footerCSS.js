import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	footer: {
		display:'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        bottom:'0',
        backgroundImage:'linear-gradient(to top, #dfe9f3 0%, white 100%)',
        padding:'1rem'
        

	},
    icons: {
        fontSize:'1.6rem',
        marginTop: '0.5rem',
        color:'rgba(16,182,189,0.5046393557422969)',
       

        '&:nth-of-type(2)': {
            marginLeft:'1.5rem',
            marginRight:'1.5rem',
        }
    },
    copyright: {
        fontSize:'0.8rem',
        fontWeight:'700',
        letterSpacing:'0.1rem',
        color:'rgba(16,182,189,0.5046393557422969)',
      
    }
	
}));