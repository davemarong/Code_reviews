import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import FolderRoundedIcon from "@mui/icons-material/FolderRounded";
import InsertDriveFileOutlinedIcon from "@mui/icons-material/InsertDriveFileOutlined";
import ArrowForwardIosRoundedIcon from "@mui/icons-material/ArrowForwardIosRounded";
import Checkbox from "@mui/material/Checkbox";
import Button from "@mui/material/Button";
import { fetchGithubData, fetchRepoContent } from "@/utils/utils";
import axios from "axios";
import { component_topBottom_margin } from "@/config/consts";

interface Props {
  githubTree: any;
  setGithubTree: any;
  accessToken: string;
  setHighlightFiles: any;
  highlightFiles: any;
  jwt: string;
}
export const GithubTree = ({
  githubTree,
  setGithubTree,
  accessToken,
  setHighlightFiles,
  highlightFiles,
  jwt,
}: Props) => {
  const githubTreeLength = githubTree.length - 1;

  const toggleFocusFiles = (event: any, item: any) => {
    if (event.target.checked) {
      setHighlightFiles([
        ...highlightFiles,
        {
          name: item.name,
          download_url: item.download_url,
          api_url: item.url,
          html_url: item.html_url,
        },
      ]);
    } else {
      setHighlightFiles(
        highlightFiles.filter(
          (file: any) => item.download_url != file.download_url
        )
      );
    }
  };
  return (
    <TableContainer style={{ overflow: "scroll", height: 300 }}>
      <Table
        sx={{ minWidth: 650 }}
        stickyHeader
        aria-label="simple table"
        size="small"
      >
        <TableHead>
          <TableRow>
            <TableCell></TableCell>
            <TableCell>Name</TableCell>
            <TableCell>Select</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {githubTree?.[githubTreeLength]?.tree?.map((item: any) => {
            return (
              <TableRow key={item.name}>
                <TableCell component="th" scope="row">
                  {item.type === "file" ? (
                    <InsertDriveFileOutlinedIcon />
                  ) : (
                    <FolderRoundedIcon />
                  )}
                </TableCell>
                <TableCell>{item.name}</TableCell>
                <TableCell>
                  {item.type === "file" ? (
                    <Checkbox
                      onChange={(e) => {
                        toggleFocusFiles(event, item);
                      }}
                    />
                  ) : (
                    <Button
                      variant="outlined"
                      endIcon={<ArrowForwardIosRoundedIcon />}
                      onClick={async () => {
                        const { data } = await fetchRepoContent(
                          jwt,
                          `/github/repo/${githubTree[githubTreeLength].title}/folder`,
                          item.url
                        );
                        setGithubTree([
                          ...githubTree,
                          { title: item.name, tree: data },
                        ]);
                      }}
                    >
                      Open
                    </Button>
                  )}
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
