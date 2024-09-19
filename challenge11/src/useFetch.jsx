import { useState, useEffect } from "react";

export function useFetch(URL) {

  let [obj, setObj] = useState({
    data: null,
    isLoading: true,
    hasError: false,
  });

  async function getData(URL) {
    setTimeout(async () => {
      try {
        const res = await fetch(URL);
        const data = await res.json();

        const newObj = { data: data, isLoading: false, hasError: false }

        setObj(newObj);

      } catch (err) {
        console.error(err);

        const newObj = { data: null, isLoading: false, hasError: true }
        setObj(newObj);
      }
    }, 1000);
  }

  useEffect(() => {
    getData(URL);
  }, [URL]);

  return { ...obj };
}
