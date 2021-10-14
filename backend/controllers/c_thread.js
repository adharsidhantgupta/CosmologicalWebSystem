//init code
const router = require('express').Router();
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const {check, validationResult} = require('express-validator');
const Thread = require('./../models/thread');


//middleware setup
router.use(bodyParser.json());
router.use(bodyParser.urlencoded({extended: true}));

//router

//default routers
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
        check('thread_name').not().isEmpty().trim().escape(),
        check('thread_user').not().isEmpty().trim().escape()
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
    var temp = new Thread({
        thread_name: req.body.thread_name,
        thread_user: req.body.thread_user
    });

    //insert data into data base
    temp.save(function(error,ok){
        //check error
        if(error){
            return res.json({
                status: false,
                message: 'Name not unique',
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
    '/getdata',
    function(req,res){
        //find user document
        Thread.find({},function(error,ok){
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