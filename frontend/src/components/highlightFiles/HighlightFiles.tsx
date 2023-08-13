import React from "react";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import IconButton from "@mui/material/IconButton";
import { component_topBottom_margin } from "@/config/consts";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";

interface Props {
  highlightFiles: any;
  setHighlightFiles: any;
}
export const HighlightFiles = ({
  highlightFiles,
  setHighlightFiles,
}: Props) => {
  console.log(highlightFiles);
  const removeFocusFile = (file: any) => {
    setHighlightFiles(
      highlightFiles.filter(
        (item: any) => item.download_url != file.download_url
      )
    );
  };
  return (
    <>
      <Grid
        container
        direction="row"
        justifyContent="center"
        style={{ margin: component_topBottom_margin }}
      >
        <Grid item xs={12} style={{ margin: component_topBottom_margin }}>
          <Typography align="center" variant="h5">
            Highlight files
          </Typography>
        </Grid>
        {highlightFiles.map((file: any) => {
          return (
            <Grid key={file.name} xs={2} item>
              <IconButton
                onClick={() => {
                  removeFocusFile(file);
                }}
              >
                <CancelOutlinedIcon />
              </IconButton>
              <Typography>{file.name}</Typography>
              <InsertDriveFileOutlinedIcon />
            </Grid>
          );
        })}
      </Grid>
    </>
  );
};
