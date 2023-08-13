import React, { useEffect } from "react";
import { useRouter } from "next/router";

interface Props {
  setUser: any;
}
export const useCheckQueryParams = ({ setUser }: Props) => {
  const router = useRouter();
  const { query } = router;
  const username = query.username;
  const id = query.id;
  useEffect(() => {
    if (username) {
      setUser();
    }
  }, []);

  return [username, id];
};
