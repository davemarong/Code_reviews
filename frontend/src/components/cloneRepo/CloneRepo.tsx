import React, { useState } from "react";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import ContentCopyRoundedIcon from "@mui/icons-material/ContentCopyRounded";
interface Props {
  repo_url: string;
}
export const CloneRepo = ({ repo_url }: Props) => {
  const ButtonTextEnum = {
    default: "Clone repo",
    copied: "Copied!",
  };
  const [buttonText, setButtonText] = useState(ButtonTextEnum.default);
  const handleCopyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setButtonText(ButtonTextEnum.copied);
    setInterval(() => {
      setButtonText(ButtonTextEnum.default);
    }, 2000);
  };
  return (
    <div>
      <Button
        variant="contained"
        endIcon={
          buttonText === ButtonTextEnum.default ? (
            <ContentCopyRoundedIcon />
          ) : null
        }
        onClick={() => {
          handleCopyToClipboard(repo_url + ".git");
        }}
      >
        {buttonText}
      </Button>
    </div>
  );
};
