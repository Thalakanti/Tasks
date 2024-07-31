const joi = require("joi");

function validation(user) {
  const Schema = joi.object({
    title: joi.string().min(5).max(50).required(),
    date: joi.date().required(),
    description: joi.string().min(10).max(100),
  });

  return Schema.validate(user);
}

module.exports = { validation };
