import "@/styles/globals.css";
import type { AppProps } from "next/app";
import react, { useState } from "react";
export default function App({ Component, pageProps }: AppProps) {
  const [user, setUser] = useState<any>({});
  const [githubProfile, setGithubProfile] = useState<any>({});
  const [repos, setRepos] = useState<any>([]);
  const [isLogged, setIsLogged] = useState(false);
  const [accessToken, setAccessToken] = useState("");
  const [jwt, setJwt] = useState("");

  return (
    <Component
      {...pageProps}
      user={user}
      setUser={setUser}
      repos={repos}
      setRepos={setRepos}
      isLogged={isLogged}
      setIsLogged={setIsLogged}
      accessToken={accessToken}
      setAccessToken={setAccessToken}
      jwt={jwt}
      setJwt={setJwt}
      githubProfile={githubProfile}
      setGithubProfile={setGithubProfile}
    />
  );
}
