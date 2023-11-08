# OpenAiApi.CreateChatCompletionStreamResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **String** | A unique identifier for the chat completion. Each chunk has the same ID. | 
**choices** | [**[CreateChatCompletionStreamResponseChoices]**](CreateChatCompletionStreamResponseChoices.md) | A list of chat completion choices. Can be more than one if &#x60;n&#x60; is greater than 1. | 
**created** | **Number** | The Unix timestamp (in seconds) of when the chat completion was created. Each chunk has the same timestamp. | 
**model** | **String** | The model to generate the completion. | 
**_object** | **String** | The object type, which is always &#x60;chat.completion.chunk&#x60;. | 

<a name="ObjectEnum"></a>
## Enum: ObjectEnum

* `chatCompletionChunk` (value: `"chat.completion.chunk"`)

