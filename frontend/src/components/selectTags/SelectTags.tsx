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
  setTags: any;
  tags: any;
  setTagsCollection: any;
  tagsCollection: any;
  setTagValue: any;
  tagValue: any;
}
export const SelectTags = ({
  setTags,
  tags,
  setTagsCollection,
  tagsCollection,
  setTagValue,
  tagValue,
}: Props) => {
  return (
    <Grid
      container
      justifyContent="space-evenly"
      style={{ margin: component_topBottom_margin }}
    >
      <Grid item xs={5}>
        <Typography>Category tags</Typography>
        <Autocomplete
          onChange={(event, newValue: any) => {
            if (newValue) {
              setTags([...tags, newValue.label]);
              setTagsCollection(
                tagsCollection.filter((tag: any) => tag != newValue)
              );

              setTagValue("");
            }
          }}
          inputValue={tagValue}
          disablePortal
          id="combo-box-demo"
          options={tagsCollection}
          renderInput={(params) => (
            <TextField
              onChange={(e) => {
                setTagValue(e.target.value);
              }}
              {...params}
              label="Tags"
            />
          )}
        />
      </Grid>
      <Grid container alignContent="center" justifyContent="center" item xs={8}>
        {tags.map((tag: any) => {
          return (
            <Card sx={{ width: 100 }} key={tag}>
              <CardContent>{tag}</CardContent>
            </Card>
          );
        })}
      </Grid>
    </Grid>
  );
};
