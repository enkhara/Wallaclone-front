import { Link } from 'react-router-dom';
import AccountCircle from '@material-ui/icons/AccountCircle';

const ButtonNewAdvert = () => {
    return (
        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <AccountCircle/>
            
            <Link 
                to={`./register`} 
                style={{color:'#fff', textDecoration:'none'}}>
                Register
            </Link>
        </div>
    );
};




export default ButtonNewAdvert;