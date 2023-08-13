import React from "react";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";

interface Props {
  post: any;
}
export const CategoryTagsList = ({ post }: Props) => {
  const tagListColors = ["#FFF8DD", "#FFDDDD", "#ECFFDD", "#DDFFF7", "#DEDDFF"];
  return (
    <Grid container item xs={5} style={{ maxWidth: 300 }}>
      {post?.subject_names?.map((subject: any, index: number) => {
        return (
          <Button
            key={`${post.title}${subject}`}
            style={{
              backgroundColor: tagListColors[index],
              border: "1px solid #D0D7DE",
              color: "#000000",
              margin: "5px 5px 5px 0px",
            }}
          >
            {subject}
          </Button>
        );
      })}
    </Grid>
  );
};
