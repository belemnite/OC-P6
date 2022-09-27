const mongoose = require('mongoose');

const sauceSchema = mongoose.Schema({
  userId: { type: String, required: true },
  name: { type: String, required: true },
  manufacturer: { type: String, required: true },
  description: { type: String, required: true },
  mainPepper: { type: String, required: true },
  imageUrl: { type: String, required: true },
  heat: { type: String, required: true, min: 1, max: 10 },
  likes: { type: Number, default: 0 },
  dislikes: { type: Number, default: 0  },
  usersLiked: { type: ["String <userId>"], required: true },
  usersDisliked:{ type: ["String <userId>"], required: true },

});

module.exports = mongoose.model('Sauce', sauceSchema);