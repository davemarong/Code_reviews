import React from "react";
import Card from "@mui/material/Card";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Link from "next/link";
import { AvatarCard } from "../avatarCard/AvatarCard";
import { CategoryTagsList } from "../categoryTagsList/CategoryTagsList";
import { Reactions } from "../reactions/Reactions";
interface Props {
  posts: any;
  user: any;
  jwt: string;
}
export const Posts = ({ posts, user, jwt }: Props) => {
  console.log(posts);
  return (
    <Grid container direction="row" justifyContent="center">
      {posts?.map((post: any) => {
        return (
          <Grid item xs={12} key={post.id}>
            <Card elevation={0} style={{ padding: 30 }}>
              <Link
                href={{
                  pathname: `/post/${post.id}`,
                }}
              >
                <Grid container direction="row">
                  <Grid item md={9}>
                    <AvatarCard user={post} />
                    <Grid container item>
                      <Typography variant="h4">{post.title}</Typography>
                    </Grid>
                    <Grid container item>
                      <Typography variant="h6">{post.description}</Typography>
                    </Grid>
                    <Grid
                      container
                      direction="row"
                      flexWrap="nowrap"
                      justifyContent="space-between"
                      item
                    >
                      <CategoryTagsList post={post} />
                      <Reactions jwt={jwt} post={post} user={user} />
                    </Grid>
                  </Grid>
                  <Grid
                    container
                    md={3}
                    direction="column"
                    item
                    style={{
                      borderLeft: "1px solid #D0D7DE",
                      paddingLeft: 20,
                    }}
                  >
                    {post?.file_names?.map((file: any) => {
                      return (
                        <Typography style={{ margin: 5 }} key={file}>
                          {file}
                        </Typography>
                      );
                    })}
                  </Grid>
                </Grid>
              </Link>
            </Card>
            <hr style={{ color: "#D0D7DE", margin: "0px 0 0 0" }} />
          </Grid>
        );
      })}
    </Grid>
  );
};
