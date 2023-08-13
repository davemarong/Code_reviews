import React from "react";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import ArrowBackIosRoundedIcon from "@mui/icons-material/ArrowBackIosRounded";
export const Back = () => {
  const router = useRouter();

  return (
    <Button
      startIcon={<ArrowBackIosRoundedIcon />}
      style={{ width: 40 }}
      onClick={() => router.back()}
      variant="text"
    >
      Back
    </Button>
  );
};
