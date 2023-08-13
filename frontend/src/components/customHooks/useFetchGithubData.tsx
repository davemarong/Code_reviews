import { useState, useEffect } from "react";
import axios from "axios";

interface Props {
  jwt: string;
  query: string;
}

const useFetchGithubData = ({ jwt, query }: Props) => {
  const [data, setData] = useState<any>();
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    setLoading(true);

    const url = "https://localhost/3000" + query;
    const options = {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${jwt}`,
      },
    };

    axios
      .get(url, options)
      .then((response) => {
        setData(response.data);
        setLoading(false);
      })
      .catch((error) => {
        console.error(error);
        setLoading(false);
      });
  }, []);

  return [loading, data];
};

export default useFetchGithubData;
