import React from "react";
import Avatar from "@mui/material/Avatar";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";

interface Props {
  user: any;
}
export const AvatarCard = ({ user }: Props) => {
  return (
    <Grid
      container
      spacing={2}
      align-items="flex-end"
      flexWrap="nowrap"
      item
      style={{ marginBottom: 20 }}
    >
      <Grid item>
        <Avatar
          alt="Remy Sharp"
          src={user.avatar_url}
          sx={{ width: 50, height: 50 }}
        />
      </Grid>
      <Grid container direction="column" item>
        <Typography variant="h6">{user.username}</Typography>
        <Grid container item alignItems="center">
          <Typography variant="body2">{user.github_url}</Typography>
          {/* <Typography variant="body1">{user.created_at}</Typography> */}
        </Grid>
      </Grid>
    </Grid>
  );
};
