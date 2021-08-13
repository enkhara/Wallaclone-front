import React from "react";
import { Link } from 'react-router-dom';

import Navbar from "./Navbar";


//import ButtonNewAdvert from './ButtonNewAdvert';
import { useTranslation } from 'react-i18next';
import {
  AppBar,
  Toolbar,
  Typography,

 
} from "@material-ui/core";


const Header = () => {

  const [t, i18n] = useTranslation(['global']);
  function TranslationClick(lang) {
    i18n.changeLanguage(lang);
  }

  return (
    <header>
        <section style={{display:'flex', alignItems:'center',justifyContent:'space-between', marginTop:'0.5rem'}}>
          <Typography variant="h6">
            <Link to="/">
              <img src="/logo_wallaclone2.png" alt="Wallaclone app" />
            </Link>
          </Typography>
          
          <section style={{display:'flex',alignItems:'flex-end',justifyContent:'flex-end'}}>
          {t('header.Language')}
              <button 
                onClick={() => TranslationClick('es')}
                style={{backgroundImage:'url ("/spain.jpg") no-repeat'}}
              >
                  ES
              </button>
               
              <button 
                onClick={() => TranslationClick('en')}>
                EN
                </button>
          </section>
        </section>

        <AppBar 
            position="static" 
            style={{background: 'linear-gradient(rgba(16,182,189,0.5046393557422969) 0%, rgba(16,182,189,0.5046393557422969) 35%, rgba(5,128,226,0.7203256302521008) 100%)'}}
        >
        <Toolbar>
          <Navbar/>
        </Toolbar>
      </AppBar>
     
    </header>
  );
};

export default Header;

