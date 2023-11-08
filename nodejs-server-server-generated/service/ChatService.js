'use strict';


/**
 * Creates a model response for the given chat conversation.
 *
 * body CreateChatCompletionRequest 
 * returns CreateChatCompletionResponse
 **/
exports.createChatCompletion = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "created" : 6,
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
    "message" : {
      "role" : "assistant",
      "function_call" : {
        "name" : "name",
        "arguments" : "arguments"
      },
      "tool_calls" : [ {
        "function" : {
          "name" : "name",
          "arguments" : "arguments"
        },
        "id" : "id",
        "type" : "function"
      }, {
        "function" : {
          "name" : "name",
          "arguments" : "arguments"
        },
        "id" : "id",
        "type" : "function"
      } ],
      "content" : "content"
    }
  }, {
    "finish_reason" : "stop",
    "index" : 0,
    "message" : {
      "role" : "assistant",
      "function_call" : {
        "name" : "name",
        "arguments" : "arguments"
      },
      "tool_calls" : [ {
        "function" : {
          "name" : "name",
          "arguments" : "arguments"
        },
        "id" : "id",
        "type" : "function"
      }, {
        "function" : {
          "name" : "name",
          "arguments" : "arguments"
        },
        "id" : "id",
        "type" : "function"
      } ],
      "content" : "content"
    }
  } ],
  "system_fingerprint" : "system_fingerprint",
  "object" : "chat.completion"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

