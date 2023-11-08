# OpenAiApi.ChatApi

All URIs are relative to *https://api.openai.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createChatCompletion**](ChatApi.md#createChatCompletion) | **POST** /chat/completions | Creates a model response for the given chat conversation.

<a name="createChatCompletion"></a>
# **createChatCompletion**
> CreateChatCompletionResponse createChatCompletion(body)

Creates a model response for the given chat conversation.

### Example
```javascript
import {OpenAiApi} from 'open_ai_api';
let defaultClient = OpenAiApi.ApiClient.instance;


let apiInstance = new OpenAiApi.ChatApi();
let body = new OpenAiApi.CreateChatCompletionRequest(); // CreateChatCompletionRequest | 

apiInstance.createChatCompletion(body, (error, data, response) => {
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
 **body** | [**CreateChatCompletionRequest**](CreateChatCompletionRequest.md)|  | 

### Return type

[**CreateChatCompletionResponse**](CreateChatCompletionResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

