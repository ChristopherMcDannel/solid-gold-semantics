'use strict';


/**
 * Creates a new edit for the provided input, instruction, and parameters.
 *
 * body CreateEditRequest 
 * returns CreateEditResponse
 **/
exports.createEdit = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "created" : 6,
  "usage" : {
    "completion_tokens" : 1,
    "prompt_tokens" : 5,
    "total_tokens" : 5
  },
  "choices" : [ {
    "finish_reason" : "stop",
    "index" : 0,
    "text" : "text"
  }, {
    "finish_reason" : "stop",
    "index" : 0,
    "text" : "text"
  } ],
  "object" : "edit"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

