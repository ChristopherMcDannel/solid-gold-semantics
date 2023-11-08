# OpenAiApi.EditsApi

All URIs are relative to *https://api.openai.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createEdit**](EditsApi.md#createEdit) | **POST** /edits | Creates a new edit for the provided input, instruction, and parameters.

<a name="createEdit"></a>
# **createEdit**
> CreateEditResponse createEdit(body)

Creates a new edit for the provided input, instruction, and parameters.

### Example
```javascript
import {OpenAiApi} from 'open_ai_api';
let defaultClient = OpenAiApi.ApiClient.instance;


let apiInstance = new OpenAiApi.EditsApi();
let body = new OpenAiApi.CreateEditRequest(); // CreateEditRequest | 

apiInstance.createEdit(body, (error, data, response) => {
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
 **body** | [**CreateEditRequest**](CreateEditRequest.md)|  | 

### Return type

[**CreateEditResponse**](CreateEditResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

