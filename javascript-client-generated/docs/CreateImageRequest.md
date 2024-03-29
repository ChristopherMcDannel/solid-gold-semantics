# OpenAiApi.CreateImageRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**prompt** | **String** | A text description of the desired image(s). The maximum length is 1000 characters for &#x60;dall-e-2&#x60; and 4000 characters for &#x60;dall-e-3&#x60;. | 
**model** | **AnyOfCreateImageRequestModel** | The model to use for image generation. | [optional] 
**n** | **Number** | The number of images to generate. Must be between 1 and 10. For &#x60;dall-e-3&#x60;, only &#x60;n&#x3D;1&#x60; is supported. | [optional] [default to 1]
**quality** | **String** | The quality of the image that will be generated. &#x60;hd&#x60; creates images with finer details and greater consistency across the image. This param is only supported for &#x60;dall-e-3&#x60;. | [optional] [default to &#x27;standard&#x27;]
**responseFormat** | **String** | The format in which the generated images are returned. Must be one of &#x60;url&#x60; or &#x60;b64_json&#x60;. | [optional] [default to &#x27;url&#x27;]
**size** | **String** | The size of the generated images. Must be one of &#x60;256x256&#x60;, &#x60;512x512&#x60;, or &#x60;1024x1024&#x60; for &#x60;dall-e-2&#x60;. Must be one of &#x60;1024x1024&#x60;, &#x60;1792x1024&#x60;, or &#x60;1024x1792&#x60; for &#x60;dall-e-3&#x60; models. | [optional] [default to &#x27;1024x1024&#x27;]
**style** | **String** | The style of the generated images. Must be one of &#x60;vivid&#x60; or &#x60;natural&#x60;. Vivid causes the model to lean towards generating hyper-real and dramatic images. Natural causes the model to produce more natural, less hyper-real looking images. This param is only supported for &#x60;dall-e-3&#x60;. | [optional] [default to &#x27;vivid&#x27;]
**user** | **String** | A unique identifier representing your end-user, which can help OpenAI to monitor and detect abuse. [Learn more](/docs/guides/safety-best-practices/end-user-ids).  | [optional] 

<a name="QualityEnum"></a>
## Enum: QualityEnum

* `standard` (value: `"standard"`)
* `hd` (value: `"hd"`)


<a name="ResponseFormatEnum"></a>
## Enum: ResponseFormatEnum

* `url` (value: `"url"`)
* `b64Json` (value: `"b64_json"`)


<a name="SizeEnum"></a>
## Enum: SizeEnum

* `_256x256` (value: `"256x256"`)
* `_512x512` (value: `"512x512"`)
* `_1024x1024` (value: `"1024x1024"`)
* `_1792x1024` (value: `"1792x1024"`)
* `_1024x1792` (value: `"1024x1792"`)


<a name="StyleEnum"></a>
## Enum: StyleEnum

* `vivid` (value: `"vivid"`)
* `natural` (value: `"natural"`)

