'use strict';

var utils = require('../utils/writer.js');
var FineTuning = require('../service/FineTuningService');

module.exports.cancelFineTuningJob = function cancelFineTuningJob (req, res, next, fine_tuning_job_id) {
  FineTuning.cancelFineTuningJob(fine_tuning_job_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createFineTuningJob = function createFineTuningJob (req, res, next, body) {
  FineTuning.createFineTuningJob(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listFineTuningEvents = function listFineTuningEvents (req, res, next, fine_tuning_job_id, after, limit) {
  FineTuning.listFineTuningEvents(fine_tuning_job_id, after, limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listPaginatedFineTuningJobs = function listPaginatedFineTuningJobs (req, res, next, after, limit) {
  FineTuning.listPaginatedFineTuningJobs(after, limit)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.retrieveFineTuningJob = function retrieveFineTuningJob (req, res, next, fine_tuning_job_id) {
  FineTuning.retrieveFineTuningJob(fine_tuning_job_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
