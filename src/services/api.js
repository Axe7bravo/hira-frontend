import axios from 'axios';

const API_BASE_URL = 'http://localhost:5000'; // Or your production URL

const api = axios.create({
  baseURL: API_BASE_URL,
});

export const registerUser = async (email, password, userType) => {
  try {
    const response = await api.post('/auth/register', { email, password, userType });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const loginUser = async (email, password) => {
  try {
    const response = await api.post('/auth/login', { email, password });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

export const getListings = async (token) => {
  try {
    const response = await api.get('/listings', {
      headers: { Authorization: `Bearer ${token}` },
    });
    return response.data;
  } catch (error) {
    throw error.response.data;
  }
};

// Add other API functions as needed

// Function to fetch user data using a token
export const fetchUserData = async (token) => {
  console.log(token)
  try {
    const response = await api.get('/auth/user', {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    console.log(response.data)
    return response.data;
  } catch (error) {
    console.error('Error fetching user data:', error);
    throw error;
  }
};