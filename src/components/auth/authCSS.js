import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	containerPaper:{
        padding: '30px',
        width: '100%',
        marginTop:'2rem',
        marginBottom:'2rem',
        height: '540px',
        [theme.breakpoints.up('sm')]:{
            margin: '50px auto',
            width: '400px',
        },

    },
    avatar:{
        backgroundColor: '#62aae6f4',
    },
    buttonForm:{
        margin: '30px 0',
    }
	
}));