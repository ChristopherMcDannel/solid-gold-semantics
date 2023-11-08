# OpenAiApi.AudioApi

All URIs are relative to *https://api.openai.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createSpeech**](AudioApi.md#createSpeech) | **POST** /audio/speech | Generates audio from the input text.
[**createTranscription**](AudioApi.md#createTranscription) | **POST** /audio/transcriptions | Transcribes audio into the input language.
[**createTranslation**](AudioApi.md#createTranslation) | **POST** /audio/translations | Translates audio into English.

<a name="createSpeech"></a>
# **createSpeech**
> &#x27;Blob&#x27; createSpeech(body)

Generates audio from the input text.

### Example
```javascript
import {OpenAiApi} from 'open_ai_api';
let defaultClient = OpenAiApi.ApiClient.instance;


let apiInstance = new OpenAiApi.AudioApi();
let body = new OpenAiApi.CreateSpeechRequest(); // CreateSpeechRequest | 

apiInstance.createSpeech(body, (error, data, response) => {
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
 **body** | [**CreateSpeechRequest**](CreateSpeechRequest.md)|  | 

### Return type

**&#x27;Blob&#x27;**

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/octet-stream

<a name="createTranscription"></a>
# **createTranscription**
> CreateTranscriptionResponse createTranscription(file, model, language, prompt, responseFormat, temperature)

Transcribes audio into the input language.

### Example
```javascript
import {OpenAiApi} from 'open_ai_api';
let defaultClient = OpenAiApi.ApiClient.instance;


let apiInstance = new OpenAiApi.AudioApi();
let file = "file_example"; // Blob | 
let model = null; // Object | 
let language = "language_example"; // String | 
let prompt = "prompt_example"; // String | 
let responseFormat = "responseFormat_example"; // String | 
let temperature = 1.2; // Number | 

apiInstance.createTranscription(file, model, language, prompt, responseFormat, temperature, (error, data, response) => {
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
 **file** | **Blob**|  | 
 **model** | [**Object**](.md)|  | 
 **language** | **String**|  | 
 **prompt** | **String**|  | 
 **responseFormat** | **String**|  | 
 **temperature** | **Number**|  | 

### Return type

[**CreateTranscriptionResponse**](CreateTranscriptionResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="createTranslation"></a>
# **createTranslation**
> CreateTranslationResponse createTranslation(file, model, prompt, responseFormat, temperature)

Translates audio into English.

### Example
```javascript
import {OpenAiApi} from 'open_ai_api';
let defaultClient = OpenAiApi.ApiClient.instance;


let apiInstance = new OpenAiApi.AudioApi();
let file = "file_example"; // Blob | 
let model = null; // Object | 
let prompt = "prompt_example"; // String | 
let responseFormat = "responseFormat_example"; // String | 
let temperature = 1.2; // Number | 

apiInstance.createTranslation(file, model, prompt, responseFormat, temperature, (error, data, response) => {
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
 **file** | **Blob**|  | 
 **model** | [**Object**](.md)|  | 
 **prompt** | **String**|  | 
 **responseFormat** | **String**|  | 
 **temperature** | **Number**|  | 

### Return type

[**CreateTranslationResponse**](CreateTranslationResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

