import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	containerPaper:{
        margin: '50px auto',
        width: '400px',
        padding: 30,
        [theme.breakpoints.up('sm')]:{
            height: '700px',
            width: 500,
        },
    },
    avatar:{
        backgroundColor: '#62aae6f4',
    },
    buttonForm:{
        margin: '30px 0',
    }
	
}));