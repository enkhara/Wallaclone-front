import React from 'react';
import MenuLoginRegister from './MenuLoginRegister';
import Logout from './Logout';
import Profile from "./Profile";
import { useSelector } from 'react-redux';
import { getIsLogged } from '../../../store/selectors';

const Navbar = () => {
    const isLogged = useSelector(getIsLogged);
    return (
        <nav style={{
          display:'flex',
          alignItems:'center',
          justifyContent:'flex-end',
          width:'100%',
        }}>
          {!isLogged ? (
              <MenuLoginRegister />
          ) : (
              <div style={{display:'flex', alignItems:'center'}}>
                <Profile/>
                <Logout />
              </div>
            )}
        </nav>
       
    );
}

export default Navbar;
