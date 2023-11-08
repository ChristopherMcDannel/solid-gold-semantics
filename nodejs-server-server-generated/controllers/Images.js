'use strict';

var utils = require('../utils/writer.js');
var Images = require('../service/ImagesService');

module.exports.createImage = function createImage (req, res, next, body) {
  Images.createImage(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createImageEdit = function createImageEdit (req, res, next) {
  Images.createImageEdit()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createImageVariation = function createImageVariation (req, res, next) {
  Images.createImageVariation()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
