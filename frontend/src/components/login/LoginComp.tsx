import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import GitHubIcon from "@mui/icons-material/GitHub";
import { githubLoginUrl } from "@/config/consts";
const LoginComp = () => {
  return (
    <Grid container justifyContent="center" spacing={4} margin="50px 0">
      <Grid item xs={12}>
        <Typography variant="h5" align="center">
          Sign in with GitHub
        </Typography>
      </Grid>

      <Grid item>
        <Button
          variant="contained"
          onClick={async () => {}}
          href={githubLoginUrl}
          endIcon={<GitHubIcon />}
        >
          GitHub
        </Button>
      </Grid>
    </Grid>
  );
};
export default LoginComp;
