import React from 'react';
import { useDispatch } from 'react-redux';
import LoginForm from './LoginForm';
import { loginAction } from '../../store/actions';



const LoginPage = () => {
 
    const dispatch = useDispatch();
    const handleSubmit = async (credentials) => (await dispatch(loginAction(credentials)));
    return (

        <LoginForm 
            onSubmit={handleSubmit}
        />
    );
};

export default LoginPage;