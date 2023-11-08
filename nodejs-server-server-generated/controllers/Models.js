'use strict';

var utils = require('../utils/writer.js');
var Models = require('../service/ModelsService');

module.exports.deleteModel = function deleteModel (req, res, next, model) {
  Models.deleteModel(model)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listModels = function listModels (req, res, next) {
  Models.listModels()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveModel = function retrieveModel (req, res, next, model) {
  Models.retrieveModel(model)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
