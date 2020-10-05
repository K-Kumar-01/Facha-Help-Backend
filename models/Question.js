const mongoose = require("mongoose");

const QuestionSchema = mongoose.Schema({
  q_body: {
    type: String,
    required: true,
  },
  writer_name: {
    type: String,
    required: true,
  },
  date_created: {
    type: Date,
  },
});

module.exports = mongoose.model("Question", QuestionSchema);
