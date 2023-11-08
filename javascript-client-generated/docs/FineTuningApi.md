# OpenAiApi.FineTuningApi

All URIs are relative to *https://api.openai.com/v1*

Method | HTTP request | Description
------------- | ------------- | -------------
[**cancelFineTuningJob**](FineTuningApi.md#cancelFineTuningJob) | **POST** /fine_tuning/jobs/{fine_tuning_job_id}/cancel | Immediately cancel a fine-tune job. 
[**createFineTuningJob**](FineTuningApi.md#createFineTuningJob) | **POST** /fine_tuning/jobs | Creates a job that fine-tunes a specified model from a given dataset.  Response includes details of the enqueued job including job status and the name of the fine-tuned models once complete.  [Learn more about fine-tuning](/docs/guides/fine-tuning) 
[**listFineTuningEvents**](FineTuningApi.md#listFineTuningEvents) | **GET** /fine_tuning/jobs/{fine_tuning_job_id}/events | Get status updates for a fine-tuning job. 
[**listPaginatedFineTuningJobs**](FineTuningApi.md#listPaginatedFineTuningJobs) | **GET** /fine_tuning/jobs | List your organization&#x27;s fine-tuning jobs 
[**retrieveFineTuningJob**](FineTuningApi.md#retrieveFineTuningJob) | **GET** /fine_tuning/jobs/{fine_tuning_job_id} | Get info about a fine-tuning job.  [Learn more about fine-tuning](/docs/guides/fine-tuning) 

<a name="cancelFineTuningJob"></a>
# **cancelFineTuningJob**
> FineTuningJob cancelFineTuningJob(fineTuningJobId)

Immediately cancel a fine-tune job. 

### Example
```javascript
import {OpenAiApi} from 'open_ai_api';
let defaultClient = OpenAiApi.ApiClient.instance;


let apiInstance = new OpenAiApi.FineTuningApi();
let fineTuningJobId = "fineTuningJobId_example"; // String | The ID of the fine-tuning job to cancel. 

apiInstance.cancelFineTuningJob(fineTuningJobId, (error, data, response) => {
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
 **fineTuningJobId** | **String**| The ID of the fine-tuning job to cancel.  | 

### Return type

[**FineTuningJob**](FineTuningJob.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="createFineTuningJob"></a>
# **createFineTuningJob**
> FineTuningJob createFineTuningJob(body)

Creates a job that fine-tunes a specified model from a given dataset.  Response includes details of the enqueued job including job status and the name of the fine-tuned models once complete.  [Learn more about fine-tuning](/docs/guides/fine-tuning) 

### Example
```javascript
import {OpenAiApi} from 'open_ai_api';
let defaultClient = OpenAiApi.ApiClient.instance;


let apiInstance = new OpenAiApi.FineTuningApi();
let body = new OpenAiApi.CreateFineTuningJobRequest(); // CreateFineTuningJobRequest | 

apiInstance.createFineTuningJob(body, (error, data, response) => {
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
 **body** | [**CreateFineTuningJobRequest**](CreateFineTuningJobRequest.md)|  | 

### Return type

[**FineTuningJob**](FineTuningJob.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

<a name="listFineTuningEvents"></a>
# **listFineTuningEvents**
> ListFineTuningJobEventsResponse listFineTuningEvents(fineTuningJobId, opts)

Get status updates for a fine-tuning job. 

### Example
```javascript
import {OpenAiApi} from 'open_ai_api';
let defaultClient = OpenAiApi.ApiClient.instance;


let apiInstance = new OpenAiApi.FineTuningApi();
let fineTuningJobId = "fineTuningJobId_example"; // String | The ID of the fine-tuning job to get events for. 
let opts = { 
  'after': "after_example", // String | Identifier for the last event from the previous pagination request.
  'limit': 20 // Number | Number of events to retrieve.
};
apiInstance.listFineTuningEvents(fineTuningJobId, opts, (error, data, response) => {
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
 **fineTuningJobId** | **String**| The ID of the fine-tuning job to get events for.  | 
 **after** | **String**| Identifier for the last event from the previous pagination request. | [optional] 
 **limit** | **Number**| Number of events to retrieve. | [optional] [default to 20]

### Return type

[**ListFineTuningJobEventsResponse**](ListFineTuningJobEventsResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="listPaginatedFineTuningJobs"></a>
# **listPaginatedFineTuningJobs**
> ListPaginatedFineTuningJobsResponse listPaginatedFineTuningJobs(opts)

List your organization&#x27;s fine-tuning jobs 

### Example
```javascript
import {OpenAiApi} from 'open_ai_api';
let defaultClient = OpenAiApi.ApiClient.instance;


let apiInstance = new OpenAiApi.FineTuningApi();
let opts = { 
  'after': "after_example", // String | Identifier for the last job from the previous pagination request.
  'limit': 20 // Number | Number of fine-tuning jobs to retrieve.
};
apiInstance.listPaginatedFineTuningJobs(opts, (error, data, response) => {
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
 **after** | **String**| Identifier for the last job from the previous pagination request. | [optional] 
 **limit** | **Number**| Number of fine-tuning jobs to retrieve. | [optional] [default to 20]

### Return type

[**ListPaginatedFineTuningJobsResponse**](ListPaginatedFineTuningJobsResponse.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

<a name="retrieveFineTuningJob"></a>
# **retrieveFineTuningJob**
> FineTuningJob retrieveFineTuningJob(fineTuningJobId)

Get info about a fine-tuning job.  [Learn more about fine-tuning](/docs/guides/fine-tuning) 

### Example
```javascript
import {OpenAiApi} from 'open_ai_api';
let defaultClient = OpenAiApi.ApiClient.instance;


let apiInstance = new OpenAiApi.FineTuningApi();
let fineTuningJobId = "fineTuningJobId_example"; // String | The ID of the fine-tuning job. 

apiInstance.retrieveFineTuningJob(fineTuningJobId, (error, data, response) => {
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
 **fineTuningJobId** | **String**| The ID of the fine-tuning job.  | 

### Return type

[**FineTuningJob**](FineTuningJob.md)

### Authorization

[ApiKeyAuth](../README.md#ApiKeyAuth)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

