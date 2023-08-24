

const mongoose = require('mongoose');

const blogSchema = new mongoose.Schema({

    name:{
        type:String,
        trim:true
    },
    about:{
        type:String,
        trim:true
    },
    img_url:{
        type:String,
    },
  
});

const Blog = mongoose.model('Blog',blogSchema);

module.exports = Blog;