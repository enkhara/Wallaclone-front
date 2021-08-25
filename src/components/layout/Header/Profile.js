import React from 'react';
import { useSelector} from 'react-redux';
import { getUser } from '../../../store/selectors';
import { Avatar } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';
import withUser from '../../hoc/withUser';
    
const Profile = () => {
    const [t] = useTranslation('global');
    const user = useSelector(getUser);
 
    return (
        <Link to={`/${user.username}/myzone`} 
            style={{
                display:'flex', 
                alignItems:'center', 
                justifyContent:'space-center',
                textDecoration:'none',
                color:'#fff'
            }}

            >
            <Avatar style={{marginRight:'0.5rem'}}/>
            <h3 style={{marginRight:'2rem'}}>
                {t('profile.Welcome')} { user.username }
            </h3>
        </Link>
    );
}

const ProfileWithUser = withUser(Profile);

export default ProfileWithUser;
