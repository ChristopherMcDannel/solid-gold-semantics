# OpenAiApi.CreateEmbeddingRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**input** | **OneOfCreateEmbeddingRequestInput** | Input text to embed, encoded as a string or array of tokens. To embed multiple inputs in a single request, pass an array of strings or array of token arrays. The input must not exceed the max input tokens for the model (8192 tokens for &#x60;text-embedding-ada-002&#x60;) and cannot be an empty string. [Example Python code](https://cookbook.openai.com/examples/how_to_count_tokens_with_tiktoken) for counting tokens.  | 
**model** | **AnyOfCreateEmbeddingRequestModel** | ID of the model to use. You can use the [List models](/docs/api-reference/models/list) API to see all of your available models, or see our [Model overview](/docs/models/overview) for descriptions of them.  | 
**encodingFormat** | **String** | The format to return the embeddings in. Can be either &#x60;float&#x60; or [&#x60;base64&#x60;](https://pypi.org/project/pybase64/). | [optional] [default to &#x27;float&#x27;]
**user** | **String** | A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices/end-user-ids).  | [optional] 

<a name="EncodingFormatEnum"></a>
## Enum: EncodingFormatEnum

* `_float` (value: `"float"`)
* `base64` (value: `"base64"`)

