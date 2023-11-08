# OpenAiApi.AssistantsApi

All URIs are relative to *https://api.openai.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelRun**](AssistantsApi.md#cancelRun) | **POST** /threads/{thread_id}/runs/{run_id}/cancel | Cancels a run that is &#x60;in_progress&#x60;.
[**createAssistant**](AssistantsApi.md#createAssistant) | **POST** /assistants | Create an assistant with a model and instructions.
[**createAssistantFile**](AssistantsApi.md#createAssistantFile) | **POST** /assistants/{assistant_id}/files | Create an assistant file by attaching a [File](/docs/api-reference/files) to an [assistant](/docs/api-reference/assistants).
[**createMessage**](AssistantsApi.md#createMessage) | **POST** /threads/{thread_id}/messages | Create a message.
[**createRun**](AssistantsApi.md#createRun) | **POST** /threads/{thread_id}/runs | Create a run.
[**createThread**](AssistantsApi.md#createThread) | **POST** /threads | Create a thread.
[**createThreadAndRun**](AssistantsApi.md#createThreadAndRun) | **POST** /threads/runs | Create a thread and run it in one request.
[**deleteAssistant**](AssistantsApi.md#deleteAssistant) | **DELETE** /assistants/{assistant_id} | Delete an assistant.
[**deleteAssistantFile**](AssistantsApi.md#deleteAssistantFile) | **DELETE** /assistants/{assistant_id}/files/{file_id} | Delete an assistant file.
[**deleteThread**](AssistantsApi.md#deleteThread) | **DELETE** /threads/{thread_id} | Delete a thread.
[**getAssistant**](AssistantsApi.md#getAssistant) | **GET** /assistants/{assistant_id} | Retrieves an assistant.
[**getAssistantFile**](AssistantsApi.md#getAssistantFile) | **GET** /assistants/{assistant_id}/files/{file_id} | Retrieves an AssistantFile.
[**getMessage**](AssistantsApi.md#getMessage) | **GET** /threads/{thread_id}/messages/{message_id} | Retrieve a message.
[**getMessageFile**](AssistantsApi.md#getMessageFile) | **GET** /threads/{thread_id}/messages/{message_id}/files/{file_id} | Retrieves a message file.
[**getRun**](AssistantsApi.md#getRun) | **GET** /threads/{thread_id}/runs/{run_id} | Retrieves a run.
[**getRunStep**](AssistantsApi.md#getRunStep) | **GET** /threads/{thread_id}/runs/{run_id}/steps/{step_id} | Retrieves a run step.
[**getThread**](AssistantsApi.md#getThread) | **GET** /threads/{thread_id} | Retrieves a thread.
[**listAssistantFiles**](AssistantsApi.md#listAssistantFiles) | **GET** /assistants/{assistant_id}/files | Returns a list of assistant files.
[**listAssistants**](AssistantsApi.md#listAssistants) | **GET** /assistants | Returns a list of assistants.
[**listMessageFiles**](AssistantsApi.md#listMessageFiles) | **GET** /threads/{thread_id}/messages/{message_id}/files | Returns a list of message files.
[**listMessages**](AssistantsApi.md#listMessages) | **GET** /threads/{thread_id}/messages | Returns a list of messages for a given thread.
[**listRunSteps**](AssistantsApi.md#listRunSteps) | **GET** /threads/{thread_id}/runs/{run_id}/steps | Returns a list of run steps belonging to a run.
[**listRuns**](AssistantsApi.md#listRuns) | **GET** /threads/{thread_id}/runs | Returns a list of runs belonging to a thread.
[**modifyMessage**](AssistantsApi.md#modifyMessage) | **POST** /threads/{thread_id}/messages/{message_id} | Modifies a message.
[**modifyRun**](AssistantsApi.md#modifyRun) | **POST** /threads/{thread_id}/runs/{run_id} | Modifies a run.
[**modifyThread**](AssistantsApi.md#modifyThread) | **POST** /threads/{thread_id} | Modifies a thread.
[**submitToolOuputsToRun**](AssistantsApi.md#submitToolOuputsToRun) | **POST** /threads/{thread_id}/runs/{run_id}/submit_tool_outputs | When a run has the &#x60;status: \&quot;requires_action\&quot;&#x60; and &#x60;required_action.type&#x60; is &#x60;submit_tool_outputs&#x60;, this endpoint can be used to submit the outputs from the tool calls once they&#x27;re all completed. All outputs must be submitted in a single request. 

<a name="cancelRun"></a>
# **cancelRun**
> RunObject cancelRun(threadId, runId)

Cancels a run that is &#x60;in_progress&#x60;.

### Example
```javascript
import {OpenAiApi} from 'open_ai_api';
let defaultClient = OpenAiApi.ApiClient.instance;


let apiInstance = new OpenAiApi.AssistantsApi();
let threadId = "threadId_example"; // String | The ID of the thread to which this run belongs.
let runId = "runId_example"; // String | The ID of the run to cancel.

apiInstance.cancelRun(threadId, runId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **threadId** | **String**| The ID of the thread to which this run belongs. | 
 **runId** | **String**| The ID of the run to cancel. | 

### Return type

[**RunObject**](RunObject.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="createAssistant"></a>
# **createAssistant**
> AssistantObject createAssistant(body)

Create an assistant with a model and instructions.

### Example
```javascript
import {OpenAiApi} from 'open_ai_api';
let defaultClient = OpenAiApi.ApiClient.instance;


let apiInstance = new OpenAiApi.AssistantsApi();
let body = new OpenAiApi.CreateAssistantRequest(); // CreateAssistantRequest | 

apiInstance.createAssistant(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateAssistantRequest**](CreateAssistantRequest.md)|  | 

### Return type

[**AssistantObject**](AssistantObject.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createAssistantFile"></a>
# **createAssistantFile**
> AssistantFileObject createAssistantFile(body, assistantId)

Create an assistant file by attaching a [File](/docs/api-reference/files) to an [assistant](/docs/api-reference/assistants).

### Example
```javascript
import {OpenAiApi} from 'open_ai_api';
let defaultClient = OpenAiApi.ApiClient.instance;


let apiInstance = new OpenAiApi.AssistantsApi();
let body = new OpenAiApi.CreateAssistantFileRequest(); // CreateAssistantFileRequest | 
let assistantId = "assistantId_example"; // String | The ID of the assistant for which to create a File. 

apiInstance.createAssistantFile(body, assistantId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateAssistantFileRequest**](CreateAssistantFileRequest.md)|  | 
 **assistantId** | **String**| The ID of the assistant for which to create a File.  | 

### Return type

[**AssistantFileObject**](AssistantFileObject.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createMessage"></a>
# **createMessage**
> MessageObject createMessage(body, threadId)

Create a message.

### Example
```javascript
import {OpenAiApi} from 'open_ai_api';
let defaultClient = OpenAiApi.ApiClient.instance;


let apiInstance = new OpenAiApi.AssistantsApi();
let body = new OpenAiApi.CreateMessageRequest(); // CreateMessageRequest | 
let threadId = "threadId_example"; // String | The ID of the [thread](/docs/api-reference/threads) to create a message for.

apiInstance.createMessage(body, threadId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateMessageRequest**](CreateMessageRequest.md)|  | 
 **threadId** | **String**| The ID of the [thread](/docs/api-reference/threads) to create a message for. | 

### Return type

[**MessageObject**](MessageObject.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createRun"></a>
# **createRun**
> RunObject createRun(body, threadId)

Create a run.

### Example
```javascript
import {OpenAiApi} from 'open_ai_api';
let defaultClient = OpenAiApi.ApiClient.instance;


let apiInstance = new OpenAiApi.AssistantsApi();
let body = new OpenAiApi.CreateRunRequest(); // CreateRunRequest | 
let threadId = "threadId_example"; // String | The ID of the thread to run.

apiInstance.createRun(body, threadId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateRunRequest**](CreateRunRequest.md)|  | 
 **threadId** | **String**| The ID of the thread to run. | 

### Return type

[**RunObject**](RunObject.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createThread"></a>
# **createThread**
> ThreadObject createThread(body)

Create a thread.

### Example
```javascript
import {OpenAiApi} from 'open_ai_api';
let defaultClient = OpenAiApi.ApiClient.instance;


let apiInstance = new OpenAiApi.AssistantsApi();
let body = new OpenAiApi.CreateThreadRequest(); // CreateThreadRequest | 

apiInstance.createThread(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateThreadRequest**](CreateThreadRequest.md)|  | 

### Return type

[**ThreadObject**](ThreadObject.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createThreadAndRun"></a>
# **createThreadAndRun**
> RunObject createThreadAndRun(body)

Create a thread and run it in one request.

### Example
```javascript
import {OpenAiApi} from 'open_ai_api';
let defaultClient = OpenAiApi.ApiClient.instance;


let apiInstance = new OpenAiApi.AssistantsApi();
let body = new OpenAiApi.CreateThreadAndRunRequest(); // CreateThreadAndRunRequest | 

apiInstance.createThreadAndRun(body, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**CreateThreadAndRunRequest**](CreateThreadAndRunRequest.md)|  | 

### Return type

[**RunObject**](RunObject.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="deleteAssistant"></a>
# **deleteAssistant**
> DeleteAssistantResponse deleteAssistant(assistantId)

Delete an assistant.

### Example
```javascript
import {OpenAiApi} from 'open_ai_api';
let defaultClient = OpenAiApi.ApiClient.instance;


let apiInstance = new OpenAiApi.AssistantsApi();
let assistantId = "assistantId_example"; // String | The ID of the assistant to delete.

apiInstance.deleteAssistant(assistantId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assistantId** | **String**| The ID of the assistant to delete. | 

### Return type

[**DeleteAssistantResponse**](DeleteAssistantResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteAssistantFile"></a>
# **deleteAssistantFile**
> DeleteAssistantFileResponse deleteAssistantFile(assistantId, fileId)

Delete an assistant file.

### Example
```javascript
import {OpenAiApi} from 'open_ai_api';
let defaultClient = OpenAiApi.ApiClient.instance;


let apiInstance = new OpenAiApi.AssistantsApi();
let assistantId = "assistantId_example"; // String | The ID of the assistant that the file belongs to.
let fileId = "fileId_example"; // String | The ID of the file to delete.

apiInstance.deleteAssistantFile(assistantId, fileId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assistantId** | **String**| The ID of the assistant that the file belongs to. | 
 **fileId** | **String**| The ID of the file to delete. | 

### Return type

[**DeleteAssistantFileResponse**](DeleteAssistantFileResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="deleteThread"></a>
# **deleteThread**
> DeleteThreadResponse deleteThread(threadId)

Delete a thread.

### Example
```javascript
import {OpenAiApi} from 'open_ai_api';
let defaultClient = OpenAiApi.ApiClient.instance;


let apiInstance = new OpenAiApi.AssistantsApi();
let threadId = "threadId_example"; // String | The ID of the thread to delete.

apiInstance.deleteThread(threadId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **threadId** | **String**| The ID of the thread to delete. | 

### Return type

[**DeleteThreadResponse**](DeleteThreadResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAssistant"></a>
# **getAssistant**
> AssistantObject getAssistant(assistantId)

Retrieves an assistant.

### Example
```javascript
import {OpenAiApi} from 'open_ai_api';
let defaultClient = OpenAiApi.ApiClient.instance;


let apiInstance = new OpenAiApi.AssistantsApi();
let assistantId = "assistantId_example"; // String | The ID of the assistant to retrieve.

apiInstance.getAssistant(assistantId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assistantId** | **String**| The ID of the assistant to retrieve. | 

### Return type

[**AssistantObject**](AssistantObject.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getAssistantFile"></a>
# **getAssistantFile**
> AssistantFileObject getAssistantFile(assistantId, fileId)

Retrieves an AssistantFile.

### Example
```javascript
import {OpenAiApi} from 'open_ai_api';
let defaultClient = OpenAiApi.ApiClient.instance;


let apiInstance = new OpenAiApi.AssistantsApi();
let assistantId = "assistantId_example"; // String | The ID of the assistant who the file belongs to.
let fileId = "fileId_example"; // String | The ID of the file we're getting.

apiInstance.getAssistantFile(assistantId, fileId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assistantId** | **String**| The ID of the assistant who the file belongs to. | 
 **fileId** | **String**| The ID of the file we&#x27;re getting. | 

### Return type

[**AssistantFileObject**](AssistantFileObject.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getMessage"></a>
# **getMessage**
> MessageObject getMessage(threadId, messageId)

Retrieve a message.

### Example
```javascript
import {OpenAiApi} from 'open_ai_api';
let defaultClient = OpenAiApi.ApiClient.instance;


let apiInstance = new OpenAiApi.AssistantsApi();
let threadId = "threadId_example"; // String | The ID of the [thread](/docs/api-reference/threads) to which this message belongs.
let messageId = "messageId_example"; // String | The ID of the message to retrieve.

apiInstance.getMessage(threadId, messageId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **threadId** | **String**| The ID of the [thread](/docs/api-reference/threads) to which this message belongs. | 
 **messageId** | **String**| The ID of the message to retrieve. | 

### Return type

[**MessageObject**](MessageObject.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getMessageFile"></a>
# **getMessageFile**
> MessageFileObject getMessageFile(threadId, messageId, fileId)

Retrieves a message file.

### Example
```javascript
import {OpenAiApi} from 'open_ai_api';
let defaultClient = OpenAiApi.ApiClient.instance;


let apiInstance = new OpenAiApi.AssistantsApi();
let threadId = "threadId_example"; // String | The ID of the thread to which the message and File belong.
let messageId = "messageId_example"; // String | The ID of the message the file belongs to.
let fileId = "fileId_example"; // String | The ID of the file being retrieved.

apiInstance.getMessageFile(threadId, messageId, fileId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **threadId** | **String**| The ID of the thread to which the message and File belong. | 
 **messageId** | **String**| The ID of the message the file belongs to. | 
 **fileId** | **String**| The ID of the file being retrieved. | 

### Return type

[**MessageFileObject**](MessageFileObject.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getRun"></a>
# **getRun**
> RunObject getRun(threadId, runId)

Retrieves a run.

### Example
```javascript
import {OpenAiApi} from 'open_ai_api';
let defaultClient = OpenAiApi.ApiClient.instance;


let apiInstance = new OpenAiApi.AssistantsApi();
let threadId = "threadId_example"; // String | The ID of the [thread](/docs/api-reference/threads) that was run.
let runId = "runId_example"; // String | The ID of the run to retrieve.

apiInstance.getRun(threadId, runId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **threadId** | **String**| The ID of the [thread](/docs/api-reference/threads) that was run. | 
 **runId** | **String**| The ID of the run to retrieve. | 

### Return type

[**RunObject**](RunObject.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getRunStep"></a>
# **getRunStep**
> RunStepObject getRunStep(threadId, runId, stepId)

Retrieves a run step.

### Example
```javascript
import {OpenAiApi} from 'open_ai_api';
let defaultClient = OpenAiApi.ApiClient.instance;


let apiInstance = new OpenAiApi.AssistantsApi();
let threadId = "threadId_example"; // String | The ID of the thread to which the run and run step belongs.
let runId = "runId_example"; // String | The ID of the run to which the run step belongs.
let stepId = "stepId_example"; // String | The ID of the run step to retrieve.

apiInstance.getRunStep(threadId, runId, stepId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **threadId** | **String**| The ID of the thread to which the run and run step belongs. | 
 **runId** | **String**| The ID of the run to which the run step belongs. | 
 **stepId** | **String**| The ID of the run step to retrieve. | 

### Return type

[**RunStepObject**](RunStepObject.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="getThread"></a>
# **getThread**
> ThreadObject getThread(threadId)

Retrieves a thread.

### Example
```javascript
import {OpenAiApi} from 'open_ai_api';
let defaultClient = OpenAiApi.ApiClient.instance;


let apiInstance = new OpenAiApi.AssistantsApi();
let threadId = "threadId_example"; // String | The ID of the thread to retrieve.

apiInstance.getThread(threadId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **threadId** | **String**| The ID of the thread to retrieve. | 

### Return type

[**ThreadObject**](ThreadObject.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listAssistantFiles"></a>
# **listAssistantFiles**
> ListAssistantFilesResponse listAssistantFiles(assistantId, opts)

Returns a list of assistant files.

### Example
```javascript
import {OpenAiApi} from 'open_ai_api';
let defaultClient = OpenAiApi.ApiClient.instance;


let apiInstance = new OpenAiApi.AssistantsApi();
let assistantId = "assistantId_example"; // String | The ID of the assistant the file belongs to.
let opts = { 
  'limit': 20, // Number | A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20. 
  'order': "desc", // String | Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order. 
  'after': "after_example", // String | A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list. 
  'before': "before_example" // String | A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list. 
};
apiInstance.listAssistantFiles(assistantId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **assistantId** | **String**| The ID of the assistant the file belongs to. | 
 **limit** | **Number**| A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.  | [optional] [default to 20]
 **order** | **String**| Sort order by the &#x60;created_at&#x60; timestamp of the objects. &#x60;asc&#x60; for ascending order and &#x60;desc&#x60; for descending order.  | [optional] [default to desc]
 **after** | **String**| A cursor for use in pagination. &#x60;after&#x60; is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after&#x3D;obj_foo in order to fetch the next page of the list.  | [optional] 
 **before** | **String**| A cursor for use in pagination. &#x60;before&#x60; is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include before&#x3D;obj_foo in order to fetch the previous page of the list.  | [optional] 

### Return type

[**ListAssistantFilesResponse**](ListAssistantFilesResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listAssistants"></a>
# **listAssistants**
> ListAssistantsResponse listAssistants(opts)

Returns a list of assistants.

### Example
```javascript
import {OpenAiApi} from 'open_ai_api';
let defaultClient = OpenAiApi.ApiClient.instance;


let apiInstance = new OpenAiApi.AssistantsApi();
let opts = { 
  'limit': 20, // Number | A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20. 
  'order': "desc", // String | Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order. 
  'after': "after_example", // String | A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list. 
  'before': "before_example" // String | A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list. 
};
apiInstance.listAssistants(opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **limit** | **Number**| A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.  | [optional] [default to 20]
 **order** | **String**| Sort order by the &#x60;created_at&#x60; timestamp of the objects. &#x60;asc&#x60; for ascending order and &#x60;desc&#x60; for descending order.  | [optional] [default to desc]
 **after** | **String**| A cursor for use in pagination. &#x60;after&#x60; is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after&#x3D;obj_foo in order to fetch the next page of the list.  | [optional] 
 **before** | **String**| A cursor for use in pagination. &#x60;before&#x60; is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include before&#x3D;obj_foo in order to fetch the previous page of the list.  | [optional] 

### Return type

[**ListAssistantsResponse**](ListAssistantsResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listMessageFiles"></a>
# **listMessageFiles**
> ListMessageFilesResponse listMessageFiles(threadId, messageId, opts)

Returns a list of message files.

### Example
```javascript
import {OpenAiApi} from 'open_ai_api';
let defaultClient = OpenAiApi.ApiClient.instance;


let apiInstance = new OpenAiApi.AssistantsApi();
let threadId = "threadId_example"; // String | The ID of the thread that the message and files belong to.
let messageId = "messageId_example"; // String | The ID of the message that the files belongs to.
let opts = { 
  'limit': 20, // Number | A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20. 
  'order': "desc", // String | Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order. 
  'after': "after_example", // String | A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list. 
  'before': "before_example" // String | A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list. 
};
apiInstance.listMessageFiles(threadId, messageId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **threadId** | **String**| The ID of the thread that the message and files belong to. | 
 **messageId** | **String**| The ID of the message that the files belongs to. | 
 **limit** | **Number**| A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.  | [optional] [default to 20]
 **order** | **String**| Sort order by the &#x60;created_at&#x60; timestamp of the objects. &#x60;asc&#x60; for ascending order and &#x60;desc&#x60; for descending order.  | [optional] [default to desc]
 **after** | **String**| A cursor for use in pagination. &#x60;after&#x60; is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after&#x3D;obj_foo in order to fetch the next page of the list.  | [optional] 
 **before** | **String**| A cursor for use in pagination. &#x60;before&#x60; is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include before&#x3D;obj_foo in order to fetch the previous page of the list.  | [optional] 

### Return type

[**ListMessageFilesResponse**](ListMessageFilesResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listMessages"></a>
# **listMessages**
> ListMessagesResponse listMessages(threadId, opts)

Returns a list of messages for a given thread.

### Example
```javascript
import {OpenAiApi} from 'open_ai_api';
let defaultClient = OpenAiApi.ApiClient.instance;


let apiInstance = new OpenAiApi.AssistantsApi();
let threadId = "threadId_example"; // String | The ID of the [thread](/docs/api-reference/threads) the messages belong to.
let opts = { 
  'limit': 20, // Number | A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20. 
  'order': "desc", // String | Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order. 
  'after': "after_example", // String | A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list. 
  'before': "before_example" // String | A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list. 
};
apiInstance.listMessages(threadId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **threadId** | **String**| The ID of the [thread](/docs/api-reference/threads) the messages belong to. | 
 **limit** | **Number**| A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.  | [optional] [default to 20]
 **order** | **String**| Sort order by the &#x60;created_at&#x60; timestamp of the objects. &#x60;asc&#x60; for ascending order and &#x60;desc&#x60; for descending order.  | [optional] [default to desc]
 **after** | **String**| A cursor for use in pagination. &#x60;after&#x60; is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after&#x3D;obj_foo in order to fetch the next page of the list.  | [optional] 
 **before** | **String**| A cursor for use in pagination. &#x60;before&#x60; is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include before&#x3D;obj_foo in order to fetch the previous page of the list.  | [optional] 

### Return type

[**ListMessagesResponse**](ListMessagesResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listRunSteps"></a>
# **listRunSteps**
> ListRunStepsResponse listRunSteps(threadId, runId, opts)

Returns a list of run steps belonging to a run.

### Example
```javascript
import {OpenAiApi} from 'open_ai_api';
let defaultClient = OpenAiApi.ApiClient.instance;


let apiInstance = new OpenAiApi.AssistantsApi();
let threadId = "threadId_example"; // String | The ID of the thread the run and run steps belong to.
let runId = "runId_example"; // String | The ID of the run the run steps belong to.
let opts = { 
  'limit': 20, // Number | A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20. 
  'order': "desc", // String | Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order. 
  'after': "after_example", // String | A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list. 
  'before': "before_example" // String | A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list. 
};
apiInstance.listRunSteps(threadId, runId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **threadId** | **String**| The ID of the thread the run and run steps belong to. | 
 **runId** | **String**| The ID of the run the run steps belong to. | 
 **limit** | **Number**| A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.  | [optional] [default to 20]
 **order** | **String**| Sort order by the &#x60;created_at&#x60; timestamp of the objects. &#x60;asc&#x60; for ascending order and &#x60;desc&#x60; for descending order.  | [optional] [default to desc]
 **after** | **String**| A cursor for use in pagination. &#x60;after&#x60; is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after&#x3D;obj_foo in order to fetch the next page of the list.  | [optional] 
 **before** | **String**| A cursor for use in pagination. &#x60;before&#x60; is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include before&#x3D;obj_foo in order to fetch the previous page of the list.  | [optional] 

### Return type

[**ListRunStepsResponse**](ListRunStepsResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listRuns"></a>
# **listRuns**
> ListRunsResponse listRuns(threadId, opts)

Returns a list of runs belonging to a thread.

### Example
```javascript
import {OpenAiApi} from 'open_ai_api';
let defaultClient = OpenAiApi.ApiClient.instance;


let apiInstance = new OpenAiApi.AssistantsApi();
let threadId = "threadId_example"; // String | The ID of the thread the run belongs to.
let opts = { 
  'limit': 20, // Number | A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20. 
  'order': "desc", // String | Sort order by the `created_at` timestamp of the objects. `asc` for ascending order and `desc` for descending order. 
  'after': "after_example", // String | A cursor for use in pagination. `after` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after=obj_foo in order to fetch the next page of the list. 
  'before': "before_example" // String | A cursor for use in pagination. `before` is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include before=obj_foo in order to fetch the previous page of the list. 
};
apiInstance.listRuns(threadId, opts, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **threadId** | **String**| The ID of the thread the run belongs to. | 
 **limit** | **Number**| A limit on the number of objects to be returned. Limit can range between 1 and 100, and the default is 20.  | [optional] [default to 20]
 **order** | **String**| Sort order by the &#x60;created_at&#x60; timestamp of the objects. &#x60;asc&#x60; for ascending order and &#x60;desc&#x60; for descending order.  | [optional] [default to desc]
 **after** | **String**| A cursor for use in pagination. &#x60;after&#x60; is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include after&#x3D;obj_foo in order to fetch the next page of the list.  | [optional] 
 **before** | **String**| A cursor for use in pagination. &#x60;before&#x60; is an object ID that defines your place in the list. For instance, if you make a list request and receive 100 objects, ending with obj_foo, your subsequent call can include before&#x3D;obj_foo in order to fetch the previous page of the list.  | [optional] 

### Return type

[**ListRunsResponse**](ListRunsResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="modifyMessage"></a>
# **modifyMessage**
> MessageObject modifyMessage(body, threadId, messageId)

Modifies a message.

### Example
```javascript
import {OpenAiApi} from 'open_ai_api';
let defaultClient = OpenAiApi.ApiClient.instance;


let apiInstance = new OpenAiApi.AssistantsApi();
let body = new OpenAiApi.ModifyMessageRequest(); // ModifyMessageRequest | 
let threadId = "threadId_example"; // String | The ID of the thread to which this message belongs.
let messageId = "messageId_example"; // String | The ID of the message to modify.

apiInstance.modifyMessage(body, threadId, messageId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ModifyMessageRequest**](ModifyMessageRequest.md)|  | 
 **threadId** | **String**| The ID of the thread to which this message belongs. | 
 **messageId** | **String**| The ID of the message to modify. | 

### Return type

[**MessageObject**](MessageObject.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="modifyRun"></a>
# **modifyRun**
> RunObject modifyRun(body, threadId, runId)

Modifies a run.

### Example
```javascript
import {OpenAiApi} from 'open_ai_api';
let defaultClient = OpenAiApi.ApiClient.instance;


let apiInstance = new OpenAiApi.AssistantsApi();
let body = new OpenAiApi.ModifyRunRequest(); // ModifyRunRequest | 
let threadId = "threadId_example"; // String | The ID of the [thread](/docs/api-reference/threads) that was run.
let runId = "runId_example"; // String | The ID of the run to modify.

apiInstance.modifyRun(body, threadId, runId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ModifyRunRequest**](ModifyRunRequest.md)|  | 
 **threadId** | **String**| The ID of the [thread](/docs/api-reference/threads) that was run. | 
 **runId** | **String**| The ID of the run to modify. | 

### Return type

[**RunObject**](RunObject.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="modifyThread"></a>
# **modifyThread**
> ThreadObject modifyThread(body, threadId)

Modifies a thread.

### Example
```javascript
import {OpenAiApi} from 'open_ai_api';
let defaultClient = OpenAiApi.ApiClient.instance;


let apiInstance = new OpenAiApi.AssistantsApi();
let body = new OpenAiApi.ModifyThreadRequest(); // ModifyThreadRequest | 
let threadId = "threadId_example"; // String | The ID of the thread to modify. Only the `metadata` can be modified.

apiInstance.modifyThread(body, threadId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**ModifyThreadRequest**](ModifyThreadRequest.md)|  | 
 **threadId** | **String**| The ID of the thread to modify. Only the &#x60;metadata&#x60; can be modified. | 

### Return type

[**ThreadObject**](ThreadObject.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="submitToolOuputsToRun"></a>
# **submitToolOuputsToRun**
> RunObject submitToolOuputsToRun(body, threadId, runId)

When a run has the &#x60;status: \&quot;requires_action\&quot;&#x60; and &#x60;required_action.type&#x60; is &#x60;submit_tool_outputs&#x60;, this endpoint can be used to submit the outputs from the tool calls once they&#x27;re all completed. All outputs must be submitted in a single request. 

### Example
```javascript
import {OpenAiApi} from 'open_ai_api';
let defaultClient = OpenAiApi.ApiClient.instance;


let apiInstance = new OpenAiApi.AssistantsApi();
let body = new OpenAiApi.SubmitToolOutputsRunRequest(); // SubmitToolOutputsRunRequest | 
let threadId = "threadId_example"; // String | The ID of the [thread](/docs/api-reference/threads) to which this run belongs.
let runId = "runId_example"; // String | The ID of the run that requires the tool output submission.

apiInstance.submitToolOuputsToRun(body, threadId, runId, (error, data, response) => {
  if (error) {
    console.error(error);
  } else {
    console.log('API called successfully. Returned data: ' + data);
  }
});
```

### Parameters

Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **body** | [**SubmitToolOutputsRunRequest**](SubmitToolOutputsRunRequest.md)|  | 
 **threadId** | **String**| The ID of the [thread](/docs/api-reference/threads) to which this run belongs. | 
 **runId** | **String**| The ID of the run that requires the tool output submission. | 

### Return type

[**RunObject**](RunObject.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

