//init code
const router = require('express').Router();
const bodyParser = require('body-parser');
const bcrypt = require('bcryptjs');
const {check, validationResult} = require('express-validator');
const User = require('./../models/user_data');

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
        check('username').not().isEmpty().trim().escape(),
        check('email').isEmail().normalizeEmail(),
        check('password').not().isEmpty().trim().escape(),
        check('country').not().isEmpty().trim().escape()
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

        //hash password code
        const hashedPassword = bcrypt.hashSync(req.body.password,10);
        //output data to user

    //create new user model
    var temp = new User({
        username: req.body.username,
        email: req.body.email,
        password: hashedPassword,
        country: req.body.country
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
    "/login",
    [
        check("password").not().isEmpty().trim().escape(),
        check("email").isEmail().normalizeEmail(),
    ],
    function (req, res) {
        //check validations
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.json({
                status: false,
                message: "Form validation error.",
                errors: errors.array(),
            });
        }

        User.findOne({email:req.body.email},
            function(error,ok){
                //check error
                if(error){
                    return res.json({
                        status: false,
                        message: "Form validation error.",
                        errors: error
                    });
                }
                //result is empty or not
                if(ok){
                    const isMatch = bcrypt.compareSync(req.body.password,ok.password);

                    //check password is match
                    if(isMatch){
                        //password matched
                        return res.json({
                            status: true,
                            message: 'User login Success...',
                            result: ok
                        });
                    }
                    else
                    {
                        return res.json({
                            status: false,
                            message: 'password not match Login fail',
                        });
                    }
                }
                else{
                    //email is empty
                    return res.json({
                        status: false,
                        message: 'user d\'nt exit'
                    });
                }
            });
    });

router.post(
    '/getuserdata',
    function(req,res){
        //find user document
        User.find({username: req.body.username},{password: 0},function(error,ok){
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