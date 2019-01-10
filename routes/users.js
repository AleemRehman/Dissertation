const express = require('express');
const passRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
const router = express.Router();
const bcrypt = require('bcryptjs');
const User = require('../models/User');
const passport = require('passport');

router.get('/login', (req,res) => res.render('login'));

router.get('/register', (req, res) => res.render('register'));

/* TODO: add strength indicator bars, entails different regex patterns for dictating
current strength and to determine ideal strength (basic bar system) */
router.post('/register', (req,res) => {
    const {name , email, password, password2} = req.body;
    let errors = [];

    if(!name || !email || !password || !password2){
        errors.push({msg: 'Please fill all fields'});
    }

    if(password != password2){
        errors.push({msg: 'Passwords do not match'});
    }

    if(!password.match(passRegex)){
        errors.push({msg: 'Password not strong enough'})
    }
    
    if(errors.length > 0){
        res.render('register', {
            errors,
            name, 
            email,
            password,
            password2
        });
    }else{
        User.findOne({ email: email})
            .then(user => {
               if(user){
                    errors.push({ msg: 'Email already registered'})
                    res.render('register', {
                        errors,
                        name,
                        email,
                        password,
                        password2
                    });
                }else{
                    const newUser = new User({
                        name,
                        email,
                        password
                    });
                
                bcrypt.genSalt(10, (err, salt) =>
                    bcrypt.hash(newUser.password, salt, (err,hash) => {
                        if(err) throw err;
                        newUser.password = hash;
                        newUser.save()
                            .then(user => {
                                req.flash('success_msg', 'You are now registered and can log in');
                                res.redirect('/login');
                            })
                            .catch(err => console.log(err));
                    }));
                }
            });
    }
});

router.post('/login', (req,res,next) => {
    passport.authenticate('local', {
        successRedirect: '/dashboard',
        failureRedirect: '/users/login',
        failureFlash: true
    })(req, res, next);
});

router.get('/logout', (req,res) => {
    req.logout();
    req.flash('success_msg', 'you are now logged out');
    res.redirect('/users/login');
});

module.exports = router;