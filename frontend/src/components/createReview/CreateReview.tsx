import React, { useState } from "react";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Grid from "@mui/material/Grid";
import { postRequestJwt } from "@/utils/utils";
import { HighlightFiles } from "../highlightFiles/HighlightFiles";
import { LoginPrompt } from "../loginPrompt/LoginPrompt";

interface Props {
  jwt: string;
  user: any;
  post: any;
  focusFileList: any;
}
export const CreateReview = ({ jwt, user, post, focusFileList }: Props) => {
  const [review, setReview] = useState("");
  // make public in utils
  const handleReview = (e: any) => {
    setReview(e.target.value);
  };

  return (
    <Grid container padding="40px" spacing={2}>
      <Grid item xs={12}>
        <TextField
          // label="Review"
          placeholder="First file - The api call should be formatted in a cleaner manner..."
          fullWidth
          multiline
          value={review}
          onChange={handleReview}
          rows={10}
        />
      </Grid>
      <Grid item>
        <Button
          variant="outlined"
          onClick={async () => {
            const response = await postRequestJwt(
              "/review",
              {
                review: review,
                user_id: user.user_id,
                post_id: post.id,
                file_ids: focusFileList,
              },
              jwt
            );
            console.log(response);
            if (response.success) {
              console.log("inside");

              setReview("");
            }
          }}
        >
          Post review
        </Button>
      </Grid>
    </Grid>
  );
};
