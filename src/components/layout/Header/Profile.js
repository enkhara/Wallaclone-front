import React from 'react';
import { useSelector } from 'react-redux';
import { getUser } from '../../../store/selectors';


const Profile = () => {
    const user = useSelector(getUser);
    return (
        <div>
            HOLA 
        </div>
    );
}

export default Profile;
