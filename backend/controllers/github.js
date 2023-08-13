const axios = require("axios");
const jwt = require("jsonwebtoken");
const sequelize = require("../models/sequelize");

const getRepos = async (req, res) => {
  console.log("inside repos");
  const { base_url, options } = req;

  const url = base_url + "user/repos";
  const response = await axios.get(url, options);
  console.log(response.data);

  res.send(response.data);
};
const getRepoContent = async (req, res) => {
  const { base_url, options } = req;
  const { name: username } = req.user;
  const { repo_name } = req.params;

  const url = base_url + `repos/${username}/${repo_name}/contents`;
  console.log(url);
  const response = await axios.get(url, options);
  res.json(response.data);
};
const getRepoFolderContent = async (req, res) => {
  const { url } = req.body;
  const { options } = req;

  console.log(url);
  const response = await axios.get(url, options);
  res.json(response.data);
};

const getUser = async (req, res) => {
  console.log("inside user");

  const url = req.base_url + "user";
  const response = await axios.get(url, req.options);
  console.log(response.data);

  res.send(response.data);
};
module.exports = {
  getRepos,
  getUser,
  getRepoContent,
  getRepoFolderContent,
  // getRepo,
};
