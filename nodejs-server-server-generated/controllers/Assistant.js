'use strict';

var utils = require('../utils/writer.js');
var Assistant = require('../service/AssistantService');

module.exports.modifyAssistant = function modifyAssistant (req, res, next, body, assistant_id) {
  Assistant.modifyAssistant(body, assistant_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
