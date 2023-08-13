import Nav from "@/components/nav/Nav";
import React, { useState, useEffect } from "react";
import Grid from "@mui/material/Grid";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import RepoList from "@/components/repoList/RepoList";
import { GithubTree } from "@/components/githubTree/GithubTree";
import { Breadcrumb } from "@/components/breadcrumb/Breadcrumb";
import { SelectTags } from "@/components/selectTags/SelectTags";
import { TextFields } from "@/components/CreatePostForm/TextFields";
import { tags_collection } from "@/config/consts";
import { SubmitButton } from "@/components/CreatePostForm/SubmitButton";
import { HighlightFiles } from "@/components/highlightFiles/HighlightFiles";
import Divider from "@mui/material/Divider";
import useFetchDataJwt from "@/components/customHooks/useFetchDataJwt";

interface Props {
  isLogged: boolean;
  accessToken: string;
  user: any;
  jwt: string;
  githubProfile: any;
}
const Create_post = ({ accessToken, user, jwt, isLogged }: Props) => {
  const [repos, loading] = useFetchDataJwt({
    query: `/github/repos`,
    jwt: jwt,
  });

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [repo, setRepo] = useState<any>({ repo_languages: {} });
  const [tags, setTags] = useState<any>([]);
  const [tagValue, setTagValue] = useState("");
  const [githubTree, setGithubTree] = useState<any>([
    { title: "Repositories", tree: repos },
  ]);
  const [tagsCollection, setTagsCollection] = useState(tags_collection);
  const [highlightFiles, setHighlightFiles] = useState<any>([]);
  const [fileLimitMessage, setFileLimitMessage] = useState(true);
  // useEffect(() => {
  //   setTitle(repo?.name);
  //   setDescription()
  // }, [repo]);
  console.log(githubTree);
  const repoListProps = {
    repos: repos,
    accessToken: accessToken,
    setRepo: setRepo,
    user: user,
    jwt: jwt,
    setGithubTree: setGithubTree,
    githubTree: githubTree,
  };

  const selectTagsProps = {
    setTags: setTags,
    tags: tags,
    setTagsCollection: setTagsCollection,
    tagsCollection: tagsCollection,
    setTagValue: setTagValue,
    tagValue: tagValue,
  };

  const textFieldsProps = {
    repo: repo,
    title: title,
    setTitle: setTitle,
    setDescription: setDescription,
  };
  const submitButtonProps = {
    title: title,
    description: description,
    tags: tags,
    repo: repo,
    user: user,
    jwt: jwt,
    highlightFiles: highlightFiles,
  };
  console.log(highlightFiles);
  return (
    <>
      <Nav isLogged={isLogged} />
      <Container
        maxWidth="md"
        style={{
          border: "1px solid #D0D7DE",
          borderRadius: 6,
          padding: 0,
        }}
      >
        <Grid container>
          <Grid item xs={12}>
            <Typography align="center" variant="h6">
              Create Post
            </Typography>
          </Grid>
          <Breadcrumb githubTree={githubTree} setGithubTree={setGithubTree} />
          <Grid container justifyContent="center" item xs={12}>
            {highlightFiles.length >= 5 ? (
              <Typography variant="h6" align="center">
                Maximum limit of 5 focus files
              </Typography>
            ) : githubTree.length > 1 ? (
              <GithubTree
                githubTree={githubTree}
                setGithubTree={setGithubTree}
                setHighlightFiles={setHighlightFiles}
                highlightFiles={highlightFiles}
                accessToken={accessToken}
                jwt={jwt}
              />
            ) : (
              <RepoList {...repoListProps} />
            )}
          </Grid>
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <HighlightFiles
            setHighlightFiles={setHighlightFiles}
            highlightFiles={highlightFiles}
          ></HighlightFiles>
          <Grid item xs={12}>
            <Divider />
          </Grid>

          <TextFields {...textFieldsProps} />
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <SelectTags {...selectTagsProps} />
          <Grid item xs={12}>
            <Divider />
          </Grid>
          <SubmitButton {...submitButtonProps}>Submit post</SubmitButton>

          <Button>Clone repo</Button>

          {/* <ul>
          <li>Cloning the project/file with one button</li>
          <li>like/comment reviews</li>
          <li>writer level/years experience in each topic</li>
          <li></li>
        </ul> */}
        </Grid>
      </Container>
    </>
  );
};

export default Create_post;
