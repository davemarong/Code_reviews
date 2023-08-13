import Nav from "../../components/nav/Nav";
import { useGithubOauth } from "../../components/customHooks/useGithubOauth";
import RepoList from "@/components/repoList/RepoList";

interface Props {
  repos: any;
  user: any;
  setRepos: any;
  setUser: any;
  setIsLogged: any;
  setAccessToken: any;
  setJwt: any;
  setGithubProfile: any;
  githubProfile: any;
}

const Auth = ({
  setRepos,
  setUser,
  setIsLogged,
  repos,
  user,
  setAccessToken,
  setJwt,
  setGithubProfile,
  githubProfile,
}: Props) => {
  // Get dynamic types somehow? dave
  useGithubOauth({
    setRepos: setRepos,
    setUser: setUser,
    setIsLogged: setIsLogged,
    setAccessToken: setAccessToken,
    setJwt: setJwt,
    setGithubProfile: setGithubProfile,
  });

  return (
    <div>
      <Nav />
      <p>{githubProfile?.name}</p>
      <p>{githubProfile?.bio}</p>
      <img src={githubProfile?.avatar_url} />
      {/* <RepoList repos={repos} /> */}
    </div>
  );
};
export default Auth;
