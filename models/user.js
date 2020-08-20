var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var passortLocalMongoose = require('passport-local-mongoose');

var User = new Schema({
    admin: {
        type: Boolean,
        default: false
    }
});
User.plugin(passortLocalMongoose);
module.exports = mongoose.model('User', User);