'use strict';

var mongoose = require('mongoose'),
    Schema = mongoose.Schema;

var InboxSchema = new Schema({
  email: String,
  message: String,
  active: Boolean
});

module.exports = mongoose.model('Inbox', InboxSchema);
