import React from "react";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";
import DownloadForOfflineOutlinedIcon from "@mui/icons-material/DownloadForOfflineOutlined";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import { Back } from "../back/Back";

interface Props {
  focusFiles: any;
  children: any;
}
export const FocusFileList = ({ focusFiles, children }: Props) => {
  console.log(focusFiles);
  return (
    <>
      <Stack spacing={2}>
        <Back />
        <Typography variant="h5">Focus files</Typography>
        {focusFiles?.map((file: any) => {
          return (
            <Grid
              container
              key={file}
              direction="row"
              justifyContent="space-between"
              marginBottom={2}
            >
              <Grid item>
                <Typography variant="body1">{file.name}</Typography>
              </Grid>
              <Grid item>
                <IconButton href={file.html_url} target="_blank">
                  <GitHubIcon></GitHubIcon>
                </IconButton>

                {/* <IconButton>
                  <DownloadForOfflineOutlinedIcon></DownloadForOfflineOutlinedIcon>
                </IconButton> */}
              </Grid>
            </Grid>
          );
        })}
        <Typography></Typography>
        {children}
      </Stack>
    </>
  );
};
