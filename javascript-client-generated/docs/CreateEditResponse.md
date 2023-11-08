# OpenAiApi.CreateEditResponse

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**choices** | [**[CreateEditResponseChoices]**](CreateEditResponseChoices.md) | A list of edit choices. Can be more than one if &#x60;n&#x60; is greater than 1. | 
**_object** | **String** | The object type, which is always &#x60;edit&#x60;. | 
**created** | **Number** | The Unix timestamp (in seconds) of when the edit was created. | 
**usage** | [**CompletionUsage**](CompletionUsage.md) |  | 

<a name="ObjectEnum"></a>
## Enum: ObjectEnum

* `edit` (value: `"edit"`)

