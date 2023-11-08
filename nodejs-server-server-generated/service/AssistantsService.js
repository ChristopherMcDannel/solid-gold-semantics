'use strict';


/**
 * Cancels a run that is `in_progress`.
 *
 * thread_id String The ID of the thread to which this run belongs.
 * run_id String The ID of the run to cancel.
 * returns RunObject
 **/
exports.cancelRun = function(thread_id,run_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "cancelled_at" : 5,
  "instructions" : "instructions",
  "metadata" : { },
  "assistant_id" : "assistant_id",
  "required_action" : {
    "submit_tool_outputs" : {
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
      } ]
    },
    "type" : "submit_tool_outputs"
  },
  "created_at" : 0,
  "tools" : [ "", "", "", "", "", "", "", "", "", "" ],
  "completed_at" : 2,
  "thread_id" : "thread_id",
  "expires_at" : 6,
  "file_ids" : [ "file_ids", "file_ids" ],
  "started_at" : 1,
  "model" : "model",
  "id" : "id",
  "last_error" : {
    "code" : "server_error",
    "message" : "message"
  },
  "failed_at" : 5,
  "object" : "assistant.run",
  "status" : "queued"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create an assistant with a model and instructions.
 *
 * body CreateAssistantRequest 
 * returns AssistantObject
 **/
exports.createAssistant = function(body) {
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


/**
 * Create an assistant file by attaching a [File](/docs/api-reference/files) to an [assistant](/docs/api-reference/assistants).
 *
 * body CreateAssistantFileRequest 
 * assistant_id String The ID of the assistant for which to create a File. 
 * returns AssistantFileObject
 **/
exports.createAssistantFile = function(body,assistant_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "assistant_id" : "assistant_id",
  "created_at" : 0,
  "id" : "id",
  "object" : "assistant.file"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create a message.
 *
 * body CreateMessageRequest 
 * thread_id String The ID of the [thread](/docs/api-reference/threads) to create a message for.
 * returns MessageObject
 **/
exports.createMessage = function(body,thread_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "thread_id" : "thread_id",
  "metadata" : { },
  "role" : "user",
  "assistant_id" : "assistant_id",
  "run_id" : "run_id",
  "file_ids" : [ "file_ids", "file_ids", "file_ids", "file_ids", "file_ids", "file_ids", "file_ids", "file_ids", "file_ids", "file_ids" ],
  "created_at" : 0,
  "id" : "id",
  "content" : [ "", "" ],
  "object" : "thread.message"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create a run.
 *
 * body CreateRunRequest 
 * thread_id String The ID of the thread to run.
 * returns RunObject
 **/
exports.createRun = function(body,thread_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "cancelled_at" : 5,
  "instructions" : "instructions",
  "metadata" : { },
  "assistant_id" : "assistant_id",
  "required_action" : {
    "submit_tool_outputs" : {
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
      } ]
    },
    "type" : "submit_tool_outputs"
  },
  "created_at" : 0,
  "tools" : [ "", "", "", "", "", "", "", "", "", "" ],
  "completed_at" : 2,
  "thread_id" : "thread_id",
  "expires_at" : 6,
  "file_ids" : [ "file_ids", "file_ids" ],
  "started_at" : 1,
  "model" : "model",
  "id" : "id",
  "last_error" : {
    "code" : "server_error",
    "message" : "message"
  },
  "failed_at" : 5,
  "object" : "assistant.run",
  "status" : "queued"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create a thread.
 *
 * body CreateThreadRequest 
 * returns ThreadObject
 **/
exports.createThread = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "metadata" : { },
  "created_at" : 0,
  "id" : "id",
  "object" : "thread"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Create a thread and run it in one request.
 *
 * body CreateThreadAndRunRequest 
 * returns RunObject
 **/
exports.createThreadAndRun = function(body) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "cancelled_at" : 5,
  "instructions" : "instructions",
  "metadata" : { },
  "assistant_id" : "assistant_id",
  "required_action" : {
    "submit_tool_outputs" : {
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
      } ]
    },
    "type" : "submit_tool_outputs"
  },
  "created_at" : 0,
  "tools" : [ "", "", "", "", "", "", "", "", "", "" ],
  "completed_at" : 2,
  "thread_id" : "thread_id",
  "expires_at" : 6,
  "file_ids" : [ "file_ids", "file_ids" ],
  "started_at" : 1,
  "model" : "model",
  "id" : "id",
  "last_error" : {
    "code" : "server_error",
    "message" : "message"
  },
  "failed_at" : 5,
  "object" : "assistant.run",
  "status" : "queued"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete an assistant.
 *
 * assistant_id String The ID of the assistant to delete.
 * returns DeleteAssistantResponse
 **/
exports.deleteAssistant = function(assistant_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "deleted" : true,
  "id" : "id",
  "object" : "assistant.deleted"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete an assistant file.
 *
 * assistant_id String The ID of the assistant that the file belongs to.
 * file_id String The ID of the file to delete.
 * returns DeleteAssistantFileResponse
 **/
exports.deleteAssistantFile = function(assistant_id,file_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "deleted" : true,
  "id" : "id",
  "object" : "assistant.file.deleted"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Delete a thread.
 *
 * thread_id String The ID of the thread to delete.
 * returns DeleteThreadResponse
 **/
exports.deleteThread = function(thread_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "deleted" : true,
  "id" : "id",
  "object" : "thread.deleted"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieves an assistant.
 *
 * assistant_id String The ID of the assistant to retrieve.
 * returns AssistantObject
 **/
exports.getAssistant = function(assistant_id) {
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


/**
 * Retrieves an AssistantFile.
 *
 * assistant_id String The ID of the assistant who the file belongs to.
 * file_id String The ID of the file we're getting.
 * returns AssistantFileObject
 **/
exports.getAssistantFile = function(assistant_id,file_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "assistant_id" : "assistant_id",
  "created_at" : 0,
  "id" : "id",
  "object" : "assistant.file"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieve a message.
 *
 * thread_id String The ID of the [thread](/docs/api-reference/threads) to which this message belongs.
 * message_id String The ID of the message to retrieve.
 * returns MessageObject
 **/
exports.getMessage = function(thread_id,message_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "thread_id" : "thread_id",
  "metadata" : { },
  "role" : "user",
  "assistant_id" : "assistant_id",
  "run_id" : "run_id",
  "file_ids" : [ "file_ids", "file_ids", "file_ids", "file_ids", "file_ids", "file_ids", "file_ids", "file_ids", "file_ids", "file_ids" ],
  "created_at" : 0,
  "id" : "id",
  "content" : [ "", "" ],
  "object" : "thread.message"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieves a message file.
 *
 * thread_id String The ID of the thread to which the message and File belong.
 * message_id String The ID of the message the file belongs to.
 * file_id String The ID of the file being retrieved.
 * returns MessageFileObject
 **/
exports.getMessageFile = function(thread_id,message_id,file_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "created_at" : 0,
  "message_id" : "message_id",
  "id" : "id",
  "object" : "thread.message.file"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieves a run.
 *
 * thread_id String The ID of the [thread](/docs/api-reference/threads) that was run.
 * run_id String The ID of the run to retrieve.
 * returns RunObject
 **/
exports.getRun = function(thread_id,run_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "cancelled_at" : 5,
  "instructions" : "instructions",
  "metadata" : { },
  "assistant_id" : "assistant_id",
  "required_action" : {
    "submit_tool_outputs" : {
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
      } ]
    },
    "type" : "submit_tool_outputs"
  },
  "created_at" : 0,
  "tools" : [ "", "", "", "", "", "", "", "", "", "" ],
  "completed_at" : 2,
  "thread_id" : "thread_id",
  "expires_at" : 6,
  "file_ids" : [ "file_ids", "file_ids" ],
  "started_at" : 1,
  "model" : "model",
  "id" : "id",
  "last_error" : {
    "code" : "server_error",
    "message" : "message"
  },
  "failed_at" : 5,
  "object" : "assistant.run",
  "status" : "queued"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieves a run step.
 *
 * thread_id String The ID of the thread to which the run and run step belongs.
 * run_id String The ID of the run to which the run step belongs.
 * step_id String The ID of the run step to retrieve.
 * returns RunStepObject
 **/
exports.getRunStep = function(thread_id,run_id,step_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "cancelled_at" : 1,
  "metadata" : { },
  "assistant_id" : "assistant_id",
  "run_id" : "run_id",
  "created_at" : 0,
  "expired_at" : 6,
  "type" : "message_creation",
  "step_details" : "",
  "completed_at" : 5,
  "thread_id" : "thread_id",
  "id" : "id",
  "last_error" : {
    "code" : "server_error",
    "message" : "message"
  },
  "failed_at" : 5,
  "object" : "assistant.run.step",
  "status" : "in_progress"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Retrieves a thread.
 *
 * thread_id String The ID of the thread to retrieve.
 * returns ThreadObject
 **/
exports.getThread = function(thread_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "metadata" : { },
  "created_at" : 0,
  "id" : "id",
  "object" : "thread"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Returns a list of assistant files.
 *
 * assistant_id String The ID of the assistant the file belongs to.
 * limit Integer A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.  (optional)
 * order String Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.  (optional)
 * after String A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.  (optional)
 * before String A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.  (optional)
 * returns ListAssistantFilesResponse
 **/
exports.listAssistantFiles = function(assistant_id,limit,order,after,before) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "first_id" : "file-hLBK7PXBv5Lr2NQT7KLY0ag1",
  "data" : [ {
    "assistant_id" : "assistant_id",
    "created_at" : 0,
    "id" : "id",
    "object" : "assistant.file"
  }, {
    "assistant_id" : "assistant_id",
    "created_at" : 0,
    "id" : "id",
    "object" : "assistant.file"
  } ],
  "last_id" : "file-QLoItBbqwyAJEzlTy4y9kOMM",
  "has_more" : false,
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
 * Returns a list of assistants.
 *
 * limit Integer A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.  (optional)
 * order String Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.  (optional)
 * after String A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.  (optional)
 * before String A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.  (optional)
 * returns ListAssistantsResponse
 **/
exports.listAssistants = function(limit,order,after,before) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "first_id" : "asst_hLBK7PXBv5Lr2NQT7KLY0ag1",
  "data" : [ {
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
  }, {
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
  } ],
  "last_id" : "asst_QLoItBbqwyAJEzlTy4y9kOMM",
  "has_more" : false,
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
 * Returns a list of message files.
 *
 * thread_id String The ID of the thread that the message and files belong to.
 * message_id String The ID of the message that the files belongs to.
 * limit Integer A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.  (optional)
 * order String Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.  (optional)
 * after String A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.  (optional)
 * before String A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.  (optional)
 * returns ListMessageFilesResponse
 **/
exports.listMessageFiles = function(thread_id,message_id,limit,order,after,before) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "first_id" : "file-hLBK7PXBv5Lr2NQT7KLY0ag1",
  "data" : [ {
    "created_at" : 0,
    "message_id" : "message_id",
    "id" : "id",
    "object" : "thread.message.file"
  }, {
    "created_at" : 0,
    "message_id" : "message_id",
    "id" : "id",
    "object" : "thread.message.file"
  } ],
  "last_id" : "file-QLoItBbqwyAJEzlTy4y9kOMM",
  "has_more" : false,
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
 * Returns a list of messages for a given thread.
 *
 * thread_id String The ID of the [thread](/docs/api-reference/threads) the messages belong to.
 * limit Integer A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.  (optional)
 * order String Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.  (optional)
 * after String A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.  (optional)
 * before String A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.  (optional)
 * returns ListMessagesResponse
 **/
exports.listMessages = function(thread_id,limit,order,after,before) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "first_id" : "msg_hLBK7PXBv5Lr2NQT7KLY0ag1",
  "data" : [ {
    "thread_id" : "thread_id",
    "metadata" : { },
    "role" : "user",
    "assistant_id" : "assistant_id",
    "run_id" : "run_id",
    "file_ids" : [ "file_ids", "file_ids", "file_ids", "file_ids", "file_ids", "file_ids", "file_ids", "file_ids", "file_ids", "file_ids" ],
    "created_at" : 0,
    "id" : "id",
    "content" : [ "", "" ],
    "object" : "thread.message"
  }, {
    "thread_id" : "thread_id",
    "metadata" : { },
    "role" : "user",
    "assistant_id" : "assistant_id",
    "run_id" : "run_id",
    "file_ids" : [ "file_ids", "file_ids", "file_ids", "file_ids", "file_ids", "file_ids", "file_ids", "file_ids", "file_ids", "file_ids" ],
    "created_at" : 0,
    "id" : "id",
    "content" : [ "", "" ],
    "object" : "thread.message"
  } ],
  "last_id" : "msg_QLoItBbqwyAJEzlTy4y9kOMM",
  "has_more" : false,
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
 * Returns a list of run steps belonging to a run.
 *
 * thread_id String The ID of the thread the run and run steps belong to.
 * run_id String The ID of the run the run steps belong to.
 * limit Integer A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.  (optional)
 * order String Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.  (optional)
 * after String A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.  (optional)
 * before String A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.  (optional)
 * returns ListRunStepsResponse
 **/
exports.listRunSteps = function(thread_id,run_id,limit,order,after,before) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "first_id" : "step_hLBK7PXBv5Lr2NQT7KLY0ag1",
  "data" : [ {
    "cancelled_at" : 1,
    "metadata" : { },
    "assistant_id" : "assistant_id",
    "run_id" : "run_id",
    "created_at" : 0,
    "expired_at" : 6,
    "type" : "message_creation",
    "step_details" : "",
    "completed_at" : 5,
    "thread_id" : "thread_id",
    "id" : "id",
    "last_error" : {
      "code" : "server_error",
      "message" : "message"
    },
    "failed_at" : 5,
    "object" : "assistant.run.step",
    "status" : "in_progress"
  }, {
    "cancelled_at" : 1,
    "metadata" : { },
    "assistant_id" : "assistant_id",
    "run_id" : "run_id",
    "created_at" : 0,
    "expired_at" : 6,
    "type" : "message_creation",
    "step_details" : "",
    "completed_at" : 5,
    "thread_id" : "thread_id",
    "id" : "id",
    "last_error" : {
      "code" : "server_error",
      "message" : "message"
    },
    "failed_at" : 5,
    "object" : "assistant.run.step",
    "status" : "in_progress"
  } ],
  "last_id" : "step_QLoItBbqwyAJEzlTy4y9kOMM",
  "has_more" : false,
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
 * Returns a list of runs belonging to a thread.
 *
 * thread_id String The ID of the thread the run belongs to.
 * limit Integer A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.  (optional)
 * order String Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order.  (optional)
 * after String A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list.  (optional)
 * before String A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list.  (optional)
 * returns ListRunsResponse
 **/
exports.listRuns = function(thread_id,limit,order,after,before) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "first_id" : "run_hLBK7PXBv5Lr2NQT7KLY0ag1",
  "data" : [ {
    "cancelled_at" : 5,
    "instructions" : "instructions",
    "metadata" : { },
    "assistant_id" : "assistant_id",
    "required_action" : {
      "submit_tool_outputs" : {
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
        } ]
      },
      "type" : "submit_tool_outputs"
    },
    "created_at" : 0,
    "tools" : [ "", "", "", "", "", "", "", "", "", "" ],
    "completed_at" : 2,
    "thread_id" : "thread_id",
    "expires_at" : 6,
    "file_ids" : [ "file_ids", "file_ids" ],
    "started_at" : 1,
    "model" : "model",
    "id" : "id",
    "last_error" : {
      "code" : "server_error",
      "message" : "message"
    },
    "failed_at" : 5,
    "object" : "assistant.run",
    "status" : "queued"
  }, {
    "cancelled_at" : 5,
    "instructions" : "instructions",
    "metadata" : { },
    "assistant_id" : "assistant_id",
    "required_action" : {
      "submit_tool_outputs" : {
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
        } ]
      },
      "type" : "submit_tool_outputs"
    },
    "created_at" : 0,
    "tools" : [ "", "", "", "", "", "", "", "", "", "" ],
    "completed_at" : 2,
    "thread_id" : "thread_id",
    "expires_at" : 6,
    "file_ids" : [ "file_ids", "file_ids" ],
    "started_at" : 1,
    "model" : "model",
    "id" : "id",
    "last_error" : {
      "code" : "server_error",
      "message" : "message"
    },
    "failed_at" : 5,
    "object" : "assistant.run",
    "status" : "queued"
  } ],
  "last_id" : "run_QLoItBbqwyAJEzlTy4y9kOMM",
  "has_more" : false,
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
 * Modifies a message.
 *
 * body ModifyMessageRequest 
 * thread_id String The ID of the thread to which this message belongs.
 * message_id String The ID of the message to modify.
 * returns MessageObject
 **/
exports.modifyMessage = function(body,thread_id,message_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "thread_id" : "thread_id",
  "metadata" : { },
  "role" : "user",
  "assistant_id" : "assistant_id",
  "run_id" : "run_id",
  "file_ids" : [ "file_ids", "file_ids", "file_ids", "file_ids", "file_ids", "file_ids", "file_ids", "file_ids", "file_ids", "file_ids" ],
  "created_at" : 0,
  "id" : "id",
  "content" : [ "", "" ],
  "object" : "thread.message"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Modifies a run.
 *
 * body ModifyRunRequest 
 * thread_id String The ID of the [thread](/docs/api-reference/threads) that was run.
 * run_id String The ID of the run to modify.
 * returns RunObject
 **/
exports.modifyRun = function(body,thread_id,run_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "cancelled_at" : 5,
  "instructions" : "instructions",
  "metadata" : { },
  "assistant_id" : "assistant_id",
  "required_action" : {
    "submit_tool_outputs" : {
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
      } ]
    },
    "type" : "submit_tool_outputs"
  },
  "created_at" : 0,
  "tools" : [ "", "", "", "", "", "", "", "", "", "" ],
  "completed_at" : 2,
  "thread_id" : "thread_id",
  "expires_at" : 6,
  "file_ids" : [ "file_ids", "file_ids" ],
  "started_at" : 1,
  "model" : "model",
  "id" : "id",
  "last_error" : {
    "code" : "server_error",
    "message" : "message"
  },
  "failed_at" : 5,
  "object" : "assistant.run",
  "status" : "queued"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * Modifies a thread.
 *
 * body ModifyThreadRequest 
 * thread_id String The ID of the thread to modify. Only the `metadata` can be modified.
 * returns ThreadObject
 **/
exports.modifyThread = function(body,thread_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "metadata" : { },
  "created_at" : 0,
  "id" : "id",
  "object" : "thread"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}


/**
 * When a run has the `status: \"requires_action\"` and `required_action.type` is `submit_tool_outputs`, this endpoint can be used to submit the outputs from the tool calls once they're all completed. All outputs must be submitted in a single request. 
 *
 * body SubmitToolOutputsRunRequest 
 * thread_id String The ID of the [thread](/docs/api-reference/threads) to which this run belongs.
 * run_id String The ID of the run that requires the tool output submission.
 * returns RunObject
 **/
exports.submitToolOuputsToRun = function(body,thread_id,run_id) {
  return new Promise(function(resolve, reject) {
    var examples = {};
    examples['application/json'] = {
  "cancelled_at" : 5,
  "instructions" : "instructions",
  "metadata" : { },
  "assistant_id" : "assistant_id",
  "required_action" : {
    "submit_tool_outputs" : {
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
      } ]
    },
    "type" : "submit_tool_outputs"
  },
  "created_at" : 0,
  "tools" : [ "", "", "", "", "", "", "", "", "", "" ],
  "completed_at" : 2,
  "thread_id" : "thread_id",
  "expires_at" : 6,
  "file_ids" : [ "file_ids", "file_ids" ],
  "started_at" : 1,
  "model" : "model",
  "id" : "id",
  "last_error" : {
    "code" : "server_error",
    "message" : "message"
  },
  "failed_at" : 5,
  "object" : "assistant.run",
  "status" : "queued"
};
    if (Object.keys(examples).length > 0) {
      resolve(examples[Object.keys(examples)[0]]);
    } else {
      resolve();
    }
  });
}

