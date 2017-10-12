const mongoose = require('mongoose');

var bookSchema = mongoose.Schema({
    package_id : {
    	type:String,
    	required:true
    },
	poster : {
    	type:String,
    	required:true
    },
	title : {
    	type:String,
    	required:true
    },
	title_hindi : {
    	type:String,
	},
    language : {
        type:String,
    },
    free : {
        type:String,
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

var Book = mongoose.model('Books', bookSchema);


module.exports= Book;
