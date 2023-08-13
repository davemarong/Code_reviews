import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { postRequest } from "../../utils/utils";
export const RegisterComp = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  return (
    <>
      <TextField
        onChange={(e: any) => {
          setUsername(e.target.value);
        }}
        label="Username"
      />
      <TextField
        onChange={(e: any) => {
          setPassword(e.target.value);
        }}
        label="Password"
      />
      <Button
        onClick={() => {
          postRequest("/auth/register", {
            username: username,
            password: password,
          });
        }}
        variant="contained"
      >
        Register
      </Button>
    </>
  );
};
