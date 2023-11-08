# OpenAiApi.CreateImageVariationRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image** | **Blob** | The image to use as the basis for the variation(s). Must be a valid PNG file, less than 4MB, and square. | 
**model** | **AnyOfCreateImageVariationRequestModel** | The model to use for image generation. Only &#x60;dall-e-2&#x60; is supported at this time. | [optional] 
**n** | **Number** | The number of images to generate. Must be between 1 and 10. For &#x60;dall-e-3&#x60;, only &#x60;n&#x3D;1&#x60; is supported. | [optional] [default to 1]
**responseFormat** | **String** | The format in which the generated images are returned. Must be one of &#x60;url&#x60; or &#x60;b64_json&#x60;. | [optional] [default to &#x27;url&#x27;]
**size** | **String** | The size of the generated images. Must be one of &#x60;256x256&#x60;, &#x60;512x512&#x60;, or &#x60;1024x1024&#x60;. | [optional] [default to &#x27;1024x1024&#x27;]
**user** | **String** | A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices/end-user-ids).  | [optional] 

<a name="ResponseFormatEnum"></a>
## Enum: ResponseFormatEnum

* `url` (value: `"url"`)
* `b64Json` (value: `"b64_json"`)


<a name="SizeEnum"></a>
## Enum: SizeEnum

* `_256x256` (value: `"256x256"`)
* `_512x512` (value: `"512x512"`)
* `_1024x1024` (value: `"1024x1024"`)

