'use strict';


/**
 * Delete a fine-tuned model. You must have the Owner role in your organization to delete a model.
 *
 * model String The model to delete
 * returns DeleteModelResponse
 **/
exports.deleteModel = function(model) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "deleted" : true,
  "id" : "id",
  "object" : "object"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Lists the currently available models, and provides basic information about each one such as the owner and availability.
 *
 * returns ListModelsResponse
 **/
exports.listModels = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "created" : 0,
    "owned_by" : "owned_by",
    "id" : "id",
    "object" : "model"
  }, {
    "created" : 0,
    "owned_by" : "owned_by",
    "id" : "id",
    "object" : "model"
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
 * Retrieves a model instance, providing basic information about the model such as the owner and permissioning.
 *
 * model String The ID of the model to use for this request
 * returns Model
 **/
exports.retrieveModel = function(model) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "created" : 0,
  "owned_by" : "owned_by",
  "id" : "id",
  "object" : "model"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

