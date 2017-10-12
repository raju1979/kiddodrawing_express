const mongoose = require('mongoose');

var userSchema = mongoose.Schema({
    name : {
    	type:String,
    	required:true
    },
	dob : {
    	type:Date,
    	required:true
    },
	password : {
    	type:String,
    	required:true
    },
    email : {
        type:String,
        required:true
    },
	location : {
    	type:String,
	},
  avatarImg:{
    type:String,
  },
    signkey : {
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

var User = mongoose.model('Users', userSchema);


module.exports= User;
