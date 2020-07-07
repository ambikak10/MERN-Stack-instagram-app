const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ProfileSchema = new Schema({
  user: {
    type: Schema.Types.ObjectId,
    ref: "users",
  },
  handle: {
    type: String,
    required: true,
  },
  gender: {
    type: String,
  },
  phone: {
    type: String,
  },
  bio: {
    type: String,
  },
  website: {
    type: String,
  },
  following: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "users",
      },
      name: {
        type: String,
      },
      avatar: {
        type: String,
      }
    }
  ],
  followers: [
    {
      user: {
        type: Schema.Types.ObjectId,
        ref: "users",
      },
      name: {
        type: String,
      },
      avatar: {
        type: String,
      }
    }
  ],
  social: {
    youtube: {
      type: String,
    },
    twitter: {
      type: String,
    },
    facebook: {
      type: String,
    },
  },
  tagged: [
    {
      postId: {
        type: Schema.Types.ObjectId,
        ref: "post",
      },
    },
  ],
});

module.exports = Profile = mongoose.model('profile', ProfileSchema);