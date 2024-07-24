import { useState, useEffect } from "react";

const useFetchData = (resource) => {
  const [data, setData] = useState([]);
  const [isPending, setIsPending] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Cleaning up useEffect hook with abort controller
    const abortCont = new AbortController();
    setTimeout(() => {
      fetch(resource, { signal: abortCont.signal })
        .then((response) => {
          if (!response.ok) {
            throw Error(
              "Couldn't fetch the data from that resource. Please verify if the path url is correct and if you're connected to the internet."
            );
          }
          return response.json();
        })
        .then((data) => {
          setData(data);
          setIsPending(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("fetch aborted");
          } else {
            setError(err.message);
            setIsPending(false);
          }
        });
    }, 2000);

    return () => abortCont.abort();
  }, [resource]);

  return { data, isPending, error };
};

export default useFetchData;
