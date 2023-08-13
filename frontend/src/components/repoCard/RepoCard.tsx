import React from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
interface Props {
  repo: any;
}
export const RepoCard = ({ repo }: Props) => {
  return (
    <Paper elevation={3}>
      <Typography>{repo?.name}</Typography>
      <Typography>{repo?.html_url}</Typography>
      <Typography>{repo?.updated_at}</Typography>

      {Object.keys(repo?.repo_languages).map((language) => {
        return (
          <Typography key={`${repo?.html_url}${language}`}>
            {language}
          </Typography>
        );
      })}
    </Paper>
  );
};
