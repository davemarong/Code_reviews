import { baseUrlAuth, baseUrl } from "../config/consts";
import axios from "axios";

/**
 * Function for post requests to the server
 * @param {string} query The api endpoint query. 'user', 'post' or 'mentor'
 * @param {any} data The data returned from the request
 * @return {promise} - The resolved data
 */
export const postRequest = async (query: string, data: any): Promise<any> => {
  // FIX A SYSTEM FOR DIFFERENT BASE URL, AND ENV
  const url = baseUrl + query;
  const response = await fetch(url, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  return result;
};

/**
 * Function for post requests to the server
 * @param {string} query The api endpoint query. 'user', 'post' or 'mentor'
 * @param {any} data The data returned from the request
 * @param {string} jwt The json web token
 * @return {promise} - The resolved data
 */
export const postRequestJwt = async (
  query: string,
  data: any,
  jwt: string
): Promise<any> => {
  // FIX A SYSTEM FOR DIFFERENT BASE URL, AND ENV
  const url = baseUrl + query;
  const response = await fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
    body: JSON.stringify(data),
  });
  const result = await response.json();
  return result;
};

/**
 * Function for checking if the url contains query data from a github redirect after a oauth login
 * @return {string | false} - Either the github code for authentication or false
 */
export const checkUrlForGithubRedirect = (): string | false => {
  const query = window.location.search.split("=");
  if ((query[0] = "username")) {
    return query[1];
  } else {
    return false;
  }
};

/**
 * Function for fetching data from the current github user
 * @param jwt The jason web token
 * @param query The api endpoint query or full url. '/user', '/post/63' or "https://api.github.com/post/63"
 * @return {promise} - The resolved data
 */
export const fetchGithubData = async (
  jwt: string,
  query: string
): Promise<any> => {
  const url = baseUrl + query;
  const response: any = await axios({
    url: url,
    method: "get",
    // withCredentials: true,

    headers: {
      // "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${jwt}`,
    },
  });
  return response;
};
/**
 * Function for fetching data from the current github user
 * @param jwt The jason web token
 * @param query The api endpoint query or full url. '/user', '/post/63' or "https://api.github.com/post/63"
 * @param content_url The url of the repo/folder to fetch
 * @return {promise} - The resolved data
 */
export const fetchRepoContent = async (
  jwt: string,
  query: string,
  content_url: string
): Promise<any> => {
  const url = baseUrl + query;

  const response: any = await axios({
    url: url,
    method: "post",
    // withCredentials: true,

    headers: {
      // "Access-Control-Allow-Origin": "*",
      Authorization: `Bearer ${jwt}`,
    },
    data: { url: content_url },
  });
  return response;
};

/**
 * Function for sending the token received from github to the backend for further authorization
 * @param query The api endpoint query. 'user', 'post' or 'mentor'
 * @return {promise} - The resolved data
 */
export const sendAccessTokenToBackend = async (
  query: string | false
): Promise<any> => {
  const { access_token } = await postRequest(
    "/auth/receive_github_code_token",
    {
      code: query,
    }
  );
  return access_token;
};

/**
 * Function for adding repo programming languages to the original repo list
 * @param accessToken The token returned from Github to authorize requests
 * @param {array} repos  A list of repos
 * @param owner The username of the github user
 * @return {promise} - The resolved data
 */
export const addProgrammingLanguagesToRepos = async (
  accessToken: string,
  repos: any,
  owner: string
): Promise<any> => {
  const detailsData = repos.map(async (repo: any) => {
    const preFetchData = await fetchGithubData(
      accessToken,
      `repos/${owner}/${repo.name}/languages`
    );
    return { ...repo, repo_languages: preFetchData };
  });
  const result = await Promise.all(detailsData);
  // result.map((repoLanguages) => {
  //   Object.keys((repoLanguages: any) => {
  //     const totalNumber =

  //   });
  // });
  return result;
};

export const createPost = (
  title: string,
  description: string,
  repo_url: string,
  user_id: number
) => {
  // do data validation
  postRequest("/post", {
    title: title,
    description: description,
    repo_url: repo_url,
    user_id: user_id,
  });
};
