const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const Post = require("../../models/Post");
const Profile = require("../../models/Profile");
const validatePostInput = require("../../validation/post");
const User = require("../../models/User");

// @route   POST api/posts
// @desc    Create post
// @access  Private
router.post('/',
  passport.authenticate("jwt", {session: false}),
  (req, res) => {
    const {errors, isValid} = validatePostInput(req.body);
    
    //Check validation
    if (!isValid) {
      return res.status(400).json(errors);
    }
    
    const newPost = new Post({
      text: req.body.text,
      image: req.body.image,
      user: req.user.id
    });
    User.findById(req.user.id).then(user => {
       newPost.name = user.name;
       newPost.avatar = user.avatar;
       newPost.save().then(post => {
        res.json(post);
       })
    });
   });
 

// @route   GET api/posts
// @desc    get all posts of a user
// @access  Private

router.get('/', passport.authenticate("jwt", { session: false }), (req, res) => {
  Post.find({ user: req.user.id })
    .sort({ date: -1 })
    .then((posts) => res.json(posts))
    .catch((err) => res.status(404).json({ nopostsfound: "No posts found" }));
});

// @route   POST api/posts/like/:post_id
// @desc    Like post
// @access  Private
router.post(
  "/like/:post_id",
  passport.authenticate("jwt", { session: false }),
  (req, res) => {
    Profile.findOne({ user: req.user.id }).then((profile) => {
      Post.findById(req.params.post_id)
        .then((post) => {
          if (
            post.likes.filter((like) => like.user.toString() === req.user.id)
              .length > 0
          ) {
            return res
              .status(400)
              .json({ alreadyliked: "User already liked this post" });
          }

          // Add user id to likes array
          post.likes.unshift({ user: req.user.id });

          post.save().then((post) => res.json(post));
        })
        .catch((err) =>
          res.status(404).json({ postnotfound: "No post found" })
        );
    });
  }
);
module.exports = router;