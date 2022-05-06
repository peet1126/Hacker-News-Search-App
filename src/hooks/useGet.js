import { useState, useEffect } from "react";

const useGet = (url) => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const abortCont = new AbortController();

    // prevent initial fetch before the user has submitted anything
    if (url === null) {
      return setLoading(false);
    } else {
      // fetch search results form HN Algolia API
      fetch(url, { signal: abortCont.signal })
        .then((res) => {
          if (!res.ok) {
            throw Error("Could not run POST method from this resource.");
          }
          return res.json();
        })
        .then((data) => {
          console.log(data);
          setData(data.hits);
          setLoading(false);
          setError(null);
        })
        .catch((err) => {
          if (err.name === "AbortError") {
            console.log("Get aborted");
          } else {
            setLoading(false);
            setError(err.message);
            console.log(err.message);
          }
        });
      return () => abortCont.abort();
    }
  }, [url]);
  return { data, loading, error };
};

export default useGet;
