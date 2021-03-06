import mongoose from "mongoose";

const CommentSchema = mongoose.Schema({
    text:{
        type: String,
        required: "Text is requied"
    },
    createdAt:{
        type: Date,
        default: Date.now
    }
//     ,
//     video: {
//         type: mongoose.Schema.Types.ObjectId,
//         ref: "Video"
//     }
});

const model = mongoose.model("Comment",CommentSchema);

export default model;