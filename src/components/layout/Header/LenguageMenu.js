import React from 'react';
import { useTranslation } from 'react-i18next';
import { CardMedia, makeStyles } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    containerLenguage:{
        width:'40px', 
        height:'25px',
        cursor:'pointer'
    }

}));

const LenguageMenu = () => {
    
    const classes = useStyles();

    const [i18n] = useTranslation(['global']);
    function TranslationClick(lang) {
        i18n.changeLanguage(lang);
    }
    
    return (
        <section style={{display:'flex',alignItems:'space-between',justifyContent:'space-between', width:'90px'}}>
            <CardMedia 
                onClick={() => TranslationClick('es')}
                image='/spain.png'
                className={classes.containerLenguage}
            />
            <CardMedia 
               onClick={() => TranslationClick('en')}
               image='/united_kingdom.png'
               className={classes.containerLenguage}
            />
        </section>
    );
}

export default LenguageMenu;
