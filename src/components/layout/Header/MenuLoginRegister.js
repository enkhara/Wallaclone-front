import { Link } from 'react-router-dom';
import AccountCircle from '@material-ui/icons/AccountCircle';

const MenuLoginRegister = () => {
    return (
        <div style={{display:'flex', justifyContent:'center', alignItems:'center'}}>
            <AccountCircle/>
            <Link 
                to={`./login`} 
                style={{color:'#fff', margin:'7px', textDecoration:'none'}}> 
                Login
            </Link>
            <Link 
                to={`./register`} 
                style={{color:'#fff', textDecoration:'none'}}>
                Register
            </Link>
        </div>
    );
};




export default MenuLoginRegister;
