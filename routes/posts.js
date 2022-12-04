const express = require("express");
const router = express.Router();
const upload = require("../middleware/multer");
const postsController = require("../controllers/posts");
const uploadController = require("../controllers/upload");
const { ensureAuth, ensureGuest } = require("../middleware/auth");
const storage = require('../middleware/multer');
const cloudinary = require('../middleware/cloudinary');





//Post Routes - simplified for now
router.get("/:id", ensureAuth, postsController.getPost);
router.post("/uploadVideo", upload.single("file"), uploadController.uploadVideo)
router.post("/createPost", upload.single("file"), postsController.createPost);
router.post('/uploadVideo', storage.single('file'), uploadController.uploadVideo);

router.put("/joinPost/:id", postsController.joinPost);

router.put("/acceptRequest/:id", postsController.acceptRequest);

router.put("/denyRequest/:id", postsController.denyRequest);

router.delete("/deletePost/:id", postsController.deletePost);

module.exports = router;
