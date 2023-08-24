
const mongoose = require('mongoose');
const blog = require('./models/blogs');

const blogsData = [
    {
        name:'Ashish Sengar',
        about:'My name is Ashish Sengar',
        img_url:"https://drive.google.com/file/d/10-hARW8Yl55yhTzvXuCiBz6Y9Z8dtwuC/view?usp=drive_link"

    }

];

async function seed()
{
    await blog.insertMany(blogsData);
}


module.exports = seed;