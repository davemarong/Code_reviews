import React, { useState, useEffect } from "react";
import FavoriteEmptyIcon from "@mui/icons-material/FavoriteBorder";
import FavoriteRoundedIcon from "@mui/icons-material/FavoriteRounded";
interface Props {
  post: any;
  user: any;
}
export const useLikedPost = ({ post, user }: Props) => {
  const HearthIcons = {
    empty: { label: "empty", icon: <FavoriteEmptyIcon /> },
    full: { label: "full", icon: <FavoriteRoundedIcon /> },
  };
  const [hearthIcon, setHearthIcon] = useState(HearthIcons.empty);

  const hasUserLikedPost = (user_id: number, likes_ids: any) => {
    if (likes_ids?.includes(user_id)) {
      setHearthIcon(HearthIcons.full);
    }
  };
  const handleToggleLike = () => {
    if (hearthIcon.label === HearthIcons.empty.label) {
      setHearthIcon(HearthIcons.full);
    } else {
      setHearthIcon(HearthIcons.empty);
    }
  };
  useEffect(() => {
    console.log(post);
    if (user) {
      hasUserLikedPost(post.votes_user_id, user.user_id);
    }
  }, [post, user]);
  return [hearthIcon, handleToggleLike];
};
