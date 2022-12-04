const mongoose = require("mongoose");

const commentSchema = new mongoose.Schema({
  comment: {
    type: String,
    required: true,
  }, 
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
  commentFor: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "POST",
  },
    createdAt: {
     type: Date,
     default: Date.now,
   },
 });

module.exports = mongoose.model("Comment", commentSchema);
