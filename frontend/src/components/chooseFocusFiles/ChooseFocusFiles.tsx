import React from "react";
import Checkbox from "@mui/material/Checkbox";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

interface Props {
  focusFiles: any;
  setFocusFileList: any;
}
export const ChooseFocusFiles = ({ focusFiles, setFocusFileList }: Props) => {
  const handleFocusFileList = (e: any, id: number) => {
    const checked = e.target.checked;
    if (checked) {
      setFocusFileList((prev: any) => [...prev, id]);
    } else if (!checked) {
      setFocusFileList((prev: any) =>
        prev.filter((focusFile: any) => focusFile != id)
      );
    }
  };
  return (
    <Grid margin="40px">
      <Typography variant="h6">Which focus files did you review?</Typography>
      <Grid container direction="column" justifyContent="center">
        {focusFiles.map((file: any) => {
          return (
            <Grid xs={2} item container alignItems="center" key={file.id}>
              <Typography>{file.name}</Typography>
              <Checkbox
                onChange={(e) => {
                  handleFocusFileList(e, file.id);
                }}
              />
            </Grid>
          );
        })}
      </Grid>
    </Grid>
  );
};
