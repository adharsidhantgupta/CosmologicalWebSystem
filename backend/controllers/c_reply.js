//init code
const router = require('express').Router();
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const {check, validationResult} = require('express-validator');
const Reply = require('./../models/reply');

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
        check('postname').not().isEmpty().trim().escape(),
        check('content').not().isEmpty().trim().escape(),
        check('userOfreply').not().isEmpty().trim().escape()
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
        postname: req.body.postname,
        content: req.body.content,
        userOfreply: req.body.userOfPost
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

module.exports = router;