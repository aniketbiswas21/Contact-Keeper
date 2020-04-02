const express =require('express');
const router= express.Router();
const User =require('../models/User');
const jwt= require('jsonwebtoken');
const bcrypt =require('bcryptjs');
const config= require('config');
const { check, validationResult } = require('express-validator');

//@route    POST api/users
//@desc     Register a user
//@access   Public
router.post('/',[
    check('name', 'name is required').not().isEmpty(),
    check('email', 'Please include a valid Email').isEmail(),
    check('password', 'Please enter a password with 6 or more characters').isLength({
        min: 6
    })
] ,async (req, res)=> {const errors =validationResult(req);
                    if(!errors.isEmpty()){
                        return res.status(400).json({errors: errors.array()});
                    } 
                const {name, email, password }= req.body;
                try {
                  let user= await User.findOne({email: email});   //checking if a user exists with that email
                  if(user){
                      return res.status(400).json({ msg: 'User already exisits'});
                          }
                    user =new User({                  //generating a new user
                        name,
                        email,
                        password
                    });

                    const salt =await bcrypt.genSalt(10);     //Hashing the password

                    user.password =await bcrypt.hash(password,salt);

                    await user.save();

                  const payload={
                      user:{
                          id: user.id
                      }
                  }
                  jwt.sign(payload, config.get('jwtSecret'),{
                      expiresIn: 360000
                  }, (err, token) =>{
                      if(err) throw err;
                      res.json({ token });

                  } )
                } catch (err) {
                    console.error(err.message);
                    res.status(500).send('Server Error');
                }
                });

module.exports = router; 