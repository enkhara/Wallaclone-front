import { Link } from 'react-router-dom';
import WhatsAppIcon from '@material-ui/icons/WhatsApp';
import TwitterIcon from '@material-ui/icons/Twitter';
import FacebookIcon from '@material-ui/icons/Facebook';
import { Typography } from "@material-ui/core";
import { useTranslation } from 'react-i18next';
import { useStyles } from './footerCSS';

const Footer = () => {

    const classes = useStyles();
    const [t] = useTranslation('global');
    return (
        <footer 
            className={classes.footer}
        >
            
            <Link 
                to="/"
                style={{width:'70px'}}
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
            <div 
                className={classes.copyright}>
                <p>&copy; {new Date().getFullYear()} Wallaclone App. {t('footer.All rights reserved')}</p>
            </div>
        </footer>
    );
}

export default Footer;
