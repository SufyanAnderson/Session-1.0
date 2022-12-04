const Upload = require('../models/upload');
const cloudinary = require('../middleware/cloudinary');
const { ObjectID } = require('mongodb');
const upload = require('../models/upload');



exports.getTeam = async (req, res) => {
    try {
     //  const post = await Post.find({ _id: req.params.id });
    console.log(req.user.group._id, 'testing')
     const uploads = await Upload.find({ user: ObjectID(req.user.group) });
     const uploadUrls = await Upload.findById(req.params.id);
    console.log(uploadUrls)
     console.log(uploads, 'uploads')   
     res.render("team.ejs", { accepted: req.user.group.accepted, uploads: uploads, uploadUrls  });
    } catch (err) {
      console.log(err);
    }
  },

  exports.getRoom = (req,res) => {
    res.render("chat.ejs")
  },

exports.uploadVideo = (req, res) => {
    cloudinary.uploader.upload(req.file.path,
        {
            resource_type: "video",
            folder: "video",
          },
        
        (err, result) => {
        if (err) {
            console.log(err);
            return res.status(500).send(err);
        }
        var upload = new Upload({
            name: req.file.originalname,
            url: result.url,
            cloudinary_id: result.public_id,
            description: req.body.description,
            group: req.params.id, 
            user: req.user.group
        });
        upload.save((err, result) => {
            if (err) {
                console.log(err);
                return res.status(500).send(err);
            }
            return res.status(200).send(result);
        }
        );
        
    }
    );
}