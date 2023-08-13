import React from "react";
import Typography from "@mui/material/Typography";
import GitHubIcon from "@mui/icons-material/GitHub";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { githubLoginUrl } from "@/config/consts";

interface Props {
  children: any;
}
export const LoginPrompt = ({ children }: Props) => {
  return (
    <Grid
      item
      container
      justifyContent="center"
      alignItems="center"
      style={{
        width: 400,
        margin: "auto",
        height: 150,
      }}
    >
      <Grid item xs={12}>
        <Typography variant="h5" align="center">
          {children}
        </Typography>
      </Grid>
      <Grid item>
        <Button
          variant="contained"
          endIcon={<GitHubIcon />}
          href={githubLoginUrl}
        >
          Login
        </Button>
      </Grid>
    </Grid>
  );
};
