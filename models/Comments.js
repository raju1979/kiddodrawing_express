const mongoose = require('mongoose');

var commentSchema = mongoose.Schema({
    createdBy : {
    	type: mongoose.Schema.ObjectId,
    	required:true
    },
	feedId : {
    	type: mongoose.Schema.ObjectId,
    	required:true
    },
    stars:{
        type:String
    },
    commentText:{
        type:String,
        required:true
    },
    createdAt: {
        type: Date,
        default: Date.now
    },
    updatedAt: {
        type: Date,
        default: Date.now
    }
});

var Comment = mongoose.model('Comments', commentSchema);


module.exports= Comment;
