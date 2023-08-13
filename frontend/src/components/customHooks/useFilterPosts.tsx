import React, { useState, useEffect } from "react";

interface Props {
  posts: any;
}
export const useFilterPosts = ({ posts }: any) => {
  const [selectedFilters, setSelectedFilters] = useState<any>([]);
  const [filteredPosts, setFilteredPosts] = useState(posts);

  useEffect(() => {
    if (selectedFilters.length < 1) {
      setFilteredPosts(posts);
    } else {
      let filteredPosts: any = [];
      let postsCopy = posts;
      for (let i = 0; i < selectedFilters.length; i++) {
        postsCopy = postsCopy.filter((post: any) => {
          if (post?.subject_names?.includes(selectedFilters[i])) {
            filteredPosts.push(post);
            return false;
          }
          return true;
        });
      }
      setFilteredPosts(filteredPosts);
    }
  }, [selectedFilters, posts]);

  return [selectedFilters, setSelectedFilters, filteredPosts];
};
