import client from './client'


const authPath = '/apiv1/auth';

export const register=({...credentials})=>{

    return client.post(`${authPath}/signup`, credentials)

};
