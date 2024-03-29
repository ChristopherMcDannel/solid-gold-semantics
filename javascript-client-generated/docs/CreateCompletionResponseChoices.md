# OpenAiApi.CreateCompletionResponseChoices

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**finishReason** | **String** | The reason the model stopped generating tokens. This will be &#x60;stop&#x60; if the model hit a natural stop point or a provided stop sequence, &#x60;length&#x60; if the maximum number of tokens specified in the request was reached, or &#x60;content_filter&#x60; if content was omitted due to a flag from our content filters.  | 
**index** | **Number** |  | 
**logprobs** | [**CreateCompletionResponseLogprobs**](CreateCompletionResponseLogprobs.md) |  | 
**text** | **String** |  | 

<a name="FinishReasonEnum"></a>
## Enum: FinishReasonEnum

* `stop` (value: `"stop"`)
* `length` (value: `"length"`)
* `contentFilter` (value: `"content_filter"`)

