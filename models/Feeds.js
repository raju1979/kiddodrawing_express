const mongoose = require('mongoose');

var feedSchema = mongoose.Schema({
    createdBy : {
    	type: mongoose.Schema.ObjectId,
    	required:true
    },
	imgBaseString : {
    	type:String,
    	required:true
    },
    feedTitle : {
      	type:String,
      	required:true
      },
    feedKeywords:{
        type:String
    },
    feedDescription:{
        type:String
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

var Feed = mongoose.model('Feeds', feedSchema);


module.exports= Feed;
