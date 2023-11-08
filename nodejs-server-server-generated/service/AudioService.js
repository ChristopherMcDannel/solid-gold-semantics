'use strict';


/**
 * Generates audio from the input text.
 *
 * body CreateSpeechRequest 
 * returns byte[]
 **/
exports.createSpeech = function(body) {
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
 * Transcribes audio into the input language.
 *
 * returns CreateTranscriptionResponse
 **/
exports.createTranscription = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "text" : "text"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Translates audio into English.
 *
 * returns CreateTranslationResponse
 **/
exports.createTranslation = function() {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "text" : "text"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

