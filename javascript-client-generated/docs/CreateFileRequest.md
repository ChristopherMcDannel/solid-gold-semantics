# OpenAiApi.CreateFileRequest

## Properties
Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file** | **Blob** | The File object (not file name) to be uploaded.  | 
**purpose** | **String** | The intended purpose of the uploaded file.  Use \&quot;fine-tune\&quot; for [Fine-tuning](/docs/api-reference/fine-tuning) and \&quot;assistants\&quot; for [Assistants](/docs/api-reference/assistants) and [Messages](/docs/api-reference/messages). This allows us to validate the format of the uploaded file is correct for fine-tuning.  | 

<a name="PurposeEnum"></a>
## Enum: PurposeEnum

* `fineTune` (value: `"fine-tune"`)
* `assistants` (value: `"assistants"`)

