import axios from 'axios';
const baseUrl = '/api/listings';

let token = null;

// Set the token for authorization
const setToken = newToken => {
  token = `bearer ${newToken}`;
};

// Get all listings
const getAll = async () => {
  const response = await axios.get(baseUrl);

  return response.data;
};

// New listing
const newListing = async (newListing) => {
  const config = {
    headers: { Authorization: token }
  };
  const response = await axios.post(baseUrl, newListing, config);
  return response.data;
};

export default { setToken, getAll, newListing };