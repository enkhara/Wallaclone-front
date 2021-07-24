import client, { configureClient, resetClient } from './client';
import storage from '../utils/storage';

const authPath = '/apiv1/auth';

export const login = ({ remember, ...credentials }) => {
  return client
    .post(`${authPath}/signin`, credentials)
    .then(({ token }) => {
      configureClient({ token });
      return token;
    })
    .then((token) => {
      if (remember) {
        storage.set('auth', token);
      }
    });
};

export const register = ({ ...credentials }) => {
  console.log(`credentials en api/register.js ${credentials}`);
  return client.post(`${authPath}/signup`, credentials);
};

export const forgotPassword = ({ ...credentials }) => {
  return client.put(`${authPath}/forgot-password`, credentials);
};

export const logout = () => {
  return Promise.resolve().then(resetClient).then(storage.clear);
};

export const newPassword = (credentials, id, token) => {
  console.log('credentials en api/nwepassword', credentials, id, token);
  return client.put(
    `${authPath}/new-password`,
    { newPassword: credentials, id: id },
    {
      headers: { Authorization: `${token}` },
    }
  );
  // return client.put(`${authPath}/forgot-password`, credentials);
};
