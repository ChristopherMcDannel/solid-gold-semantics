'use strict';


/**
 * Creates an embedding vector representing the input text.
 *
 * body CreateEmbeddingRequest 
 * returns CreateEmbeddingResponse
 **/
exports.createEmbedding = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "index" : 0,
    "embedding" : [ 6.027456183070403, 6.027456183070403 ],
    "object" : "embedding"
  }, {
    "index" : 0,
    "embedding" : [ 6.027456183070403, 6.027456183070403 ],
    "object" : "embedding"
  } ],
  "usage" : {
    "prompt_tokens" : 1,
    "total_tokens" : 5
  },
  "model" : "model",
  "object" : "embedding"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

