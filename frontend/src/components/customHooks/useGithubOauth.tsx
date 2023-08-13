import React, { useState, useEffect } from "react";
import {
  checkUrlForGithubRedirect,
  fetchGithubData,
  postRequest,
  sendAccessTokenToBackend,
  addProgrammingLanguagesToRepos,
} from "../../utils/utils";
interface Props {
  setRepos: any;
  setUser: any;
  setIsLogged: any;
  setAccessToken: any;
  setJwt: any;
  setGithubProfile: any;
}
export const useGithubOauth = ({
  setRepos,
  setUser,
  setIsLogged,
  setAccessToken,
  setJwt,
  setGithubProfile,
}: Props) => {
  useEffect(() => {
    const getGithubData = async () => {
      const query = checkUrlForGithubRedirect();
      const access_token = await sendAccessTokenToBackend(query);
      const reposData = await fetchGithubData(access_token, "user/repos");
      const userData = await fetchGithubData(access_token, "user");
      const updatedRepos = await addProgrammingLanguagesToRepos(
        access_token,
        reposData,
        userData.login
      );
      const response = await postRequest("/auth/login/github", {
        githubUsername: userData.login,
        github_url: userData.html_url,
        avatar_url: userData.avatar_url,
      });
      setRepos(updatedRepos);
      setGithubProfile(userData);
      setUser(response);
      setIsLogged(true);
      setAccessToken(access_token);
      setJwt(response.jwt);
    };
    getGithubData();
  }, []);
};
