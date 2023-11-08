# OpenAiApi.CompletionsApi

All URIs are relative to *https://api.openai.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createCompletion**](CompletionsApi.md#createCompletion) | **POST** /completions | Creates a completion for the provided prompt and parameters.

<a name="createCompletion"></a>
# **createCompletion**
> CreateCompletionResponse createCompletion(body)

Creates a completion for the provided prompt and parameters.

### Example
```javascript
import {OpenAiApi} from 'open_ai_api';
let defaultClient = OpenAiApi.ApiClient.instance;


let apiInstance = new OpenAiApi.CompletionsApi();
let body = new OpenAiApi.CreateCompletionRequest(); // CreateCompletionRequest | 

apiInstance.createCompletion(body, (error, data, response) => {
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
 **body** | [**CreateCompletionRequest**](CreateCompletionRequest.md)|  | 

### Return type

[**CreateCompletionResponse**](CreateCompletionResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

