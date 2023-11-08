'use strict';

var utils = require('../utils/writer.js');
var Moderations = require('../service/ModerationsService');

module.exports.createModeration = function createModeration (req, res, next, body) {
  Moderations.createModeration(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
