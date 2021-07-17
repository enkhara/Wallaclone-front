import client from './client';

const authPath = '/apiv1/auth';

const register = ({ ...credentials }) => {
	console.log(`credentials en api/register.js ${credentials}`);
	return client.post(`${authPath}/signup`, credentials);
};

export default register;
