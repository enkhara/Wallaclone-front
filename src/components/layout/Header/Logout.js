import { useDispatch } from 'react-redux';
import { authLogoutAction } from '../../../store/actions';
import Button from '@material-ui/core/Button';
import Swal from 'sweetalert2';

const Logout = () => {

    const dispatch = useDispatch();

    const handleOpenModal = () =>{
        Swal.fire({
            title: 'Are you sure?',
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes'
          }).then((result) => {
            if (result.isConfirmed) {
                const logoutSession = () => dispatch(authLogoutAction());
                logoutSession();
            }
          })
    }

    return (
        <div 
            style={{marginTop:'3px'}}
        >
            <Button 
                color="inherit"
                onClick={handleOpenModal}
            >
                Logout
            </Button>

        </div>
    );
}

export default Logout;