import React from 'react';
import LoginForm from './LoginForm';

const LoginPage = () => {

   
    
    const handleSubmit = (credentials) => {

        console.log(credentials);

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