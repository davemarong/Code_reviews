import React from "react";
import Nav from "@/components/nav/Nav";
import { Posts } from "@/components/posts/Posts";
import useFetchDataJwt from "@/components/customHooks/useFetchDataJwt";
interface Props {
  jwt: string;
  user: any;
  githubProfile: any;
  isLogged: boolean;
}
const PostsPage = ({ jwt, user, githubProfile, isLogged }: Props) => {
  const [data, loading] = useFetchDataJwt({ query: "/post", jwt: jwt });
  return (
    <>
      <Nav isLogged={isLogged} />
      <Posts posts={data} user={user} jwt={jwt} />
    </>
  );
};
export default PostsPage;
