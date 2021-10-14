//init code
const router = require('express').Router();
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const {check, validationResult} = require('express-validator');
const Posts = require('./../models/posts');

//middleware setup
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

//router
router.all(
    '/',
    function(req,res){
        return res.json({
            status: true,
            message: 'User contoller working...'
        })
    }
)

router.post(
    '/createNew',
    [
        check('threadname').not().isEmpty().trim().escape(),
        check('content').not().isEmpty().trim().escape(),
        check('userOfPost').not().isEmpty().trim().escape()
    ],
    function(req,res){
        //check validations
        const errors = validationResult(req);
        if(!errors.isEmpty()){
            return res.json({
                status: false,
                message: 'Form validation error.',
                errors: errors.array()
            })
        }


    //create new user model
    var temp = new Posts({
        threadname: req.body.threadname,
        content: req.body.content,
        userOfPost: req.body.userOfPost
    });

    //insert data into data base
    temp.save(function(error,ok){
        //check error
        if(error){
            return res.json({
                status: false,
                message: 'DB Insert fail....',
                error: error
            });
        }
        //ok
        return res.json({
            status: true,
            message: 'DB insert success',
            result: ok
        });
    });

});

router.post(
    '/get_thread_data',
    function(req,res){
        //find user document
        Posts.find({threadname: req.body.thread_name},function(error,ok){
            if(error){
            return res.json({
                status: false,
                message: 'DB User Find Fail',
                error: error
            });
        }
        //ok
        return res.json({
            status: true,
            message: 'DB Find success',
            result: ok
        })

    });

    });

module.exports = router;
