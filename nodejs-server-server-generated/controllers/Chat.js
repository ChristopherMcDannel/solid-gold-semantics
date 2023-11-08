'use strict';

var utils = require('../utils/writer.js');
var Chat = require('../service/ChatService');

module.exports.createChatCompletion = function createChatCompletion (req, res, next, body) {
  Chat.createChatCompletion(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
