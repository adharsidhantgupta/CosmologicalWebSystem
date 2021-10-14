require('dotenv').config();
const express = require('express');
const morgan = require('morgan');
const cors = require('cors');
const app = express();
const port = process.env.PORT;
const database = require('./database');
//Controllers call
const userData =require('./controllers/c_user_data');
const userStats =require('./controllers/c_user_stats');
const threads =require('./controllers/c_thread');
const posts =require('./controllers/c_posts');
const reply =require('./controllers/c_reply');

app.use(morgan('dev'));
app.use(cors());
app.use('/project/Newuser',userData);
app.use('/project/Userstats',userStats);
app.use('/project/threads',threads);
app.use('/project/posts',posts);
app.use('/project/reply',reply);
//defaults routes
app.all(
    '/',
    function(req,res){
        return res.json({
            status: true,
            message: 'Index page working...'
        });
    }
)

// start server
app.listen(port,function(){
    console.log('Server running at port: ' + port);
});