import React from "react";
import Typography from "@mui/material/Typography";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Button from "@mui/material/Button";
import { addProgrammingLanguagesToRepos, fetchGithubData } from "@/utils/utils";
import axios from "axios";
import Table from "@mui/material/Table";
import Container from "@mui/material/Container";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { component_topBottom_margin } from "@/config/consts";

interface Props {
  repos: any;
  setRepo: any;
  githubTree: any;
  setGithubTree: any;
  user: any;
  accessToken: string;
  jwt: string;
}
const RepoList = ({
  repos,
  accessToken,
  setRepo,
  setGithubTree,
  user,
  jwt,
  githubTree,
}: Props) => {
  return (
    <TableContainer
      style={{
        overflow: "scroll",
        height: 300,
        // border: "1px solid #D0D7DE",
      }}
    >
      <Table
        sx={{ minWidth: 650 }}
        stickyHeader
        aria-label="simple table"
        size="small"
      >
        <TableHead>
          <TableRow>
            <TableCell>Repository name</TableCell>
            <TableCell>Last update</TableCell>
            <TableCell>Main Programming language</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {repos?.map((repo: any) => (
            <TableRow
              onClick={async () => {
                setRepo(repo);
                const { data } = await fetchGithubData(
                  jwt,
                  `/github/repo/${repo.name}`
                );
                setGithubTree([
                  ...githubTree,
                  { title: repo.name, tree: data },
                ]);
              }}
              hover
              key={repo.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {repo.name}
              </TableCell>
              <TableCell>{repo.language}</TableCell>
              <TableCell>{repo.updated_at}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default RepoList;
