import { fetchGithubData } from "@/utils/utils";
import React, { useEffect } from "react";
import useFetchGithubData from "./useFetchGithubData";

interface Props {
  jwt: string;
  setGithubProfile: any;
}
export const useGetUserData = ({ jwt, setGithubProfile }: Props) => {
  useEffect(() => {
    let user = localStorage.getItem("user");
    if (!user) {
      fetchGithubData(jwt, "/github/user").then((res) => {
        setGithubProfile(res.data);
      });
    }
  }, []);

  return;
};
