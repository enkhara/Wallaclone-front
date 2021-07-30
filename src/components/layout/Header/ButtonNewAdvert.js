import { Link } from 'react-router-dom';
import AddCircleOutlineIcon from '@material-ui/icons/AddCircleOutline';
import { useStyles } from '../../shared/useStyles';

const ButtonNewAdvert = () => {
  const classes = useStyles();
  return (
    <Link className={classes.containerNewAdvert} to={`/adverts/new`}>
      <AddCircleOutlineIcon className={classes.buttonNewAdvert} />
      Add new advert
    </Link>
  );
};

export default ButtonNewAdvert;
