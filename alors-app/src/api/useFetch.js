import { useState, useEffect } from 'react';

function useFetch(url, options = {}) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
 

  const fetchData = async (url, options = {}) => {
    setIsLoading(true);
    setError(null);

    try {
      const response = await fetch(url, options);

      if (!response.ok) {
        throw new Error('Network response was not ok');
      }

      const jsonData = await response.json();
      setData(jsonData);
      setIsLoading(false);
    
    } catch (error) {
      setError(error);
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (url) { 
      fetchData(url, options);
    }
  }, [url, options]); 

  return { data, isLoading, error, fetchData };
}

export default useFetch;
