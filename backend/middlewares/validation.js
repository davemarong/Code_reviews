const validate = (schema) => {
  return (req, res, next) => {
    const { error, value } = schema.validate(req.body);
    if (error) {
      console.log(error);
      console.log(JSON.stringify(error));
      return res.json(error);
    } else {
      next();
    }
  };
};

module.exports = { validate };
