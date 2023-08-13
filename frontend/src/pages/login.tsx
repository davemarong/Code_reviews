import LoginComp from "@/components/login/LoginComp";
import Nav from "@/components/nav/Nav";
import React from "react";

interface Props {
  jwt: string;
  user: any;
  githubProfile: any;
  isLogged: boolean;
}
const login = ({ isLogged }: Props) => {
  return (
    <div>
      <Nav isLogged={isLogged} />
      <LoginComp />
    </div>
  );
};

export default login;
