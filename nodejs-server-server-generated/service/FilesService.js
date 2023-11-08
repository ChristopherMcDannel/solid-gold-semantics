'use strict';


/**
 * Upload a file that can be used across various endpoints/features. The size of all the files uploaded by one organization can be up to 100 GB.  The size of individual files for can be a maximum of 512MB. See the [Assistants Tools guide](/docs/assistants/tools) to learn more about the types of files supported. The Fine-tuning API only supports `.jsonl` files.  Please [contact us](https://help.openai.com/) if you need to increase these storage limits. 
 *
 * returns OpenAIFile
 **/
exports.createFile = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "filename" : "filename",
  "purpose" : "fine-tune",
  "bytes" : 0,
  "created_at" : 6,
  "id" : "id",
  "status_details" : "status_details",
  "object" : "file",
  "status" : "uploaded"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete a file.
 *
 * file_id String The ID of the file to use for this request.
 * returns DeleteFileResponse
 **/
exports.deleteFile = function(file_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "deleted" : true,
  "id" : "id",
  "object" : "file"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns the contents of the specified file.
 *
 * file_id String The ID of the file to use for this request.
 * returns String
 **/
exports.downloadFile = function(file_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = "";
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns a list of files that belong to the user's organization.
 *
 * purpose String Only return files with the given purpose. (optional)
 * returns ListFilesResponse
 **/
exports.listFiles = function(purpose) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
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
 * Returns information about a specific file.
 *
 * file_id String The ID of the file to use for this request.
 * returns OpenAIFile
 **/
exports.retrieveFile = function(file_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "filename" : "filename",
  "purpose" : "fine-tune",
  "bytes" : 0,
  "created_at" : 6,
  "id" : "id",
  "status_details" : "status_details",
  "object" : "file",
  "status" : "uploaded"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

