import mongoose from 'mongoose'

const postSchema = mongoose.Schema({
    userId:{
        type: mongoose.Schema.Types.ObjectId, 
        ref:'UserModel'
    },
    title : String,
    message : String,
    creator : String,
    tag : [String],
    selectedFile : String,
    likeCount : {
        type : Number,
        default : 0
    },
    createdAt : {
        type : Date,
        default : new Date()
    },


});



const PostMessage = mongoose.model('PostMessage' , postSchema);


export default PostMessage;