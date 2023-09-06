import { useState } from 'react';
import { loginUser, setCookie } from './api'; 

function useLogin() {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  const login = async (email, password) => {
    setIsLoading(true);
    setError(null);

    try {
      const loginResponse = await loginUser(email, password);

      if (loginResponse.success) {
        await setCookie(); 

        

        setIsLoading(false);
        return true; 
      } else {
        setError('Invalid credentials');
        setIsLoading(false);
        return false; 
      }
    } catch (error) {
      setError(error.message);
      setIsLoading(false);
      return false; 
    }
  };

  return { login, isLoading, error };
}

export default useLogin;
