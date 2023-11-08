'use strict';

var utils = require('../utils/writer.js');
var Audio = require('../service/AudioService');

module.exports.createSpeech = function createSpeech (req, res, next, body) {
  Audio.createSpeech(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createTranscription = function createTranscription (req, res, next) {
  Audio.createTranscription()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createTranslation = function createTranslation (req, res, next) {
  Audio.createTranslation()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
