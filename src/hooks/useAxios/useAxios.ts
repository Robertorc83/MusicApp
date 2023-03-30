import axios, { AxiosError } from "axios";
import { useEffect, useState } from "react";
import { Song } from "../../interfaces";

function useAxios() {
  const [query, setQuery] = useState<string>("adele");
  const [data, setData] = useState<Song[]>([]);
  const [error, setError] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (!query) return;
    axios
      .get(`/api/search?q=${query}`)
      .then((response) => {
        setData(response.data.data);
      })
      .catch((error) => {
        console.log(error);
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [query]);

  return {
    setQuery,
    data,
    error,
    loading,
  };
}

export default useAxios;
