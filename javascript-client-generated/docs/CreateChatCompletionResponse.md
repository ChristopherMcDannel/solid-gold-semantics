# OpenAiApi.CreateChatCompletionResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique identifier for the chat completion. | 
**choices** | [**[CreateChatCompletionResponseChoices]**](CreateChatCompletionResponseChoices.md) | A list of chat completion choices. Can be more than one if &#x60;n&#x60; is greater than 1. | 
**created** | **Number** | The Unix timestamp (in seconds) of when the chat completion was created. | 
**model** | **String** | The model used for the chat completion. | 
**systemFingerprint** | **String** | This fingerprint represents the backend configuration that the model runs with.  Can be used in conjunction with the &#x60;seed&#x60; request parameter to understand when backend changes have been made that might impact determinism.  | [optional] 
**_object** | **String** | The object type, which is always &#x60;chat.completion&#x60;. | 
**usage** | [**CompletionUsage**](CompletionUsage.md) |  | [optional] 

<a name="ObjectEnum"></a>
## Enum: ObjectEnum

* `chatCompletion` (value: `"chat.completion"`)

