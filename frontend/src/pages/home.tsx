import React, { useState, useEffect } from "react";
import Nav from "@/components/nav/Nav";
import { Posts } from "@/components/posts/Posts";
import useFetchDataJwt from "@/components/customHooks/useFetchDataJwt";
import { SplitScreen1to4 } from "@/components/SplitScreen1to4/SplitScreen1to4";
import { TagsFilter } from "@/components/tagsFilter/TagsFilter";
import { useFilterPosts } from "@/components/customHooks/useFilterPosts";
import Cookies from "universal-cookie";
import { useGetUserData } from "@/components/customHooks/useGetUserData";

interface Props {
  user: any;
  jwt: string;
  setJwt: any;
  setGithubProfile: any;
  setUser: any;
  setIsLogged: any;
  isLogged: boolean;
}
export default function Home({
  user,
  setJwt,
  jwt,
  setGithubProfile,
  setUser,
  setIsLogged,
  isLogged,
}: Props) {
  const cookies = new Cookies();
  useEffect(() => {
    setJwt(cookies.get("jwt"));
    setUser({
      githubUsername: cookies.get("username"),
      github_url: cookies.get("github_url"),
      avatar_url: cookies.get("avatar_url"),
      user_id: cookies.get("user_id"),
    });
    setIsLogged(true);
  }, []);
  useGetUserData({
    jwt: cookies.get("jwt"),
    setGithubProfile: setGithubProfile,
  });
  const [posts, loading] = useFetchDataJwt({ query: "/post", jwt: jwt });
  const [selectedFilters, setSelectedFilters, filteredPosts] = useFilterPosts({
    posts: posts,
  });
  return (
    <>
      <Nav isLogged={isLogged} />
      <SplitScreen1to4
        left={
          <TagsFilter
            setSelectedFilters={setSelectedFilters}
            selectedFilters={selectedFilters}
          />
        }
        right={<Posts posts={filteredPosts} user={user} jwt={jwt} />}
      ></SplitScreen1to4>
    </>
  );
}
