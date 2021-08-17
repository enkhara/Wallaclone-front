import React from "react";
import { Link } from 'react-router-dom';
import Navbar from "./Navbar";
import ResponsiveMenu from "./ResponsiveMenu";
import LenguageMenu from "./LenguageMenu";
import { useSelector } from 'react-redux';
import { getUser } from '../../../store/selectors';
import { 
    AppBar, 
    Toolbar, 
    Typography,
    useMediaQuery,
    useTheme
} from "@material-ui/core";


const Header = () => {
 
  const theme = useTheme();
  const isMatch = useMediaQuery(theme.breakpoints.down('md'));
  
  return (
    <header>
        <section style={{display:'flex', alignItems:'center',justifyContent:'space-between', marginTop:'0.5rem'}}>
          <Typography variant="h6">
            <Link to="/">
              <img src="/logo_wallaclone2.png" alt="Wallaclone app" />
            </Link>
          </Typography>

          <LenguageMenu/>
        </section>

        <AppBar 
            position="static" 
            style={{
              background: 'var(--color-principal)',
            }}
        >
          <Toolbar
            
          >
           { isMatch 
              ?
              <ResponsiveMenu/>
              :
              <Navbar/>
            }

          </Toolbar>
         
      </AppBar>
     
    </header>
  );
};

export default Header;

