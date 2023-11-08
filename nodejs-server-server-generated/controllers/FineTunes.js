'use strict';

var utils = require('../utils/writer.js');
var FineTunes = require('../service/FineTunesService');

module.exports.cancelFineTune = function cancelFineTune (req, res, next, fine_tune_id) {
  FineTunes.cancelFineTune(fine_tune_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createFineTune = function createFineTune (req, res, next, body) {
  FineTunes.createFineTune(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listFineTuneEvents = function listFineTuneEvents (req, res, next, fine_tune_id, stream) {
  FineTunes.listFineTuneEvents(fine_tune_id, stream)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listFineTunes = function listFineTunes (req, res, next) {
  FineTunes.listFineTunes()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveFineTune = function retrieveFineTune (req, res, next, fine_tune_id) {
  FineTunes.retrieveFineTune(fine_tune_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
