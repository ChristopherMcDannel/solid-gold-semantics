# OpenAiApi.RunStepObject

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | The identifier of the run step, which can be referenced in API endpoints. | 
**_object** | **String** | The object type, which is always &#x60;assistant.run.step&#x60;&#x60;. | 
**createdAt** | **Number** | The Unix timestamp (in seconds) for when the run step was created. | 
**assistantId** | **String** | The ID of the [assistant](/docs/api-reference/assistants) associated with the run step. | 
**threadId** | **String** | The ID of the [thread](/docs/api-reference/threads) that was run. | 
**runId** | **String** | The ID of the [run](/docs/api-reference/runs) that this run step is a part of. | 
**type** | **String** | The type of run step, which can be either &#x60;message_creation&#x60; or &#x60;tool_calls&#x60;. | 
**status** | **String** | The status of the run, which can be either &#x60;in_progress&#x60;, &#x60;cancelled&#x60;, &#x60;failed&#x60;, &#x60;completed&#x60;, or &#x60;expired&#x60;. | 
**stepDetails** | **OneOfRunStepObjectStepDetails** | The details of the run step. | 
**lastError** | [**RunStepObjectLastError**](RunStepObjectLastError.md) |  | 
**expiredAt** | **Number** | The Unix timestamp (in seconds) for when the run step expired. A step is considered expired if the parent run is expired. | 
**cancelledAt** | **Number** | The Unix timestamp (in seconds) for when the run step was cancelled. | 
**failedAt** | **Number** | The Unix timestamp (in seconds) for when the run step failed. | 
**completedAt** | **Number** | The Unix timestamp (in seconds) for when the run step completed. | 
**metadata** | **Object** | Set of 16 key-value pairs that can be attached to an object. This can be useful for storing additional information about the object in a structured format. Keys can be a maximum of 64 characters long and values can be a maxium of 512 characters long.  | 

<a name="ObjectEnum"></a>
## Enum: ObjectEnum

* `assistantRunStep` (value: `"assistant.run.step"`)


<a name="TypeEnum"></a>
## Enum: TypeEnum

* `messageCreation` (value: `"message_creation"`)
* `toolCalls` (value: `"tool_calls"`)


<a name="StatusEnum"></a>
## Enum: StatusEnum

* `inProgress` (value: `"in_progress"`)
* `cancelled` (value: `"cancelled"`)
* `failed` (value: `"failed"`)
* `completed` (value: `"completed"`)
* `expired` (value: `"expired"`)

