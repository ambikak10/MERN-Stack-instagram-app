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

// @route   GET api/profile/following/:profile_id
// @desc    Get list of user's following
// @access  Public
router.get("/following/:profile_id", (req, res) => {
  Profile.findById(req.params.profile_id)
    .then(profile => {
      if (profile) {
        return res.json(profile.following);
      } else {
        return res.json({ profilenotfound: "No profile found" });
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

// @route   GET api/profile/user/:user_id
// @desc    Get profile by user ID
// @access  Public

router.get("/user/:user_id", (req, res) => {
  const errors = {};

  Profile.findOne({ user: req.params.user_id })
    .populate("user", ["name", "avatar"])
    .then((profile) => {
      if (!profile) {
        errors.noprofile = "There is no profile for this user";
        res.status(404).json(errors);
      }
      res.json(profile);
    })
    .catch((err) =>
      res.status(404).json({ profile: "There is no profile for this user" })
    );
});

// @route   POST api/profile/follow/:profile_id
// @desc    Follow profile
// @access  Private
router.post(
  "/follow/:profile_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findById(req.params.profile_id)
        .then((profile) => {
          if (
            profile.followers.filter((follow) => follow.user.toString() === req.user.id)
              .length > 0
          ) {
            return res
              .status(400)
              .json({ alreadyfollowed: "User already follows this profile" });
          }
         // Add user id to followers array
          profile.followers.unshift({ user: req.user.id });
          profile.save();
          // .then((profile) => res.json(profile)); sending res.json more than once resulted in error 'http headers are already written to the client browser' in terminal, hence removed and added at the end.

          //Find your profile
          Profile.findOne({ user: req.user.id }).then(myProfile => {
          myProfile.following.unshift({ user: profile.user }); //add user id of the person you are following to your following list.
          myProfile.save().then(myProfile => res.json([{ following: myProfile.following }, { followers: profile.followers }]));
        })
        .catch((err) =>
          res.status(404).json({ profilenotfound: "No profile found" })
        );
    });
  }
);

// @route   POST api/profile/unfollow/:profile_id
// @desc    Unfollow profile
// @access  Private

router.post('/unfollow/:profile_id', passport.authenticate("jwt", { session: false }), (req, res) => {

  Profile.findById(req.params.profile_id).then((profile) => {
    if (profile.followers.filter(follower => follower.user.toString() === req.user.id).length === 0) {
      return res.status(400).json({ msg: 'You have not yet followed this profile' });
    }

    // Get the index of my id in the 'followers' array of another user 
    const removeIndex1 = profile.followers.map(follower => follower.user.toString().indexOf(req.user.id));
    // Splice out of array
    profile.followers.splice(removeIndex1, 1);
     // Save
    profile.save().then(profile => console.log(profile.followers));
  });

  Profile.findOne({ user: req.user.id }).then((myProfile) => {
    // Get the index of id of another user in my 'following' array list 
    const removeIndex2 = myProfile.following.map(follow => follow.user.toString().indexOf(profile.user));
    myProfile.following.splice(removeIndex2, 1);
    myProfile.save().then(myProfile => res.json({msg: 'You unfollowed this person'}))

  }).
    catch((err) => {
      console.error(err.message);
      res.status(404).json({ profilenotfound: "No profile found" })
    })

});

module.exports = router;