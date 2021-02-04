const mongoose = require("mongoose");

const TestEntity = mongoose.Schema({
  string_val1: {
    type: String,
    required: true,
    unique: true,
  },
  int_val1: {
    type: Number,
    required: true,
    unique: true,
  },
  mail_test: {
    type: String,
    required: true,
    unique: true,
    match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
  },
});

module.exports = mongoose.model("testEntitiy", TestEntity);
