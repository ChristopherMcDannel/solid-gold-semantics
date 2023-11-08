# OpenAiApi.CreateChatCompletionResponseChoices

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**finishReason** | **String** | The reason the model stopped generating tokens. This will be &#x60;stop&#x60; if the model hit a natural stop point or a provided stop sequence, &#x60;length&#x60; if the maximum number of tokens specified in the request was reached, &#x60;content_filter&#x60; if content was omitted due to a flag from our content filters, &#x60;tool_calls&#x60; if the model called a tool, or &#x60;function_call&#x60; (deprecated) if the model called a function.  | 
**index** | **Number** | The index of the choice in the list of choices. | 
**message** | [**ChatCompletionResponseMessage**](ChatCompletionResponseMessage.md) |  | 

<a name="FinishReasonEnum"></a>
## Enum: FinishReasonEnum

* `stop` (value: `"stop"`)
* `length` (value: `"length"`)
* `toolCalls` (value: `"tool_calls"`)
* `contentFilter` (value: `"content_filter"`)
* `functionCall` (value: `"function_call"`)

