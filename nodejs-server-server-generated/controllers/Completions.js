'use strict';

var utils = require('../utils/writer.js');
var Completions = require('../service/CompletionsService');

module.exports.createCompletion = function createCompletion (req, res, next, body) {
  Completions.createCompletion(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
