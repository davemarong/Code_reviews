const Joi = require("joi");

const review = Joi.object({
  post_id: Joi.number().required(),
  user_id: Joi.number().required(),
  review: Joi.string().required(),
  file_ids: Joi.array().required(),
});

const file = Joi.object({
  name: Joi.string().required(),
  download_url: Joi.string().required(),
  api_url: Joi.string().required(),
  user_id: Joi.number().required(),
  post_id: Joi.number().required(),
});

const post = Joi.object({
  title: Joi.string().required(),
  description: Joi.string().required(),
  repo_url: Joi.string().required(),
  user_id: Joi.number().required(),
  tags: Joi.array(),
  files: Joi.array(),
});

const getById = Joi.object({
  id: Joi.number().required(),
});

module.exports = { review, file, post, getById };
