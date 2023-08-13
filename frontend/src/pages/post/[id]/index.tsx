import React, { useEffect, useState } from "react";
import { useRouter } from "next/router";
import Typography from "@mui/material/Typography";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
import Nav from "@/components/nav/Nav";
import { CreateReview } from "@/components/createReview/CreateReview";
import useFetchData from "@/components/customHooks/useFetchData";
import ThumbUpAltOutlinedIcon from "@mui/icons-material/ThumbUpAltOutlined";
import SentimentSatisfiedRoundedIcon from "@mui/icons-material/SentimentSatisfiedRounded";
import FavoriteEmptyIcon from "@mui/icons-material/FavoriteBorder";
import { SplitScreen1to4 } from "@/components/SplitScreen1to4/SplitScreen1to4";
import { FocusFileList } from "@/components/focusFilesList/FocusFileList";
import { AvatarCard } from "@/components/avatarCard/AvatarCard";
import { CategoryTagsList } from "@/components/categoryTagsList/CategoryTagsList";
import { Reactions } from "@/components/reactions/Reactions";
import { Reviews } from "@/components/reviews/Reviews";
import { ChooseFocusFiles } from "@/components/chooseFocusFiles/ChooseFocusFiles";
import { CloneRepo } from "@/components/cloneRepo/CloneRepo";
import { LoginPrompt } from "@/components/loginPrompt/LoginPrompt";

interface Props {
  isLogged: boolean;
  user: any;
  jwt: string;
}
const Post = ({ isLogged, user, jwt }: Props) => {
  const [reactionsCount, setReactionsCount] = useState({
    Smiley: 0,
    Hearth: 0,
    Star: 0,
    ThumbsUp: 0,
  });
  const [focusFileList, setFocusFileList] = useState([]);

  const router = useRouter();
  const id = router.query.id as string;

  const [data, loading] = useFetchData({ query: `/post/${id}` });

  let {
    post = {},
    reviews = [],
    reactions = [],
    reaction_count = {},
    focusFiles = [],
    votes = [],
    votes_count = {},
  } = data;

  console.log(post);
  console.log(votes_count);
  const reactionsIcons = [
    // { icon: <EmojiEmotionsRoundedIcon />, name: "smiley" },
    // { icon: <StarRoundedIcon />, name: "Star" },
    { icon: <ThumbUpAltOutlinedIcon />, name: "thumbsUp" },
    { icon: <SentimentSatisfiedRoundedIcon />, name: "smiley" },
    { icon: <FavoriteEmptyIcon />, name: "hearth" },
  ];
  return (
    <>
      <Nav isLogged={isLogged} />
      <SplitScreen1to4
        left={
          <FocusFileList focusFiles={focusFiles}>
            <CloneRepo repo_url={post.repo_url} />
          </FocusFileList>
        }
        right={
          <>
            <AvatarCard user={post} />
            <Stack
              direction="row"
              alignItems="flex-end"
              justifyContent="space-between"
              marginBottom={10}
            >
              <CategoryTagsList post={post} />
              <Typography variant="h5">{post?.title}</Typography>
              <Reactions post={post} jwt={jwt} user={user} />
            </Stack>
            <Typography>{post?.description}</Typography>
          </>
        }
        leftPadding={40}
        rightPadding={40}
      />
      <Reviews reviews={reviews} focusFiles={focusFiles} />
      {/* {reactionsIcons?.map((reaction: any) => {
        return (
          <IconButton key={reaction.name} color="secondary">
            {reaction.icon}
            {reaction_count[reaction.name]}
          </IconButton>
        );
      })} */}
      {isLogged ? (
        <SplitScreen1to4
          left={
            <ChooseFocusFiles
              focusFiles={focusFiles}
              setFocusFileList={setFocusFileList}
            />
          }
          right={
            <CreateReview
              post={post}
              jwt={jwt}
              user={user}
              focusFileList={focusFileList}
            />
          }
          border={false}
        />
      ) : (
        <LoginPrompt>Log in to write a review</LoginPrompt>
      )}
    </>
  );
};
export default Post;
