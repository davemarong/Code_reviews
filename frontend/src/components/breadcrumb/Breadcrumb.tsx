import React from "react";
import Breadcrumbs from "@mui/material/Breadcrumbs";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Link from "@mui/material/Link";

interface Props {
  setGithubTree: any;
  githubTree: any;
}
export const Breadcrumb = ({ setGithubTree, githubTree }: Props) => {
  const updateGithubTree = (githubTreeIndex: number) => {
    setGithubTree(
      githubTree.filter((tree: any, index: number) => githubTreeIndex >= index)
    );
  };
  return (
    <Breadcrumbs>
      {githubTree.map((item: any, index: number) => {
        return (
          <Link
            underline="hover"
            color="inherit"
            key={item.title}
            onClick={() => {
              updateGithubTree(index);
            }}
          >
            {item.title}
          </Link>
        );
      })}
    </Breadcrumbs>
  );
};
