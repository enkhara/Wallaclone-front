import React from 'react';
import LoginForm from './LoginForm';
import {login} from '../../api/auth'

const LoginPage = () => {

   
    
    const handleSubmit = (credentials) => {

        login(credentials).then(console.log('logeado'))


        console.log('credenciales antes de la llamada',credentials);

        //COMPROBAR EN LA BBDD USUARIO Y CONTRASEÑA CON REDUX Y LOADING

        //CORRECTO


    }
    return (
        <LoginForm 
            onSubmit={handleSubmit}
        />
    );
};

export default LoginPage;