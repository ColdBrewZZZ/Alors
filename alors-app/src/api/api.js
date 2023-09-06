import axios from 'axios';
axios.defaults.withCredentials = true
const urlBase = 'http://localhost:3000' ; // could be put in the .env folder 

export const loginUser = async (email, password) => {
  try {
    const response = await axios.post(`${urlBase}/users/login`, {
      email,
      password,
    });

    return response.data;
  } catch (error) {
    throw error;
  }
};


export const setCookie = async () => {
    try {
      const response = await axios.get('http://localhost:3000/users/set-cookie');
  
      return response.data;
    } catch (error) {
      throw error;
    }
  };