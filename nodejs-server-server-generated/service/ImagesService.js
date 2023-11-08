'use strict';


/**
 * Creates an image given a prompt.
 *
 * body CreateImageRequest 
 * returns ImagesResponse
 **/
exports.createImage = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "revised_prompt" : "revised_prompt",
    "b64_json" : "b64_json",
    "url" : "url"
  }, {
    "revised_prompt" : "revised_prompt",
    "b64_json" : "b64_json",
    "url" : "url"
  } ],
  "created" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Creates an edited or extended image given an original image and a prompt.
 *
 * returns ImagesResponse
 **/
exports.createImageEdit = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "revised_prompt" : "revised_prompt",
    "b64_json" : "b64_json",
    "url" : "url"
  }, {
    "revised_prompt" : "revised_prompt",
    "b64_json" : "b64_json",
    "url" : "url"
  } ],
  "created" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Creates a variation of a given image.
 *
 * returns ImagesResponse
 **/
exports.createImageVariation = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "data" : [ {
    "revised_prompt" : "revised_prompt",
    "b64_json" : "b64_json",
    "url" : "url"
  }, {
    "revised_prompt" : "revised_prompt",
    "b64_json" : "b64_json",
    "url" : "url"
  } ],
  "created" : 0
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

