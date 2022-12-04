const mongoose = require("mongoose"); 

const UploadSchema = new mongoose.Schema({ 
    name:  {
        type: String,
        required: true,
    },
    url:  {
        type: String,
        required: true,
    },
    cloudinary_id: String, 
    user: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    group: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Post"
    } 
})


var UploadModel;

// if (mongoose.models.UploadModel) {
//   UploadModel = mongoose.models.UploadModel
// } else {
//   UploadModel = mongoose.model('Upload', UploadSchema);
// }

module.exports = mongoose.models.UploadModel || mongoose.model("Upload", UploadSchema);

// module.exports = mongoose.model("Upload", UploadSchema);