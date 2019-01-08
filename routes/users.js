const express = require('express');
const passRegex = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})");
const router = express.Router();

router.get('/login', (req,res) => res.render('login'));

router.get('/register', (req, res) => res.render('register'));

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
        })
    }

});

module.exports = router;