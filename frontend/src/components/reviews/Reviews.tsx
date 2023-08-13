import React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Stack from "@mui/material/Stack";
import Divider from "@mui/material/Divider";
import { AvatarCard } from "../avatarCard/AvatarCard";
import { Typography } from "@mui/material";

interface Props {
  reviews: any;
  focusFiles: any;
}
export const Reviews = ({ reviews, focusFiles }: Props) => {
  console.log(reviews);
  const reviews2 = reviews.map((review: any) => {
    const focus_files2 = review.focus_files.map((file: any) => {
      return { name: "correct file name", id: file };
    });
    return { ...review, focus_files: focus_files2 };
  });
  return (
    <Grid item container direction="column" alignItems="center">
      {reviews2?.map((review: any) => {
        return (
          <Grid item style={{ padding: 20, margin: 20 }} key={`${review.id}`}>
            <AvatarCard user={review} />
            <Typography>{review.review}</Typography>
            <Divider style={{}}></Divider>
            <Stack direction="row">
              {review.focus_files.map((file: any) => {
                return (
                  <Typography padding={2} key={file.id}>
                    {file.id}
                  </Typography>
                );
              })}
            </Stack>
            <Divider style={{}}></Divider>
          </Grid>
        );
      })}
    </Grid>
  );
};
