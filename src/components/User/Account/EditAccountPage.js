import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import EditAccountForm from './EditAccountForm';
import { updateAccountAction, userDeletedAction, resetError } from '../../../store/actions';
import { getUi, getUser } from '../../../store/selectors';
import Swal from 'sweetalert2';
import { useTranslation } from 'react-i18next';
import { Spinner } from '../../shared';
import { SideBar } from '../../layout';
import withUser from '../../hoc/withUser';

function EditAccountPage({...props} ) {
  const dispatch = useDispatch();
  const { loading, error } = useSelector(getUi);
  const user = useSelector((state) => getUser(state));
  
  const [t] = useTranslation('global');
 
  const handleDelete = () => {
    // Baja de cuenta de usuario
    const title = t('account.Are you sure?');
    Swal.fire({
      title: title,
      text: t('account.You will not be able to reverse this !'),
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: t('account.Yes, unsubscribe me!'),
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(userDeletedAction(user._id));
        Swal.fire(t('account.Unsubscribed!'), t('account.Your account has been deleted.'), 'success');
      }
    });
  }
  
  const handleSubmit = (userId, credentials) => {
    //console.log('CREDENTIALS EDITACCOUNTPAGE', credentials)  
    dispatch(updateAccountAction(userId, credentials));

    
  };

  let status;
  if (error != null) {
    status = error.status;
    if (status === 400) {
      Swal.fire(
        t('message.Somenthing goes wrong !'), 
       // + t('message.user already registered'),
        t('message.Try again!')
      );
    } else {
      Swal.fire(`${error.message}`, t('message.Try again!'));
    }
  }


  return (
    
      <main className='main'>
        <aside className="aside">
				    <SideBar/>
			  </aside>
        <section style={{width:'100%',margin:'0px'}}>
          {user &&
            <EditAccountForm {...user} onSubmit={handleSubmit} onDelete={handleDelete} />}
            {loading && <Spinner />}
            {error && <div onClick={() => dispatch(resetError())} />}

        </section>
       </main> 
    
  );
}

const EditUserAccountPage = withUser(EditAccountPage);

export default EditUserAccountPage;

