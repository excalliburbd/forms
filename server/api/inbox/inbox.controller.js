'use strict';

var _ = require('lodash');
var Inbox = require('./inbox.model');

// Get list of inboxs
exports.index = function(req, res) {
  Inbox.find(function (err, inboxs) {
    if(err) { return handleError(res, err); }
    return res.status(200).json(inboxs);
  });
};

// Get a single inbox
exports.show = function(req, res) {
  Inbox.findById(req.params.id, function (err, inbox) {
    if(err) { return handleError(res, err); }
    if(!inbox) { return res.status(404).send('Not Found'); }
    return res.json(inbox);
  });
};

// Creates a new inbox in the DB.
exports.create = function(req, res) {
  Inbox.create(req.body, function(err, inbox) {
    if(err) { return handleError(res, err); }
    return res.status(201).json(inbox);
  });
};

// Updates an existing inbox in the DB.
exports.update = function(req, res) {
  if(req.body._id) { delete req.body._id; }
  Inbox.findById(req.params.id, function (err, inbox) {
    if (err) { return handleError(res, err); }
    if(!inbox) { return res.status(404).send('Not Found'); }
    var updated = _.merge(inbox, req.body);
    updated.save(function (err) {
      if (err) { return handleError(res, err); }
      return res.status(200).json(inbox);
    });
  });
};

// Deletes a inbox from the DB.
exports.destroy = function(req, res) {
  Inbox.findById(req.params.id, function (err, inbox) {
    if(err) { return handleError(res, err); }
    if(!inbox) { return res.status(404).send('Not Found'); }
    inbox.remove(function(err) {
      if(err) { return handleError(res, err); }
      return res.status(204).send('No Content');
    });
  });
};

function handleError(res, err) {
  return res.status(500).send(err);
}