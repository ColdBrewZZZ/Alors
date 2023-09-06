import { useState, useEffect } from 'react';

function useFetchImage(url, options = {}) {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    setIsLoading(true);
    setError(null);

    fetch(url)
      .then((response) => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then((data) => {
        setData(data);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, [url]);

  

  

  return { data, isLoading, error };
}

export default useFetchImage;


/*
home page - load some products
 show some indicator,
 fetch the data,
 hiding indicator
 showing data or error

product page - load product details
 show some indicator,
 fetch the data,
 hiding indicator
 showing data or error

searching - load searched results
 show some indicator,
 fetch the data,
 hiding indicator
 showing data or error
*/