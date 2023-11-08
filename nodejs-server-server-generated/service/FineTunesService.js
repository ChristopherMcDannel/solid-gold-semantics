'use strict';


/**
 * Immediately cancel a fine-tune job. 
 *
 * fine_tune_id String The ID of the fine-tune job to cancel 
 * returns FineTune
 **/
exports.cancelFineTune = function(fine_tune_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result_files" : [ {
    "filename" : "filename",
    "purpose" : "fine-tune",
    "bytes" : 0,
    "created_at" : 6,
    "id" : "id",
    "status_details" : "status_details",
    "object" : "file",
    "status" : "uploaded"
  }, {
    "filename" : "filename",
    "purpose" : "fine-tune",
    "bytes" : 0,
    "created_at" : 6,
    "id" : "id",
    "status_details" : "status_details",
    "object" : "file",
    "status" : "uploaded"
  } ],
  "hyperparams" : {
    "batch_size" : 1,
    "n_epochs" : 2,
    "classification_n_classes" : 5,
    "prompt_loss_weight" : 7.061401241503109,
    "compute_classification_metrics" : true,
    "classification_positive_class" : "classification_positive_class",
    "learning_rate_multiplier" : 5.637376656633329
  },
  "fine_tuned_model" : "fine_tuned_model",
  "created_at" : 0,
  "training_files" : [ null, null ],
  "updated_at" : 9,
  "organization_id" : "organization_id",
  "model" : "model",
  "id" : "id",
  "events" : [ {
    "level" : "level",
    "created_at" : 6,
    "message" : "message",
    "object" : "fine-tune-event"
  }, {
    "level" : "level",
    "created_at" : 6,
    "message" : "message",
    "object" : "fine-tune-event"
  } ],
  "object" : "fine-tune",
  "status" : "status",
  "validation_files" : [ null, null ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Creates a job that fine-tunes a specified model from a given dataset.  Response includes details of the enqueued job including job status and the name of the fine-tuned models once complete.  [Learn more about fine-tuning](/docs/guides/legacy-fine-tuning) 
 *
 * body CreateFineTuneRequest 
 * returns FineTune
 **/
exports.createFineTune = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result_files" : [ {
    "filename" : "filename",
    "purpose" : "fine-tune",
    "bytes" : 0,
    "created_at" : 6,
    "id" : "id",
    "status_details" : "status_details",
    "object" : "file",
    "status" : "uploaded"
  }, {
    "filename" : "filename",
    "purpose" : "fine-tune",
    "bytes" : 0,
    "created_at" : 6,
    "id" : "id",
    "status_details" : "status_details",
    "object" : "file",
    "status" : "uploaded"
  } ],
  "hyperparams" : {
    "batch_size" : 1,
    "n_epochs" : 2,
    "classification_n_classes" : 5,
    "prompt_loss_weight" : 7.061401241503109,
    "compute_classification_metrics" : true,
    "classification_positive_class" : "classification_positive_class",
    "learning_rate_multiplier" : 5.637376656633329
  },
  "fine_tuned_model" : "fine_tuned_model",
  "created_at" : 0,
  "training_files" : [ null, null ],
  "updated_at" : 9,
  "organization_id" : "organization_id",
  "model" : "model",
  "id" : "id",
  "events" : [ {
    "level" : "level",
    "created_at" : 6,
    "message" : "message",
    "object" : "fine-tune-event"
  }, {
    "level" : "level",
    "created_at" : 6,
    "message" : "message",
    "object" : "fine-tune-event"
  } ],
  "object" : "fine-tune",
  "status" : "status",
  "validation_files" : [ null, null ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Get fine-grained status updates for a fine-tune job. 
 *
 * fine_tune_id String The ID of the fine-tune job to get events for. 
 * stream Boolean Whether to stream events for the fine-tune job. If set to true, events will be sent as data-only [server-sent events](https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events/Using_server-sent_events#Event_stream_format) as they become available. The stream will terminate with a `data: [DONE]` message when the job is finished (succeeded, cancelled, or failed).  If set to false, only events generated so far will be returned.  (optional)
 * returns ListFineTuneEventsResponse
 **/
exports.listFineTuneEvents = function(fine_tune_id,stream) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "level" : "level",
    "created_at" : 6,
    "message" : "message",
    "object" : "fine-tune-event"
  }, {
    "level" : "level",
    "created_at" : 6,
    "message" : "message",
    "object" : "fine-tune-event"
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
 * returns ListFineTunesResponse
 **/
exports.listFineTunes = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "result_files" : [ {
      "filename" : "filename",
      "purpose" : "fine-tune",
      "bytes" : 0,
      "created_at" : 6,
      "id" : "id",
      "status_details" : "status_details",
      "object" : "file",
      "status" : "uploaded"
    }, {
      "filename" : "filename",
      "purpose" : "fine-tune",
      "bytes" : 0,
      "created_at" : 6,
      "id" : "id",
      "status_details" : "status_details",
      "object" : "file",
      "status" : "uploaded"
    } ],
    "hyperparams" : {
      "batch_size" : 1,
      "n_epochs" : 2,
      "classification_n_classes" : 5,
      "prompt_loss_weight" : 7.061401241503109,
      "compute_classification_metrics" : true,
      "classification_positive_class" : "classification_positive_class",
      "learning_rate_multiplier" : 5.637376656633329
    },
    "fine_tuned_model" : "fine_tuned_model",
    "created_at" : 0,
    "training_files" : [ null, null ],
    "updated_at" : 9,
    "organization_id" : "organization_id",
    "model" : "model",
    "id" : "id",
    "events" : [ {
      "level" : "level",
      "created_at" : 6,
      "message" : "message",
      "object" : "fine-tune-event"
    }, {
      "level" : "level",
      "created_at" : 6,
      "message" : "message",
      "object" : "fine-tune-event"
    } ],
    "object" : "fine-tune",
    "status" : "status",
    "validation_files" : [ null, null ]
  }, {
    "result_files" : [ {
      "filename" : "filename",
      "purpose" : "fine-tune",
      "bytes" : 0,
      "created_at" : 6,
      "id" : "id",
      "status_details" : "status_details",
      "object" : "file",
      "status" : "uploaded"
    }, {
      "filename" : "filename",
      "purpose" : "fine-tune",
      "bytes" : 0,
      "created_at" : 6,
      "id" : "id",
      "status_details" : "status_details",
      "object" : "file",
      "status" : "uploaded"
    } ],
    "hyperparams" : {
      "batch_size" : 1,
      "n_epochs" : 2,
      "classification_n_classes" : 5,
      "prompt_loss_weight" : 7.061401241503109,
      "compute_classification_metrics" : true,
      "classification_positive_class" : "classification_positive_class",
      "learning_rate_multiplier" : 5.637376656633329
    },
    "fine_tuned_model" : "fine_tuned_model",
    "created_at" : 0,
    "training_files" : [ null, null ],
    "updated_at" : 9,
    "organization_id" : "organization_id",
    "model" : "model",
    "id" : "id",
    "events" : [ {
      "level" : "level",
      "created_at" : 6,
      "message" : "message",
      "object" : "fine-tune-event"
    }, {
      "level" : "level",
      "created_at" : 6,
      "message" : "message",
      "object" : "fine-tune-event"
    } ],
    "object" : "fine-tune",
    "status" : "status",
    "validation_files" : [ null, null ]
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
 * Gets info about the fine-tune job.  [Learn more about fine-tuning](/docs/guides/legacy-fine-tuning) 
 *
 * fine_tune_id String The ID of the fine-tune job 
 * returns FineTune
 **/
exports.retrieveFineTune = function(fine_tune_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "result_files" : [ {
    "filename" : "filename",
    "purpose" : "fine-tune",
    "bytes" : 0,
    "created_at" : 6,
    "id" : "id",
    "status_details" : "status_details",
    "object" : "file",
    "status" : "uploaded"
  }, {
    "filename" : "filename",
    "purpose" : "fine-tune",
    "bytes" : 0,
    "created_at" : 6,
    "id" : "id",
    "status_details" : "status_details",
    "object" : "file",
    "status" : "uploaded"
  } ],
  "hyperparams" : {
    "batch_size" : 1,
    "n_epochs" : 2,
    "classification_n_classes" : 5,
    "prompt_loss_weight" : 7.061401241503109,
    "compute_classification_metrics" : true,
    "classification_positive_class" : "classification_positive_class",
    "learning_rate_multiplier" : 5.637376656633329
  },
  "fine_tuned_model" : "fine_tuned_model",
  "created_at" : 0,
  "training_files" : [ null, null ],
  "updated_at" : 9,
  "organization_id" : "organization_id",
  "model" : "model",
  "id" : "id",
  "events" : [ {
    "level" : "level",
    "created_at" : 6,
    "message" : "message",
    "object" : "fine-tune-event"
  }, {
    "level" : "level",
    "created_at" : 6,
    "message" : "message",
    "object" : "fine-tune-event"
  } ],
  "object" : "fine-tune",
  "status" : "status",
  "validation_files" : [ null, null ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

