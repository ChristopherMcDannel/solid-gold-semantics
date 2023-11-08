'use strict';

var utils = require('../utils/writer.js');
var Files = require('../service/FilesService');

module.exports.createFile = function createFile (req, res, next) {
  Files.createFile()
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteFile = function deleteFile (req, res, next, file_id) {
  Files.deleteFile(file_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.downloadFile = function downloadFile (req, res, next, file_id) {
  Files.downloadFile(file_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listFiles = function listFiles (req, res, next, purpose) {
  Files.listFiles(purpose)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveFile = function retrieveFile (req, res, next, file_id) {
  Files.retrieveFile(file_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
