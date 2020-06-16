const express = require('express');
const gravatar = require('gravatar');

const router = express.Router();
const User = require('../../models/User');

// @route   POST api/users/signup
// @desc    Sign up new user 
// @access  Public
router.post('/signup', (req, res) => {
  User.findOne({email: req.body.email})
    .then(user => {
      if (user) {
        return res.status(400).json({msg: "Email already existed"});
      }

      const avatar = gravatar.url(req.body.email, {
        s: '200',
        r: 'pg',
        d: 'mm'
      });

      const newUser = new User({
        name: req.body.name,
        email: req.body.email,
        avatar,
        password: req.body.password
      });

      newUser.save()
        .then(user => res.json(user))
        .catch(err => console.log(err));
    })
    .catch(err => console.log(err));
});

module.exports = router;