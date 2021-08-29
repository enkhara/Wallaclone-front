import { makeStyles } from '@material-ui/core/styles';

export const useStyles = makeStyles((theme) => ({
	containerPaper:{
        margin: '50px auto',
        width: '330px',
        padding: 30,
        height:'auto',
        [theme.breakpoints.between('sm','md')]:{
            height: '700px',
            width: '400px',
        },
        [theme.breakpoints.up('md')]:{
            width: '450px',
        },
    },
    avatar:{
        backgroundColor: '#62aae6f4',
    },
    buttonForm:{
        margin: '30px 0',
    }
	
}));