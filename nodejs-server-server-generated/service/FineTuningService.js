'use strict';


/**
 * Immediately cancel a fine-tune job. 
 *
 * fine_tuning_job_id String The ID of the fine-tuning job to cancel. 
 * returns FineTuningJob
 **/
exports.cancelFineTuningJob = function(fine_tuning_job_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "training_file" : "training_file",
  "result_files" : [ "file-abc123", "file-abc123" ],
  "finished_at" : 6,
  "fine_tuned_model" : "fine_tuned_model",
  "validation_file" : "validation_file",
  "created_at" : 0,
  "error" : {
    "code" : "code",
    "param" : "param",
    "message" : "message"
  },
  "organization_id" : "organization_id",
  "hyperparameters" : {
    "n_epochs" : ""
  },
  "model" : "model",
  "id" : "id",
  "trained_tokens" : 1,
  "object" : "fine_tuning.job",
  "status" : "validating_files"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Creates a job that fine-tunes a specified model from a given dataset.  Response includes details of the enqueued job including job status and the name of the fine-tuned models once complete.  [Learn more about fine-tuning](/docs/guides/fine-tuning) 
 *
 * body CreateFineTuningJobRequest 
 * returns FineTuningJob
 **/
exports.createFineTuningJob = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "training_file" : "training_file",
  "result_files" : [ "file-abc123", "file-abc123" ],
  "finished_at" : 6,
  "fine_tuned_model" : "fine_tuned_model",
  "validation_file" : "validation_file",
  "created_at" : 0,
  "error" : {
    "code" : "code",
    "param" : "param",
    "message" : "message"
  },
  "organization_id" : "organization_id",
  "hyperparameters" : {
    "n_epochs" : ""
  },
  "model" : "model",
  "id" : "id",
  "trained_tokens" : 1,
  "object" : "fine_tuning.job",
  "status" : "validating_files"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get status updates for a fine-tuning job. 
 *
 * fine_tuning_job_id String The ID of the fine-tuning job to get events for. 
 * after String Identifier for the last event from the previous pagination request. (optional)
 * limit Integer Number of events to retrieve. (optional)
 * returns ListFineTuningJobEventsResponse
 **/
exports.listFineTuningEvents = function(fine_tuning_job_id,after,limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "level" : "info",
    "created_at" : 0,
    "id" : "id",
    "message" : "message",
    "object" : "fine_tuning.job.event"
  }, {
    "level" : "info",
    "created_at" : 0,
    "id" : "id",
    "message" : "message",
    "object" : "fine_tuning.job.event"
  } ],
  "object" : "list"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * List your organization's fine-tuning jobs 
 *
 * after String Identifier for the last job from the previous pagination request. (optional)
 * limit Integer Number of fine-tuning jobs to retrieve. (optional)
 * returns ListPaginatedFineTuningJobsResponse
 **/
exports.listPaginatedFineTuningJobs = function(after,limit) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "training_file" : "training_file",
    "result_files" : [ "file-abc123", "file-abc123" ],
    "finished_at" : 6,
    "fine_tuned_model" : "fine_tuned_model",
    "validation_file" : "validation_file",
    "created_at" : 0,
    "error" : {
      "code" : "code",
      "param" : "param",
      "message" : "message"
    },
    "organization_id" : "organization_id",
    "hyperparameters" : {
      "n_epochs" : ""
    },
    "model" : "model",
    "id" : "id",
    "trained_tokens" : 1,
    "object" : "fine_tuning.job",
    "status" : "validating_files"
  }, {
    "training_file" : "training_file",
    "result_files" : [ "file-abc123", "file-abc123" ],
    "finished_at" : 6,
    "fine_tuned_model" : "fine_tuned_model",
    "validation_file" : "validation_file",
    "created_at" : 0,
    "error" : {
      "code" : "code",
      "param" : "param",
      "message" : "message"
    },
    "organization_id" : "organization_id",
    "hyperparameters" : {
      "n_epochs" : ""
    },
    "model" : "model",
    "id" : "id",
    "trained_tokens" : 1,
    "object" : "fine_tuning.job",
    "status" : "validating_files"
  } ],
  "has_more" : true,
  "object" : "list"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get info about a fine-tuning job.  [Learn more about fine-tuning](/docs/guides/fine-tuning) 
 *
 * fine_tuning_job_id String The ID of the fine-tuning job. 
 * returns FineTuningJob
 **/
exports.retrieveFineTuningJob = function(fine_tuning_job_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "training_file" : "training_file",
  "result_files" : [ "file-abc123", "file-abc123" ],
  "finished_at" : 6,
  "fine_tuned_model" : "fine_tuned_model",
  "validation_file" : "validation_file",
  "created_at" : 0,
  "error" : {
    "code" : "code",
    "param" : "param",
    "message" : "message"
  },
  "organization_id" : "organization_id",
  "hyperparameters" : {
    "n_epochs" : ""
  },
  "model" : "model",
  "id" : "id",
  "trained_tokens" : 1,
  "object" : "fine_tuning.job",
  "status" : "validating_files"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

