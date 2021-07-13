import client, { configureClient, resetClient } from './client';
import storage from '../utils/storage';


const authPath = '/apiv1/auth';

export const login = ({ remember, ...credentials }) => {
    return client
      .post(`${authPath}/signin`, credentials)
      .then(({ token }) => {
        configureClient({ token });
        console.log(token);
        return token;
      })
      .then(token => {
        if (remember) {
          storage.set('auth', token);
        }
      });
};
  

export const logout = () => {
    return Promise.resolve().then(resetClient).then(storage.clear);
};
  
