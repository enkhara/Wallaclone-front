import React from 'react';
import MenuLoginRegister from './MenuLoginRegister';
import Logout from './Logout';
import Profile from "./Profile";
import { useSelector } from 'react-redux';
import { getIsLogged } from '../../../store/selectors';

const Navbar = () => {
    const isLogged = useSelector(getIsLogged);
    return (
        <nav 
            style={{
              display:'flex',
              flexDirection:'row',
              justifyContent:'flex-end',
              alignItems:'flex-end',
              flexGrow:'1'}
        }>
            {!isLogged ? (
              <MenuLoginRegister />
            ) : (
              <React.Fragment>
                {/* <ButtonNewAdvert /> */}
                <Profile/>
                <Logout />
              </React.Fragment>
            )}
        </nav>
       
    );
}

export default Navbar;
