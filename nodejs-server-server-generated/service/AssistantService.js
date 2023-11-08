'use strict';


/**
 * Modifies an assistant.
 *
 * body ModifyAssistantRequest 
 * assistant_id String The ID of the assistant to modify.
 * returns AssistantObject
 **/
exports.modifyAssistant = function(body,assistant_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "instructions" : "instructions",
  "metadata" : { },
  "name" : "name",
  "file_ids" : [ "file_ids", "file_ids", "file_ids", "file_ids", "file_ids", "file_ids", "file_ids", "file_ids", "file_ids", "file_ids" ],
  "created_at" : 0,
  "description" : "description",
  "model" : "model",
  "id" : "id",
  "tools" : [ "", "", "", "", "", "", "", "", "", "" ],
  "object" : "assistant"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

