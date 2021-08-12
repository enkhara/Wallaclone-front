import { useDispatch } from 'react-redux';
import { authLogoutAction } from '../../../store/actions';
import Button from '@material-ui/core/Button';
import Swal from 'sweetalert2';
import { useTranslation } from 'react-i18next';

const Logout = () => {
  const { t } = useTranslation(['global']);

    const {t, i18n}=useTranslation(['global']);
    const dispatch = useDispatch();

  return (
    <div style={{ marginTop: '3px' }}>
      <Button color="inherit" onClick={handleOpenModal}>
        {t('header.Logout')}
      </Button>
    </div>
  );
};

    return (
        <> 
            <Button
                variant='contained'
                color='secondary'
                onClick={handleOpenModal}
            >
                {t('header.Logout')}
            </Button>
        </>
    );


export default Logout;
