import client from './client';
import { BASE_URL } from './adverts';
import storage from '../utils/storage';

export const getUserLogged = () => {
  const user = client.get(`${BASE_URL}/users/auth/me`);
  console.log('en api user', user);
  return user;
};
/**implementar en back la ruta correcta y en front */
export const getUser = (userId) => {
  const user = client.get(`${BASE_URL}/users/${userId}`);
  console.log(user);
  return user;
};

const token = storage.get('auth');

export const addFavorites = (user_Id, advertId) => {
  return client.put(
    `${BASE_URL}/users/addfavourite/${user_Id}`,
    { ads_favs: advertId },
    {
      headers: { Authorization: `${token}` },
    }
  );
};

export const deleteFavorites = (user_Id, advertId) => {
  return client.put(
    `${BASE_URL}/users/deletefavourite/${user_Id}`,
    { ads_favs: advertId },
    {
      headers: { Authorization: `${token}` },
    }
  );
};
export const getUserFav = (userId) => {
  const user = client.get(`${BASE_URL}/users/${userId}`);
  console.log(user);
  return user;
};
