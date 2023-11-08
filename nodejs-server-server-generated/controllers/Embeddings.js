'use strict';

var utils = require('../utils/writer.js');
var Embeddings = require('../service/EmbeddingsService');

module.exports.createEmbedding = function createEmbedding (req, res, next, body) {
  Embeddings.createEmbedding(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
