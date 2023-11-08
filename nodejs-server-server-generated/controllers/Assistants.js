'use strict';

var utils = require('../utils/writer.js');
var Assistants = require('../service/AssistantsService');

module.exports.cancelRun = function cancelRun (req, res, next, thread_id, run_id) {
  Assistants.cancelRun(thread_id, run_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createAssistant = function createAssistant (req, res, next, body) {
  Assistants.createAssistant(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createAssistantFile = function createAssistantFile (req, res, next, body, assistant_id) {
  Assistants.createAssistantFile(body, assistant_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createMessage = function createMessage (req, res, next, body, thread_id) {
  Assistants.createMessage(body, thread_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createRun = function createRun (req, res, next, body, thread_id) {
  Assistants.createRun(body, thread_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createThread = function createThread (req, res, next, body) {
  Assistants.createThread(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.createThreadAndRun = function createThreadAndRun (req, res, next, body) {
  Assistants.createThreadAndRun(body)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteAssistant = function deleteAssistant (req, res, next, assistant_id) {
  Assistants.deleteAssistant(assistant_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteAssistantFile = function deleteAssistantFile (req, res, next, assistant_id, file_id) {
  Assistants.deleteAssistantFile(assistant_id, file_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.deleteThread = function deleteThread (req, res, next, thread_id) {
  Assistants.deleteThread(thread_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAssistant = function getAssistant (req, res, next, assistant_id) {
  Assistants.getAssistant(assistant_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getAssistantFile = function getAssistantFile (req, res, next, assistant_id, file_id) {
  Assistants.getAssistantFile(assistant_id, file_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getMessage = function getMessage (req, res, next, thread_id, message_id) {
  Assistants.getMessage(thread_id, message_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getMessageFile = function getMessageFile (req, res, next, thread_id, message_id, file_id) {
  Assistants.getMessageFile(thread_id, message_id, file_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getRun = function getRun (req, res, next, thread_id, run_id) {
  Assistants.getRun(thread_id, run_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getRunStep = function getRunStep (req, res, next, thread_id, run_id, step_id) {
  Assistants.getRunStep(thread_id, run_id, step_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.getThread = function getThread (req, res, next, thread_id) {
  Assistants.getThread(thread_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listAssistantFiles = function listAssistantFiles (req, res, next, assistant_id, limit, order, after, before) {
  Assistants.listAssistantFiles(assistant_id, limit, order, after, before)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listAssistants = function listAssistants (req, res, next, limit, order, after, before) {
  Assistants.listAssistants(limit, order, after, before)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listMessageFiles = function listMessageFiles (req, res, next, thread_id, message_id, limit, order, after, before) {
  Assistants.listMessageFiles(thread_id, message_id, limit, order, after, before)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listMessages = function listMessages (req, res, next, thread_id, limit, order, after, before) {
  Assistants.listMessages(thread_id, limit, order, after, before)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listRunSteps = function listRunSteps (req, res, next, thread_id, run_id, limit, order, after, before) {
  Assistants.listRunSteps(thread_id, run_id, limit, order, after, before)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.listRuns = function listRuns (req, res, next, thread_id, limit, order, after, before) {
  Assistants.listRuns(thread_id, limit, order, after, before)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.modifyMessage = function modifyMessage (req, res, next, body, thread_id, message_id) {
  Assistants.modifyMessage(body, thread_id, message_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.modifyRun = function modifyRun (req, res, next, body, thread_id, run_id) {
  Assistants.modifyRun(body, thread_id, run_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.modifyThread = function modifyThread (req, res, next, body, thread_id) {
  Assistants.modifyThread(body, thread_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};

module.exports.submitToolOuputsToRun = function submitToolOuputsToRun (req, res, next, body, thread_id, run_id) {
  Assistants.submitToolOuputsToRun(body, thread_id, run_id)
    .then(function (response) {
      utils.writeJson(res, response);
    })
    .catch(function (response) {
      utils.writeJson(res, response);
    });
};
