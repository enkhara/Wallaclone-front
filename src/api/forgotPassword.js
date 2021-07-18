import client from './client'


const authPath = '/apiv1/auth';

export const forgotPassword=({...credentials})=>{

    return client.post(`${authPath}/forgot-password`, credentials)

};
