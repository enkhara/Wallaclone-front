import client,{configureClient, resetClient} from './client'
import storage from '../utils/storage';

const authPath = '/apiv1/auth';

export const login = ({ remember, ...credentials }) => {
    return client
      .post(`${authPath}/signin`, credentials)
      .then(({ accessToken }) => {
        configureClient({ accessToken });
        console.log(accessToken);
        return accessToken;
      })
      .then(accessToken => {
        if (remember) {
          storage.set('auth', accessToken);
        }
      });
  };
  
  export const logout = () => {
    return Promise.resolve().then(resetClient).then(storage.clear);
  };
  