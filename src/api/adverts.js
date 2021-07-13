import client from './client';

export const BASE_URL = '/apiv1';

export const getAdverts = () => {
  const url = `${BASE_URL}/advertisements`;
  return client.get(url);
};







