# OpenAiApi.EmbeddingsApi

All URIs are relative to *https://api.openai.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createEmbedding**](EmbeddingsApi.md#createEmbedding) | **POST** /embeddings | Creates an embedding vector representing the input text.

<a name="createEmbedding"></a>
# **createEmbedding**
> CreateEmbeddingResponse createEmbedding(body)

Creates an embedding vector representing the input text.

### Example
```javascript
import {OpenAiApi} from 'open_ai_api';
let defaultClient = OpenAiApi.ApiClient.instance;


let apiInstance = new OpenAiApi.EmbeddingsApi();
let body = new OpenAiApi.CreateEmbeddingRequest(); // CreateEmbeddingRequest | 

apiInstance.createEmbedding(body, (error, data, response) => {
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
 **body** | [**CreateEmbeddingRequest**](CreateEmbeddingRequest.md)|  | 

### Return type

[**CreateEmbeddingResponse**](CreateEmbeddingResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

