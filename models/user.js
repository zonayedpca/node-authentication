const mongoose = require('mongoose'),
      Schema = mongoose.Schema,
      passportLocalMongoose = require('passport-local-mongoose');

const UserSchema = new Schema({
  username: String,
  password: String
})

UserSchema.plugin(passportLocalMongoose);

const User = mongoose.model('user', UserSchema);

module.exports = User;
