import React from "react";
import Button from "@mui/material/Button";
import { fetchGithubData, postRequest, postRequestJwt } from "@/utils/utils";

interface Props {
  children: any;
  title: any;
  description: any;
  tags: any;
  repo: any;
  user: any;
  jwt: any;
  highlightFiles: any;
}
export const SubmitButton = ({
  children,
  title,
  description,
  tags,
  repo,
  user,
  jwt,
  highlightFiles,
}: Props) => {
  return (
    <Button
      onClick={async () => {
        const response = await postRequestJwt(
          "/post",
          {
            title: title,
            description: description,
            repo_url: repo.html_url,
            user_id: user.user_id,
            tags: tags,
            files: highlightFiles,
          },
          jwt
        );
      }}
      variant="outlined"
    >
      {children}
    </Button>
  );
};
