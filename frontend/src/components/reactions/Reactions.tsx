import React, { useState, useEffect } from "react";
import IconButton from "@mui/material/IconButton";
import ChatOutlinedIcon from "@mui/icons-material/ChatOutlined";
import Grid from "@mui/material/Grid";
import { postRequestJwt } from "@/utils/utils";
import { useLikedPost } from "../customHooks/useLikedPost";

interface Props {
  post: any;
  jwt: string;
  user: any;
}
export const Reactions = ({ post, jwt, user }: Props) => {
  const [hearthIcon, handleToggleLike] = useLikedPost({
    post: post,
    user: user,
  });

  return (
    <Grid container item xs={3} justifyContent="flex-end">
      <IconButton
        color="secondary"
        onClick={async () => {
          const response = await postRequestJwt(
            "/vote",
            {
              post_id: post.id,
            },
            jwt
          );
          console.log(response);
          if (response.success) {
            handleToggleLike();
          }
        }}
      >
        {hearthIcon.icon}
        {post.vote_count}
      </IconButton>

      <IconButton color="secondary">
        <ChatOutlinedIcon />
        {post.review_count}
      </IconButton>
    </Grid>
  );
};
