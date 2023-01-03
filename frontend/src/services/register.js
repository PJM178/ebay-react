import axios from 'axios';
const baseUrl = 'api/auth/register';

const register = async (credentials) => {
  try {
    const response = await axios.post(baseUrl, credentials);
    console.log(response.data);
    return response.data;
  } catch (error) {
    console.log(error.response.data);
    return error;
  }
};

export default { register };