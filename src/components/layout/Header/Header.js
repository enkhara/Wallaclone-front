import React from "react";
import { Link } from 'react-router-dom';
import Navbar from "./Navbar";
import LenguageMenu from "./LenguageMenu";
import { useSelector } from 'react-redux';
import { getUser } from '../../../store/selectors';
import { AppBar, Toolbar, Typography } from "@material-ui/core";


const Header = () => {
  console.log('hola')
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
              background: 'linear-gradient(rgba(16,182,189,0.5046393557422969) 0%, rgba(16,182,189,0.5046393557422969) 35%, rgba(5,128,226,0.7203256302521008) 100%)',
              
            }}
        >
          <Toolbar
            style={{
              display:'flex',
              alignItems:'center',
              justifyContent:'space-between',
              width:'100%'
            }}
            >
            Botón Menú Responsive
            
          <Navbar/>
        </Toolbar>
         
      </AppBar>
     
    </header>
  );
};

export default Header;

