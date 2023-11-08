'use strict';

var utils = require('../utils/writer.js');
var Edits = require('../service/EditsService');

module.exports.createEdit = function createEdit (req, res, next, body) {
  Edits.createEdit(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
