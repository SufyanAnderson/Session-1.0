const mongoose = require("mongoose");

const PostSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  image: {
    type: String,
    require: true,
  },
  cloudinaryId: {
    type: String,
    require: true,
  },
  caption: {
    type: String,
    required: true,
  },
  requests: {
    type: Array,
    required: true,
  },
  level: {
    type: String,
    required: true
  },
  accepted: {
    type: Array
  },
  admin: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
  },
 createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Post", PostSchema);
