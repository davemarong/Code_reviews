import { useState, useEffect } from "react";
import axios from "axios";
import { baseUrl } from "@/config/consts";

interface Props {
  query: string;
}

const useFetchData = ({ query }: Props) => {
  const [data, setData] = useState<any>([{}]);
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    const fetchData = async () => {
      if (query.includes("undefined")) return;

      const url = baseUrl + query;
      setLoading(true);
      const response: any = await axios({
        url: url,
      });

      setData(response.data);
      setLoading(false);
    };
    fetchData();
  }, [query]);

  return [data, loading];
};

export default useFetchData;
