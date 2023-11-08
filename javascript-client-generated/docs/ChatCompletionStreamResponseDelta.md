# OpenAiApi.ChatCompletionStreamResponseDelta

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**content** | **String** | The contents of the chunk message. | [optional] 
**functionCall** | [**ChatCompletionStreamResponseDeltaFunctionCall**](ChatCompletionStreamResponseDeltaFunctionCall.md) |  | [optional] 
**toolCalls** | [**[ChatCompletionMessageToolCallChunk]**](ChatCompletionMessageToolCallChunk.md) |  | [optional] 
**role** | **String** | The role of the author of this message. | [optional] 

<a name="RoleEnum"></a>
## Enum: RoleEnum

* `system` (value: `"system"`)
* `user` (value: `"user"`)
* `assistant` (value: `"assistant"`)
* `tool` (value: `"tool"`)

