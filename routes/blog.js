const express = require('express');
const app = express.Router();
const Blog = require('../models/blogs');
app.get('/blogs',async(req,res)=>
{
    const blogs = await Blog.find({});
    res.render('index',{blogs});
});
app.get('/blogs/new',(req,res)=>
{
    res.render('new');
});
app.post('/blogs',async (req,res)=>
{
    const {name,about,img_url} = req.body;
    await Blog.create({name,about,img_url});
    res.redirect('/blogs');

});
app.get('/blogs/:id',async (req,res)=>
{
    const {id} = req.params;
    const blog = await Blog.findById(id);
    res.render('show',{blog});

});
app.get('/blogs/:id/edit',async (req,res)=>
{
    const {id} = req.params;
    const blog = await Blog.findById(id);
    res.render('edit',{blog});
});
app.patch('/blogs/:id',async (req,res)=>
{
    const {id} = req.params;
    const {name,about,img_url} = req.body;
    await Blog.findByIdAndUpdate(id,{name,about,img_url});
    res.redirect(`/blogs/${id}`);
});
app.delete('/blogs/:id',async (req,res)=>
{
    const {id} = req.params;
    await Blog.findByIdAndDelete(id);
    res.redirect('/blogs');
});
module.exports = app;
