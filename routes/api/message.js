const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
const passport = require("passport");
const User = require("../../models/User");
const Conversation = require("../../models/Conversation");

// @route   POST api/message
// @desc    Create new conversation
// @access  Private
router.post("/",
  passport.authenticate("jwt", { session: false}),
  (req, res) => {
    let errors = {};
    //Participants list must be more than 2 people
    if (req.body.participants.length <= 1) {
      errors.participants = "Participants must be more than 2";
      return res.status(400).json(errors);
    }

    //Check if each value of participants array (which is also an userId) is existed in User collection
    req.body.participants.map(participant => {
      User.findById(participant)
        .then(user => {
          if (!user) {
            errors.participants = "Participant doesn't exist";
            return res.status(400).json(errors);
          }
        })
        .catch(err => console.log(err));
    });

    
    const newConversation = new Conversation({
      participants: req.body.participants
    })

    newConversation.save()
      .then(conversation => res.json(conversation))
      .catch(err => console.log(err));
  }
);

// @route   GET api/message/conversation/:conversation_id
// @desc    GET conversation by id
// @access  Private
router.get("/conversation/:conversation_id",
 passport.authenticate("jwt", {session: false}),
 (req, res) => {
   Conversation.findById(req.params.conversation_id)
    .populate("participants", ["name", "avatar"])
    .then(conversation => {
      if (!conversation) {
        return res.status(400).json({noconversationfound: "No conversation found"});
      }
      
      //Check if current user (req.user.id) is a participant in this conversation
      const index = conversation.participants.map(participant => participant._id).indexOf(req.user.id);
      if (index < 0) {
        return res.status(400).json({usernotauthorized: "User is not authorized"});
      }

      return res.json(conversation);

    })
    .catch(err => console.log(err))
 }
)

module.exports = router;