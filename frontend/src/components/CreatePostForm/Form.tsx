import React from "react";

interface Props {
  repoList: any;
  selectTags: any;
  submitButton: any;
  textFields: any;
}
export const Form = ({
  repoList,
  selectTags,
  submitButton,
  textFields,
}: Props) => {
  return (
    <>
      {repoList}
      {selectTags}
      {submitButton}
      {textFields}
    </>
  );
};
