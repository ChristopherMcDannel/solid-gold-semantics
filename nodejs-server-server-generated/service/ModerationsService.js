'use strict';


/**
 * Classifies if text violates OpenAI's Content Policy
 *
 * body CreateModerationRequest 
 * returns CreateModerationResponse
 **/
exports.createModeration = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "model" : "model",
  "id" : "id",
  "results" : [ {
    "category_scores" : {
      "self-harm/intent" : 2.3021358869347655,
      "hate/threatening" : 6.027456183070403,
      "self-harm/instructions" : 7.061401241503109,
      "sexual/minors" : 3.616076749251911,
      "harassment/threatening" : 5.962133916683182,
      "hate" : 0.8008281904610115,
      "self-harm" : 5.637376656633329,
      "harassment" : 1.4658129805029452,
      "sexual" : 9.301444243932576,
      "violence/graphic" : 4.145608029883936,
      "violence" : 2.027123023002322
    },
    "flagged" : true,
    "categories" : {
      "self-harm/intent" : true,
      "hate/threatening" : true,
      "self-harm/instructions" : true,
      "sexual/minors" : true,
      "harassment/threatening" : true,
      "hate" : true,
      "self-harm" : true,
      "harassment" : true,
      "sexual" : true,
      "violence/graphic" : true,
      "violence" : true
    }
  }, {
    "category_scores" : {
      "self-harm/intent" : 2.3021358869347655,
      "hate/threatening" : 6.027456183070403,
      "self-harm/instructions" : 7.061401241503109,
      "sexual/minors" : 3.616076749251911,
      "harassment/threatening" : 5.962133916683182,
      "hate" : 0.8008281904610115,
      "self-harm" : 5.637376656633329,
      "harassment" : 1.4658129805029452,
      "sexual" : 9.301444243932576,
      "violence/graphic" : 4.145608029883936,
      "violence" : 2.027123023002322
    },
    "flagged" : true,
    "categories" : {
      "self-harm/intent" : true,
      "hate/threatening" : true,
      "self-harm/instructions" : true,
      "sexual/minors" : true,
      "harassment/threatening" : true,
      "hate" : true,
      "self-harm" : true,
      "harassment" : true,
      "sexual" : true,
      "violence/graphic" : true,
      "violence" : true
    }
  } ]
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

