import { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "@/config/consts";

interface Props {
  jwt: string;
  query: string;
}

const useFetchDataJwt = ({ query, jwt }: Props) => {
  const [data, setData] = useState<any>([{}]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      const url = baseUrl + query;
      setLoading(true);
      const response: any = await axios({
        url: url,
        method: "get",
        // withCredentials: true,

        headers: {
          // "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${jwt}`,
        },
      });
      setData(response.data);
      setLoading(false);
    };
    fetchData();
  }, []);

  return [data, loading];
};

export default useFetchDataJwt;
