const Joi = require("joi");

// ✅ Schema for create (POST)
const create = Joi.object({
    name: Joi.string().min(2).max(30).required(),
    age: Joi.number().min(18).max(100).required(),
    city: Joi.string().min(2).max(50).required(),
    course: Joi.string().min(2).max(50).required()
});

// ✅ Schema for update (PUT) – all optional
const update = Joi.object({
    name: Joi.string().min(2).max(30),
    age: Joi.number().min(1).max(100),
    city: Joi.string().min(2).max(50),
    course: Joi.string().min(2).max(50)
});

module.exports = { create, update };
