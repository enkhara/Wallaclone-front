import { useDispatch } from 'react-redux';
import { authLogoutAction } from '../../../store/actions';
import Button from '@material-ui/core/Button';
import Swal from 'sweetalert2';
import { useTranslation } from 'react-i18next';

const Logout = () => {

  const { t } = useTranslation(['global']);
  const dispatch = useDispatch();
  
  const handleOpenModal = () => {
    
    const message = t('header.Are you sure?');
    const buttonText = t('header.Yes');
    
    Swal.fire({
      title: `${message}`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: `${buttonText}`,
    }).then((result) => {
      if (result.isConfirmed) {
        const logoutSession = () => dispatch(authLogoutAction());
        logoutSession();
      }
    });
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
}

export default Logout;
 
