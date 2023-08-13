import React, { useState, useEffect } from "react";
import Nav from "@/components/nav/Nav";
import { Posts } from "@/components/posts/Posts";
import useFetchDataJwt from "@/components/customHooks/useFetchDataJwt";
import { SplitScreen1to4 } from "@/components/SplitScreen1to4/SplitScreen1to4";
import { TagsFilter } from "@/components/tagsFilter/TagsFilter";
import { useFilterPosts } from "@/components/customHooks/useFilterPosts";

interface Props {
  isLogged: boolean;
  repos: any;
  accessToken: string;
  user: any;
  setUser: any;
  jwt: string;
  setJwt: any;
}
export default function Home({ user, jwt, isLogged }: Props) {
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
