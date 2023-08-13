import React from "react";
import Grid from "@mui/material/Grid";

interface Props {
  left: any;
  right: any;
  leftPadding?: number;
  rightPadding?: number;
  border?: boolean;
}
export const SplitScreen1to4 = ({
  left,
  right,
  leftPadding = 0,
  rightPadding = 0,
  border = true,
}: Props) => {
  return (
    <Grid
      container
      flexWrap="nowrap"
      justifyContent="space-evenly"
      // style={{ margin: "30px 0" }}
    >
      <Grid
        item
        xs={3}
        style={{
          border: border ? "1px solid #D0D7DE" : "",
          padding: leftPadding,
        }}
      >
        {left}
      </Grid>
      <Grid
        item
        xs={9}
        style={{
          border: border ? "1px solid #D0D7DE" : "",
          padding: rightPadding,
        }}
      >
        {right}
      </Grid>
    </Grid>
  );
};
