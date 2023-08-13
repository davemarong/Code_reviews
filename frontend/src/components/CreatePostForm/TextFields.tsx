import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Select from "@mui/material/Select";
import RepoList from "@/components/repoList/RepoList";
import { fetchGithubData, postRequest, postRequestJwt } from "@/utils/utils";
import { Subject_Enum } from "@/config/consts";
import { component_topBottom_margin } from "@/config/consts";
interface Props {
  repo: any;
  title: any;
  setTitle: any;
  setDescription: any;
}
export const TextFields = ({
  repo,
  title,
  setTitle,
  setDescription,
}: Props) => {
  const handleTitle = (e: any) => {
    setTitle(e.target.value);
  };
  const handleDescription = (e: any) => {
    setDescription(e.target.value);
  };
  return (
    <Grid
      container
      justifyContent="center"
      style={{ margin: component_topBottom_margin }}
      spacing={2}
    >
      <Grid item xs={5}>
        {/* <Typography>Title</Typography> */}
        <TextField
          defaultValue={repo?.name}
          onChange={handleTitle}
          value={title}
          fullWidth
          label="Title"
        />
      </Grid>
      <Grid item xs={12}></Grid>
      <Grid item xs={5}>
        {/* <Typography>Description</Typography> */}
        <TextField
          multiline
          rows={10}
          onChange={handleDescription}
          fullWidth
          label="Description"
        />
      </Grid>
    </Grid>
  );
};
