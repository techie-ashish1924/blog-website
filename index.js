const express = require('express');
const mongoose = require('mongoose');
const Seed = require('./seed');
const ejsMate = require('ejs-mate');
const methodOverride = require('method-override');
const path = require('path');
const app = express();
const blogRoutes = require('./routes/blog');


const db = 'mongodb+srv://ashishsengar895488:AgtL0d183QGvY4YO@cluster0.7c2er2g.mongodb.net/?retryWrites=true&w=majority'

mongoose.connect(db).then(()=>
{
    console.log('db connected');
})
.catch((err)=>
{
    console.log(err);
});

app.engine('ejs',ejsMate);
app.set('view engine','ejs');
app.set('views',path.join(__dirname,'views'));

app.use(express.urlencoded({extended:true}));
app.use(express.static(path.join(__dirname,'public')));

app.use(methodOverride('_method'));
app.use(blogRoutes);


// Seed().then(()=>console.log('Data Seeded'))
// .catch(()=>console.log('error'));




app.get('/',(req,res)=>
{
    res.send('Server start')
})








app.listen(2500,()=>
{
    console.log('server is started at 2500 port');
})