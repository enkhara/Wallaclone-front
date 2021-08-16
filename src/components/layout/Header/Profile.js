import React from 'react';
import { useSelector } from 'react-redux';
import { getUser } from '../../../store/selectors';
import { Avatar } from '@material-ui/core';
import { useTranslation } from 'react-i18next';
import { Link } from 'react-router-dom';

const Profile = () => {
    const [t] = useTranslation('global');
    const user = useSelector(getUser);
    // const { username } = user;
    
    return (
        <Link 
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
                {t('profile.Welcome')} Jorge
                {/* { usermane } */}
            </h3>
        </Link>

       
    );
}

export default Profile;
