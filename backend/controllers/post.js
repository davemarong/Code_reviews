const sequelize = require("../models/sequelize");
const db_lk_post_subject = require("../models/lk_post_subject");
const db_subject = require("../models/subject");
const db_review = require("../models/review");
const db_reaction = require("../models/reaction");
const db_file = require("../models/file");
const db_vote = require("../models/vote");
const utils = require("./utils");
const db_post = require("../models/post");
const getPosts = async (req, res) => {
  let data = await db_post.getPosts();

  // Transform arraystrings to regular arrays
  data = utils.splitStringToArray(data, "subject_names");
  data = utils.splitStringToArray(data, "review_ids");
  data = utils.splitStringToArray(data, "reaction_ids");
  data = utils.splitStringToArray(data, "file_names");
  data = utils.splitStringToArray(data, "votes_user_id");

  // Transform arrays with strings to arrays with integers
  data = utils.turnArrayValuesToInt(data, "review_ids");
  data = utils.turnArrayValuesToInt(data, "reaction_ids");
  data = utils.turnArrayValuesToInt(data, "votes_user_id");

  res.json(data);
};

const createPost = async (req, res) => {
  const { title, description, repo_url, user_id, tags, files } = req.body;

  const post_id = await db_post.createPost(
    title,
    description,
    repo_url,
    user_id
  );
  const fileValues = files.map((file) => {
    return [
      file.name,
      file.download_url,
      file.api_url,
      user_id,
      post_id,
      file.html_url,
    ];
  });
  const filesData = await db_file.createFiles(fileValues);
  console.log(filesData);
  const allSubjects = await db_subject.getSubjects();
  let Subject_Enum = {};
  allSubjects.forEach((subject) => {
    Subject_Enum = { ...Subject_Enum, [subject.name]: subject.id };
  });
  const tagsIdsValues = tags.map((tag) => {
    return [post_id, Subject_Enum[tag]];
  });
  const data = await db_lk_post_subject.createPostSubject(tagsIdsValues);
  res.sendStatus(200);
};
const getPostById = async (req, res) => {
  // console.log(id);
  console.log(req.params.id.length);
  if (req.params.id === "undefined") {
    // something here to handle error
    console.log("inside");
    res.sendStatus(404);
    return;
  }
  const { id } = req.params;

  let post = await db_post.getPostById(id);
  console.log(post);
  let reviews = await db_review.getReviewsFromPost(id);
  const reactions = await db_reaction.getReactionsFromPost(id);
  const reaction_count = await db_reaction.getReactionsCount(id);
  const focusFiles = await db_file.getFiles(id);
  const votes = await db_vote.getVotesFromPost(id);
  const votes_count = await db_vote.countVotesFromPost(id);

  // Transform arraystrings to regular arrays
  post = utils.splitStringToArray(post, "subject_names");
  post = utils.splitStringToArray(post, "review_ids");
  post = utils.splitStringToArray(post, "reaction_ids");
  post = utils.splitStringToArray(post, "file_names");
  post = utils.splitStringToArray(post, "votes_user_id");
  reviews = utils.splitStringToArray(reviews, "focus_files");

  // Transform arrays with strings to arrays with integers
  post = utils.turnArrayValuesToInt(post, "review_ids");
  post = utils.turnArrayValuesToInt(post, "reaction_ids");
  post = utils.turnArrayValuesToInt(post, "votes_user_id");

  const data = {
    post: post[0],
    reviews: reviews,
    reactions: reactions,
    reaction_count: reaction_count[0],
    focusFiles: focusFiles,
    votes: votes,
    votes_count: votes_count,
  };
  console.log(reviews);
  res.json(data);
};
module.exports = { getPosts, createPost, getPostById };
