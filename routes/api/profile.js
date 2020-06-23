const express = require('express');
const router = express.Router();
const Profile =  require('../../models/Profile');
const mongoose =  require('mongoose');
const User  = require('../../models/User');
const passport = require('passport');
const validateProfileInput = require('../../validation/profile');
const profile = require('../../validation/profile');


// @route   POST api/profile
// @desc    Create or edit user profile
// @access  Private


router.post('/', passport.authenticate("jwt", {session: false}), (req,res) => {
   //Validation
  const {errors, isValid } = validateProfileInput(req.body); 
 
  if(!isValid) {
  return res.status(400).json(errors);
  }

  //get fields
  const profileFields = {};
  profileFields.user = req.user.id;
  if (req.body.handle) profileFields.handle = req.body.handle;
  if (req.body.gender) profileFields.gender = req.body.gender;
  if (req.body.phone) profileFields.phone = req.body.phone;
  if (req.body.bio) profileFields.bio = req.body.bio;
  if (req.body.website) profileFields.website = req.body.website;
  // if (req.body.following) profileFields.following = req.body.following;
  // if (req.body.followers) profileFields.followers = req.body.followers;

  // Social
  profileFields.social = {};
  if (req.body.youtube) profileFields.social.youtube = req.body.youtube;
  if (req.body.twitter) profileFields.social.twitter = req.body.twitter;
  if (req.body.facebook) profileFields.social.facebook = req.body.facebook;
  
  Profile.findOne({ user: req.user.id }).then((profile) => {
    if (profile) {
      // Update
      Profile.findOneAndUpdate(
        { user: req.user.id },
        { $set: profileFields },
        { new: true }
      ).then((profile) => res.json(profile));
    } else {
      // Create & Check if handle exists
      Profile.findOne({ handle: profileFields.handle }).then((profile) => {
        if (profile) {
          errors.handle = "That handle already exists";
          return res.status(400).json(errors);
        }
      // Save Profile
        new Profile(profileFields)
          .save()
          .then((profile) => res.json(profile));
      });
    }
  });
}
);
// @route   GET api/profile
// @desc    Get current users profile
// @access  Private
router.get(
  '/',
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    const errors = {};

    Profile.findOne({ user: req.user.id })
      .populate("user", ["name", "avatar"])
      .then((profile) => {
        if (!profile) {
          errors.noprofile = "There is no profile for this user";
          return res.status(404).json(errors);
        }
        res.json(profile);
      })
      .catch((err) => res.status(404).json(err));
  }
);

// @route   DELETE api/profile
// @desc    Delete current user and profile
// @access  Private
router.delete("/",
  passport.authenticate("jwt", {session: false}),
  (req, res) => {
    Profile.findOneAndRemove({user: req.user.id})
      .then(() => {
        User.findOneAndRemove({ _id: req.user.id})
          .then(() => res.json({ success: true }))
      });
  }
);

// @route   GET api/profile/followers/:profile_id
// @desc    Get list of user's followers
// @access  Public
router.get("/followers/:profile_id", (req, res) => {
  Profile.findById(req.params.profile_id)
    .then(profile => {
      if (profile) {
        return res.json(profile.followers);
      } else {
        return res.json({profilenotfound: "No profile found"});
      }
    })
    .catch(err => console.log(err));
});

// @route   GET api/profile/handle/:handle
// @desc    Get profile by handle
// @access  Public

router.get("/handle/:handle", (req, res) => {
  const errors = {};

  Profile.findOne({ handle: req.params.handle })
    .populate("user", ["name", "avatar"])
    .then((profile) => {
      if (!profile) {
        errors.noprofile = "There is no profile for this user";
        res.status(404).json(errors);
      }

      res.json(profile);
    })
    .catch((err) => res.status(404).json(err));
});

// @route   GET api/profile/all
// @desc    Get all profiles
// @access  Public
router.get("/all", (req, res) => {
  const errors = {};

  Profile.find()
    .populate("user", ["name", "avatar"])
    .then((profiles) => {
      if (!profiles) {
        errors.noprofile = "There are no profiles";
        return res.status(404).json(errors);
      }

      res.json(profiles);
    })
    .catch((err) => res.status(404).json({ profile: "There are no profiles" }));
});




module.exports = router;