import { Link } from 'react-router-dom';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { useStyles } from '../../shared/useStyles';
import { useTranslation } from 'react-i18next';

const ButtonNewAdvert = () => {
  const [t]= useTranslation('global')
  const classes = useStyles();
  return (
    <Link className={classes.containerNewAdvert} to={`/adverts/new`}>
      <AddCircleOutlineIcon className={classes.buttonNewAdvert} />
      {t('header.Add new advert')}
    </Link>
  );
};

export default ButtonNewAdvert;
