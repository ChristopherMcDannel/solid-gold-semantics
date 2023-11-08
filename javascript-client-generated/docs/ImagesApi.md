# OpenAiApi.ImagesApi

All URIs are relative to *https://api.openai.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**createImage**](ImagesApi.md#createImage) | **POST** /images/generations | Creates an image given a prompt.
[**createImageEdit**](ImagesApi.md#createImageEdit) | **POST** /images/edits | Creates an edited or extended image given an original image and a prompt.
[**createImageVariation**](ImagesApi.md#createImageVariation) | **POST** /images/variations | Creates a variation of a given image.

<a name="createImage"></a>
# **createImage**
> ImagesResponse createImage(body)

Creates an image given a prompt.

### Example
```javascript
import {OpenAiApi} from 'open_ai_api';
let defaultClient = OpenAiApi.ApiClient.instance;


let apiInstance = new OpenAiApi.ImagesApi();
let body = new OpenAiApi.CreateImageRequest(); // CreateImageRequest | 

apiInstance.createImage(body, (error, data, response) => {
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
 **body** | [**CreateImageRequest**](CreateImageRequest.md)|  | 

### Return type

[**ImagesResponse**](ImagesResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="createImageEdit"></a>
# **createImageEdit**
> ImagesResponse createImageEdit(image, prompt, mask, model, n, size, responseFormat, user)

Creates an edited or extended image given an original image and a prompt.

### Example
```javascript
import {OpenAiApi} from 'open_ai_api';
let defaultClient = OpenAiApi.ApiClient.instance;


let apiInstance = new OpenAiApi.ImagesApi();
let image = "image_example"; // Blob | 
let prompt = "prompt_example"; // String | 
let mask = "mask_example"; // Blob | 
let model = null; // Object | 
let n = 56; // Number | 
let size = "size_example"; // String | 
let responseFormat = "responseFormat_example"; // String | 
let user = "user_example"; // String | 

apiInstance.createImageEdit(image, prompt, mask, model, n, size, responseFormat, user, (error, data, response) => {
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
 **image** | **Blob**|  | 
 **prompt** | **String**|  | 
 **mask** | **Blob**|  | 
 **model** | [**Object**](.md)|  | 
 **n** | **Number**|  | 
 **size** | **String**|  | 
 **responseFormat** | **String**|  | 
 **user** | **String**|  | 

### Return type

[**ImagesResponse**](ImagesResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

<a name="createImageVariation"></a>
# **createImageVariation**
> ImagesResponse createImageVariation(image, model, n, responseFormat, size, user)

Creates a variation of a given image.

### Example
```javascript
import {OpenAiApi} from 'open_ai_api';
let defaultClient = OpenAiApi.ApiClient.instance;


let apiInstance = new OpenAiApi.ImagesApi();
let image = "image_example"; // Blob | 
let model = null; // Object | 
let n = 56; // Number | 
let responseFormat = "responseFormat_example"; // String | 
let size = "size_example"; // String | 
let user = "user_example"; // String | 

apiInstance.createImageVariation(image, model, n, responseFormat, size, user, (error, data, response) => {
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
 **image** | **Blob**|  | 
 **model** | [**Object**](.md)|  | 
 **n** | **Number**|  | 
 **responseFormat** | **String**|  | 
 **size** | **String**|  | 
 **user** | **String**|  | 

### Return type

[**ImagesResponse**](ImagesResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: application/json

