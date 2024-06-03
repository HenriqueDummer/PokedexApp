import { useEffect, useState } from "react";

function useFetch(url) {
  const [fetchedData, setFetchedData] = useState();
  const [isLoading, setIsLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function getData() {
      try {
        const result = await fetch(url);
        console.log(result.ok)
        if(!result.ok){
          throw new Error("An error occurred");
        }
        const resultData = await result.json();
        setFetchedData(resultData);
      } catch (error) {
        setError(error.message)
      }
    }

    setIsLoading(false)

    getData();
  }, []);


  return {
    fetchedData: fetchedData,
    isLoading: isLoading,
    error: error
  };
}

export default useFetch;
