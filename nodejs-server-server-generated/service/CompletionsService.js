'use strict';


/**
 * Creates a completion for the provided prompt and parameters.
 *
 * body CreateCompletionRequest 
 * returns CreateCompletionResponse
 **/
exports.createCompletion = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "created" : 5,
  "usage" : {
    "completion_tokens" : 1,
    "prompt_tokens" : 5,
    "total_tokens" : 5
  },
  "model" : "model",
  "id" : "id",
  "choices" : [ {
    "finish_reason" : "stop",
    "index" : 0,
    "text" : "text",
    "logprobs" : {
      "top_logprobs" : [ {
        "key" : 5
      }, {
        "key" : 5
      } ],
      "token_logprobs" : [ 1.4658129805029452, 1.4658129805029452 ],
      "tokens" : [ "tokens", "tokens" ],
      "text_offset" : [ 6, 6 ]
    }
  }, {
    "finish_reason" : "stop",
    "index" : 0,
    "text" : "text",
    "logprobs" : {
      "top_logprobs" : [ {
        "key" : 5
      }, {
        "key" : 5
      } ],
      "token_logprobs" : [ 1.4658129805029452, 1.4658129805029452 ],
      "tokens" : [ "tokens", "tokens" ],
      "text_offset" : [ 6, 6 ]
    }
  } ],
  "system_fingerprint" : "system_fingerprint",
  "object" : "text_completion"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

