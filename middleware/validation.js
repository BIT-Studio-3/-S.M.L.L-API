import Joi from "joi";

const validatePostUser = (req, res, next) => {
  const userSchema = Joi.object({
    userId: Joi.string().required().messages({
      "string.base": "userId should be a string",
      "string.empty": "userId cannot be empty",
      "any.required": "userId is required",
    }),
    firstName: Joi.string().min(0).max(20).required().messages({
      "string.base": "firstName should be a string",
      "string.empty": "firstName cannot be empty",
      "string.min": "firstName should have a minimum length of {#limit}",
      "string.max": "firstName should have a maximum length of {#limit}",
      "any.required": "firstName is required",
    }),
    lastName: Joi.string().min(0).max(20).required().messages({
      "string.base": "lastName should be a string",
      "string.empty": "lastName cannot be empty",
      "string.min": "lastName should have a minimum length of {#limit}",
      "string.max": "lastName should have a maximum length of {#limit}",
      "any.required": "lastName is required",
    }),
    email: Joi.string()
      .email({ tlds: { allow: false } })
      .required()
      .messages({
        "string.base": "email should be a string",
        "string.empty": "email cannot be empty",
        "string.min": "email should have a minimum length of {#limit}",
        "string.max": "email should have a maximum length of {#limit}",
        "any.required": "email is required",
        "string.email": "",
      }),
    password: Joi.string().min(8).max(20).required().messages({
      "string.base": "password should be a string",
      "string.empty": "password cannot be empty",
      "string.min": "password should have a minimum length of {#limit}",
      "string.max": "password should have a maximum length of {#limit}",
      "any.required": "password is required",
    }),
    date: Joi.string().min(2).max(4).required().messages({
      "string.base": "date should be a string",
      "string.empty": "date cannot be empty",
      "string.min": "date should have a minimum length of {#limit}",
      "string.max": "date should have a maximum length of {#limit}",
      "any.required": "date is required",
    }),
  });

  const { error } = userSchema.validate(req.body);

  if (error) {
    return res.status(409).json({
      msg: error.details[0].message,
    });
  }

  next();
};

const validatePutUser = (req, res, next) => {
  const userSchema = Joi.object({
    userId: Joi.string().required().messages({
        "string.base": "userId should be a string",
        "string.empty": "userId cannot be empty",
        "any.required": "userId is required",
      }),
      firstName: Joi.string().min(0).max(20).required().messages({
        "string.base": "firstName should be a string",
        "string.empty": "firstName cannot be empty",
        "string.min": "firstName should have a minimum length of {#limit}",
        "string.max": "firstName should have a maximum length of {#limit}",
        "any.required": "firstName is required",
      }),
      lastName: Joi.string().min(0).max(20).required().messages({
        "string.base": "lastName should be a string",
        "string.empty": "lastName cannot be empty",
        "string.min": "lastName should have a minimum length of {#limit}",
        "string.max": "lastName should have a maximum length of {#limit}",
        "any.required": "lastName is required",
      }),
      email: Joi.string()
        .email({ tlds: { allow: false } })
        .required()
        .messages({
          "string.base": "email should be a string",
          "string.empty": "email cannot be empty",
          "string.min": "email should have a minimum length of {#limit}",
          "string.max": "email should have a maximum length of {#limit}",
          "any.required": "email is required",
          "string.email": "",
        }),
      password: Joi.string().min(8).max(20).required().messages({
        "string.base": "password should be a string",
        "string.empty": "password cannot be empty",
        "string.min": "password should have a minimum length of {#limit}",
        "string.max": "password should have a maximum length of {#limit}",
        "any.required": "password is required",
      }),
      date: Joi.string().min(2).max(4).required().messages({
        "string.base": "date should be a string",
        "string.empty": "date cannot be empty",
        "string.min": "date should have a minimum length of {#limit}",
        "string.max": "date should have a maximum length of {#limit}",
        "any.required": "date is required",
      }),
  }).min(1); // Ensure at least one field is being updated

  const { error } = userSchema.validate(req.body);

  if (error) {
    return res.status(409).json({
      msg: error.details[0].message,
    });
  }

  next();
};

export { validatePostUser, validatePutUser };
