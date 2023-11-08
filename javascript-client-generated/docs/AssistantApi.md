# OpenAiApi.AssistantApi

All URIs are relative to *https://api.openai.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**modifyAssistant**](AssistantApi.md#modifyAssistant) | **POST** /assistants/{assistant_id} | Modifies an assistant.

<a name="modifyAssistant"></a>
# **modifyAssistant**
> AssistantObject modifyAssistant(body, assistantId)

Modifies an assistant.

### Example
```javascript
import {OpenAiApi} from 'open_ai_api';
let defaultClient = OpenAiApi.ApiClient.instance;


let apiInstance = new OpenAiApi.AssistantApi();
let body = new OpenAiApi.ModifyAssistantRequest(); // ModifyAssistantRequest | 
let assistantId = "assistantId_example"; // String | The ID of the assistant to modify.

apiInstance.modifyAssistant(body, assistantId, (error, data, response) => {
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
 **body** | [**ModifyAssistantRequest**](ModifyAssistantRequest.md)|  | 
 **assistantId** | **String**| The ID of the assistant to modify. | 

### Return type

[**AssistantObject**](AssistantObject.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

