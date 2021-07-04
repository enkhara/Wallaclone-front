import React from 'react';
import LoginForm from './LoginForm';

const LoginPage = () => {

    const [isChecked, setIsChecked] = React.useState(false);
    
    const handleSubmit = (credentials) => {

        console.log(credentials,isChecked);



    }
    return (
        <LoginForm 
            onSubmit={handleSubmit}
            setIsChecked={setIsChecked}
        />
    );
};

export default LoginPage;