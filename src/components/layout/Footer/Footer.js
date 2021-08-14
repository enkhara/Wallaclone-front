import { Link } from 'react-router-dom';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import { Typography } from "@material-ui/core";

import { useStyles } from './footerCSS';

const Footer = () => {

    const classes = useStyles();

    return (
        <footer 
            className={classes.footer}
        >
            
            <Link 
                to="/"
                style={{width:'90px'}}
            >
                <img src="/logo_wallaclone2.png" alt="Wallaclone app" />

            </Link>
                
           
            <div>
                <FacebookIcon
                    className={classes.icons}
                />
                <TwitterIcon
                    className={classes.icons}
                />
                <WhatsAppIcon
                    className={classes.icons}
                />
            </div>
            <div>
                <p>&copy; {new Date().getFullYear()} Wallaclone App. Todos los derechos reservados.</p>
            </div>
        </footer>
    );
}

export default Footer;
