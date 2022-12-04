const Post = require("../models/Post");

module.exports = {
  getIndex: (req, res) => {
    res.render("home.ejs");
  },
  getRoom: (req,res) => {
    res.render("chat.ejs")
  },
  getChat: async (req,res) => {
    try {
      const posts = await Post.find().sort({ createdAt: "desc" }).lean();
      console.log(posts, 'debugging')
      res.render("index.ejs", { posts, user: req.user });
    } catch (err) {
      console.log(err);
    }
  }
};
